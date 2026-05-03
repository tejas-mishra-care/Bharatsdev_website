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
  const BRAND_BLUE = [37, 99, 235];
  const SLATE = [51, 65, 85];
  const LIGHT_SLATE = [148, 163, 184];

  // --- Fetch Logo ---
  let logoDataUrl = '';
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || window.location.origin;
    const res = await fetch(`${baseUrl}/bdlogo.png`);
    const blob = await res.blob();
    logoDataUrl = await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
  } catch (e) {
    console.warn('Failed to fetch bdlogo.png', e);
  }

  // --- Background (Subtle Off-White) ---
  pdf.setFillColor(250, 251, 253);
  pdf.rect(0, 0, W, H, 'F');

  // --- Subtle Premium Geometric Accents ---
  pdf.setFillColor(254, 251, 242);
  pdf.triangle(0, 0, 180, 0, 0, 180, 'F');
  pdf.setFillColor(240, 245, 255);
  pdf.triangle(W, 0, W, H, W - 200, H, 'F');

  // --- Outer Border (Onyx) ---
  pdf.setDrawColor(ONYX[0], ONYX[1], ONYX[2]);
  pdf.setLineWidth(5.5);
  pdf.rect(2.75, 2.75, W - 5.5, H - 5.5);

  // --- Corner Accent (Gold) ---
  pdf.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
  pdf.setLineWidth(1.5);
  pdf.line(10, 10, 36, 10); // Top
  pdf.line(10, 10, 10, 36); // Left

  // --- Add Logo (Top Right Corner Stamp) ---
  if (logoDataUrl) {
    const logoSize = 35; // Nice large stamp size
    pdf.addImage(logoDataUrl, 'PNG', W - 15 - logoSize, 15, logoSize, logoSize);
  }

  // --- Header: BHARATS DEV (Two-Tone) ---
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(54); // Increased drastically
  const part1 = 'BHARATS'; // Removed spacing to match standard website font
  const part2 = 'DEV';
  const w1 = pdf.getTextWidth(part1);
  const w2 = pdf.getTextWidth(part2);
  const totalW = w1 + w2;
  const headerStartX = (W - totalW) / 2;

  pdf.setTextColor(ONYX[0], ONYX[1], ONYX[2]);
  pdf.text(part1, headerStartX, 45);
  pdf.setTextColor(BRAND_BLUE[0], BRAND_BLUE[1], BRAND_BLUE[2]);
  pdf.text(part2, headerStartX + w1, 45);

  // --- Header: Tagline ---
  pdf.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(12); // Increased
  pdf.text('YOUR COMPLETE DIGITAL GROWTH ENGINE', W / 2, 58, { align: 'center' });

  // --- Main Content: Title ---
  pdf.setTextColor(ONYX[0], ONYX[1], ONYX[2]);
  pdf.setFont('times', 'italic');
  pdf.setFontSize(34); // Increased
  pdf.text('Certificate of Professional Excellence', W / 2, 80, { align: 'center' });

  // --- Main Content: Granted to ---
  pdf.setTextColor(SLATE[0], SLATE[1], SLATE[2]);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(14); // Increased
  pdf.text('This official recognition is hereby granted to', W / 2, 95, { align: 'center' });

  // --- Recipient Box ---
  pdf.setTextColor(ONYX[0], ONYX[1], ONYX[2]);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(48); // Massive emphasis
  const recipientName = name.toUpperCase();
  pdf.text(recipientName, W / 2, 118, { align: 'center' });

  // Gold Underline for Recipient Box
  const nameWidth = pdf.getTextWidth(recipientName);
  pdf.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
  pdf.setLineWidth(1.5);
  const nameStartX = (W - nameWidth) / 2 - 12;
  const nameEndX = (W + nameWidth) / 2 + 12;
  pdf.line(nameStartX, 124, nameEndX, 124);

  // --- Description (General for Tech or Non-Tech) ---
  pdf.setTextColor(SLATE[0], SLATE[1], SLATE[2]);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(13); // Increased
  const desc1 = `For outstanding performance and successful completion of the intensive program in`;
  const desc2 = `${role}. This individual has been independently verified to meet the`;
  const desc3 = `Shashwat Standard for strategic impact, professional integrity, and excellence.`;
  pdf.text(desc1, W / 2, 140, { align: 'center' });
  pdf.text(desc2, W / 2, 148, { align: 'center' });
  pdf.text(desc3, W / 2, 156, { align: 'center' });

  // --- Footer: Signature (Left) ---
  pdf.setDrawColor(ONYX[0], ONYX[1], ONYX[2]);
  pdf.setLineWidth(0.6);
  pdf.line(25, H - 38, 85, H - 38);

  pdf.setTextColor(ONYX[0], ONYX[1], ONYX[2]);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(16);
  pdf.text('Tejas Mishra', 25, H - 30);

  pdf.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(10);
  pdf.text('FOUNDER & CEO | CTO', 25, H - 24);

  // --- Footer: Metadata (Center) ---
  pdf.setTextColor(LIGHT_SLATE[0], LIGHT_SLATE[1], LIGHT_SLATE[2]);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(9);
  pdf.text(`CERTIFICATE ID: ${certId}`, W / 2, H - 34, { align: 'center' });
  pdf.text(`DOMAIN: BHARATSDEV.COM`, W / 2, H - 28, { align: 'center' });
  
  const formattedDate = new Date(issuedAt).toLocaleDateString('en-US', {
    month: 'short', day: '2-digit', year: 'numeric'
  }).toUpperCase();
  pdf.text(`ISSUE DATE: ${formattedDate}`, W / 2, H - 22, { align: 'center' });

  // --- Footer: QR Code (Right) ---
  const qrSize = 36; // Larger QR code
  const qrX = W - 25 - qrSize;
  const qrY = H - 54;
  pdf.addImage(qrDataUrl, 'PNG', qrX, qrY, qrSize, qrSize);
  
  pdf.setTextColor(LIGHT_SLATE[0], LIGHT_SLATE[1], LIGHT_SLATE[2]);
  pdf.setFontSize(8);
  pdf.text('SCAN TO VERIFY', qrX + (qrSize / 2), qrY + qrSize + 5, { align: 'center' });

  const pdfBase64 = pdf.output('datauristring').split(',')[1];
  const pdfBlob = pdf.output('blob');
  return { pdfBase64, pdfBlob };
}
