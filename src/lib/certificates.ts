import {
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  serverTimestamp,
  type Firestore,
} from 'firebase/firestore';

export interface Certificate {
  id: string;
  name: string;
  email: string;
  role: string;
  issuedAt: string;
  status: 'generated' | 'sent';
  sentAt?: string;
}

export function generateCertificateId(): string {
  const year = new Date().getFullYear();
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let random = '';
  for (let i = 0; i < 6; i++) {
    random += chars[Math.floor(Math.random() * chars.length)];
  }
  return `BD-${year}-${random}`;
}

export async function saveCertificate(
  firestore: Firestore,
  cert: Omit<Certificate, 'status'>
): Promise<void> {
  const ref = doc(collection(firestore, 'certificates'), cert.id);
  await setDoc(ref, { ...cert, status: 'generated' });
}

export async function markCertificateSent(
  firestore: Firestore,
  id: string
): Promise<void> {
  const ref = doc(collection(firestore, 'certificates'), id);
  await updateDoc(ref, {
    status: 'sent',
    sentAt: new Date().toISOString(),
  });
}

export async function getCertificate(
  firestore: Firestore,
  id: string
): Promise<Certificate | null> {
  const ref = doc(collection(firestore, 'certificates'), id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return snap.data() as Certificate;
}

// Client-side: generate QR code as data URL
export async function generateQRCode(certId: string): Promise<string> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://bharatsdev.com';
  const verifyUrl = `${baseUrl}/verify?id=${certId}`;
  const QRCode = (await import('qrcode')).default;
  return QRCode.toDataURL(verifyUrl, {
    width: 200,
    margin: 1,
    color: { dark: '#000000', light: '#FFFFFF' },
  });
}

// Client-side: generate certificate PDF using jsPDF
export async function generateCertificatePDF(params: {
  name: string;
  role: string;
  certId: string;
  qrDataUrl: string;
  issuedAt: string;
}): Promise<{ pdfBase64: string; pdfBlob: Blob }> {
  const { jsPDF } = await import('jspdf');
  const { name, role, certId, qrDataUrl, issuedAt } = params;

  const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
  const W = 297;
  const H = 210;

  // --- Background ---
  pdf.setFillColor(5, 5, 5);
  pdf.rect(0, 0, W, H, 'F');

  // --- Outer border (blue) ---
  pdf.setDrawColor(37, 99, 235);
  pdf.setLineWidth(1.2);
  pdf.rect(8, 8, W - 16, H - 16);

  // --- Inner border (orange) ---
  pdf.setDrawColor(249, 115, 22);
  pdf.setLineWidth(0.4);
  pdf.rect(11, 11, W - 22, H - 22);

  // --- Corner accents ---
  const cornerSize = 8;
  pdf.setFillColor(37, 99, 235);
  pdf.rect(8, 8, cornerSize, cornerSize, 'F');
  pdf.rect(W - 8 - cornerSize, 8, cornerSize, cornerSize, 'F');
  pdf.rect(8, H - 8 - cornerSize, cornerSize, cornerSize, 'F');
  pdf.rect(W - 8 - cornerSize, H - 8 - cornerSize, cornerSize, cornerSize, 'F');

  // --- BharatsDev wordmark (top left) ---
  pdf.setTextColor(255, 255, 255);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(16);
  pdf.text('Bharats', 20, 28);
  pdf.setTextColor(37, 99, 235);
  pdf.text('Dev', 48, 28);

  // --- Cert of Completion label (top center) ---
  pdf.setTextColor(180, 180, 180);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(9);
  pdf.text('CERTIFICATE OF COMPLETION', W / 2, 24, { align: 'center' });

  // --- Horizontal rule ---
  pdf.setDrawColor(37, 99, 235);
  pdf.setLineWidth(0.3);
  pdf.line(20, 35, W - 20, 35);

  // --- "THIS CERTIFIES THAT" ---
  pdf.setTextColor(130, 130, 130);
  pdf.setFont('helvetica', 'italic');
  pdf.setFontSize(11);
  pdf.text('This certifies that', W / 2, 52, { align: 'center' });

  // --- Recipient name ---
  pdf.setTextColor(255, 255, 255);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(38);
  pdf.text(name, W / 2, 78, { align: 'center' });

  // --- Name underline ---
  const nameWidth = pdf.getTextWidth(name);
  const nameX = W / 2 - nameWidth / 2;
  pdf.setDrawColor(249, 115, 22);
  pdf.setLineWidth(0.8);
  pdf.line(nameX, 81, nameX + nameWidth, 81);

  // --- "has successfully completed the program in" ---
  pdf.setTextColor(130, 130, 130);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(11);
  pdf.text('has successfully completed the program in', W / 2, 96, { align: 'center' });

  // --- Role/Program name ---
  pdf.setTextColor(37, 99, 235);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(17);
  pdf.text(role, W / 2, 108, { align: 'center' });

  // --- Horizontal rule bottom ---
  pdf.setDrawColor(37, 99, 235);
  pdf.setLineWidth(0.3);
  pdf.line(20, 118, W - 20, 118);

  // --- Issue date (bottom left) ---
  const formattedDate = new Date(issuedAt).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
  pdf.setTextColor(150, 150, 150);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(8);
  pdf.text('DATE OF ISSUE', 22, 130);
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(10);
  pdf.text(formattedDate, 22, 137);

  // --- Certificate ID ---
  pdf.setTextColor(150, 150, 150);
  pdf.setFontSize(8);
  pdf.text('CERTIFICATE ID', 22, 148);
  pdf.setTextColor(37, 99, 235);
  pdf.setFont('courier', 'bold');
  pdf.setFontSize(11);
  pdf.text(certId, 22, 156);

  // --- BharatsDev signature line (bottom center) ---
  pdf.setDrawColor(100, 100, 100);
  pdf.setLineWidth(0.3);
  pdf.line(W / 2 - 40, 152, W / 2 + 40, 152);
  pdf.setTextColor(150, 150, 150);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(8);
  pdf.text('Authorised Signatory — BharatsDev', W / 2, 158, { align: 'center' });

  // --- QR Code (bottom right) ---
  const qrSize = 42;
  const qrX = W - 20 - qrSize;
  const qrY = H - 20 - qrSize;
  pdf.addImage(qrDataUrl, 'PNG', qrX, qrY, qrSize, qrSize);
  pdf.setTextColor(150, 150, 150);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(7);
  pdf.text('Scan to verify', qrX + qrSize / 2, qrY + qrSize + 5, { align: 'center' });

  // --- Watermark domain ---
  pdf.setTextColor(30, 30, 30);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(60);
  pdf.text('BHARATSDEV.COM', W / 2, H / 2 + 10, {
    align: 'center',
    angle: 30,
  });

  const pdfBase64 = pdf.output('datauristring').split(',')[1];
  const pdfBlob = pdf.output('blob');
  return { pdfBase64, pdfBlob };
}
