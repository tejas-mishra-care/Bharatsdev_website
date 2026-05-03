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

  // Colors
  const ONYX = [10, 10, 10];
  const GOLD = [212, 175, 55];
  const SLATE = [51, 65, 85];
  const LIGHT_SLATE = [148, 163, 184];

  // --- Background (White) ---
  pdf.setFillColor(255, 255, 255);
  pdf.rect(0, 0, W, H, 'F');

  // --- Outer Border (Onyx) ---
  // Equivalent to 20px solid var(--onyx)
  pdf.setDrawColor(ONYX[0], ONYX[1], ONYX[2]);
  pdf.setLineWidth(5.5);
  pdf.rect(2.75, 2.75, W - 5.5, H - 5.5);

  // --- Subtle Corner Accent (Gold) ---
  pdf.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
  pdf.setLineWidth(1.5);
  pdf.line(10, 10, 36, 10); // Top
  pdf.line(10, 10, 10, 36); // Left

  // --- Header: BHARATSDEV ---
  pdf.setTextColor(ONYX[0], ONYX[1], ONYX[2]);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(42);
  // Simulating the 15px letter spacing from HTML
  pdf.text('B H A R A T S D E V', W / 2, 40, { align: 'center' });

  // --- Header: Tagline ---
  pdf.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(10);
  pdf.text('YOUR COMPLETE DIGITAL GROWTH ENGINE', W / 2, 48, { align: 'center' });

  // --- Main Content: Title ---
  pdf.setTextColor(ONYX[0], ONYX[1], ONYX[2]);
  pdf.setFont('times', 'italic');
  pdf.setFontSize(28);
  pdf.text('Certificate of Technical Excellence', W / 2, 75, { align: 'center' });

  // --- Main Content: Granted to ---
  pdf.setTextColor(SLATE[0], SLATE[1], SLATE[2]);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(12);
  pdf.text('This official recognition is hereby granted to', W / 2, 88, { align: 'center' });

  // --- Recipient Box ---
  pdf.setTextColor(ONYX[0], ONYX[1], ONYX[2]);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(36);
  const recipientName = name.toUpperCase();
  pdf.text(recipientName, W / 2, 108, { align: 'center' });

  // Gold Underline for Recipient Box
  const nameWidth = pdf.getTextWidth(recipientName);
  pdf.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
  pdf.setLineWidth(1.5);
  const startX = (W - nameWidth) / 2 - 12;
  const endX = (W + nameWidth) / 2 + 12;
  pdf.line(startX, 114, endX, 114);

  // --- Description ---
  pdf.setTextColor(SLATE[0], SLATE[1], SLATE[2]);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(11);
  const desc1 = `For the successful deployment of high-performance digital assets in the field of`;
  const desc2 = `${role}. This project has been independently verified to meet the`;
  const desc3 = `Shashwat Standard for architectural integrity, speed, and strategic impact.`;
  pdf.text(desc1, W / 2, 130, { align: 'center' });
  pdf.text(desc2, W / 2, 137, { align: 'center' });
  pdf.text(desc3, W / 2, 144, { align: 'center' });

  // --- Footer: Signature (Left) ---
  pdf.setDrawColor(ONYX[0], ONYX[1], ONYX[2]);
  pdf.setLineWidth(0.6);
  pdf.line(25, H - 42, 85, H - 42);

  pdf.setTextColor(ONYX[0], ONYX[1], ONYX[2]);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(14);
  pdf.text('Tejas Mishra', 25, H - 34);

  pdf.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(9);
  pdf.text('FOUNDER & CEO | CTO', 25, H - 28);

  // --- Footer: Metadata (Center) ---
  pdf.setTextColor(LIGHT_SLATE[0], LIGHT_SLATE[1], LIGHT_SLATE[2]);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(8);
  pdf.text(`CERTIFICATE ID: ${certId}`, W / 2, H - 38, { align: 'center' });
  pdf.text(`DOMAIN: BHARATSDEV.COM`, W / 2, H - 33, { align: 'center' });
  
  const formattedDate = new Date(issuedAt).toLocaleDateString('en-US', {
    month: 'short', day: '2-digit', year: 'numeric'
  }).toUpperCase();
  pdf.text(`ISSUE DATE: ${formattedDate}`, W / 2, H - 28, { align: 'center' });

  // --- Footer: QR Code (Right) ---
  const qrSize = 32;
  const qrX = W - 25 - qrSize;
  const qrY = H - 58;
  pdf.addImage(qrDataUrl, 'PNG', qrX, qrY, qrSize, qrSize);
  
  pdf.setTextColor(LIGHT_SLATE[0], LIGHT_SLATE[1], LIGHT_SLATE[2]);
  pdf.setFontSize(7);
  pdf.text('SCAN TO VERIFY', qrX + (qrSize / 2), qrY + qrSize + 5, { align: 'center' });

  const pdfBase64 = pdf.output('datauristring').split(',')[1];
  const pdfBlob = pdf.output('blob');
  return { pdfBase64, pdfBlob };
}
