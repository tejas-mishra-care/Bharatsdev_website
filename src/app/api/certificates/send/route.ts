import { NextResponse } from 'next/server';
import { Resend } from 'resend';
export async function POST(req: Request) {
  // Validate admin session
  const cookieHeader = req.headers.get('cookie') || '';
  const sessionSecret = process.env.ADMIN_SESSION_SECRET || 'BDsec-Xk9mP2vQ8nR3hL5jY7tF2cH4eA6';
  if (!cookieHeader.includes(`admin_session=${sessionSecret}`)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { name, email, role, certId, issuedAt, pdfBase64 } = await req.json();

  const resendKey = process.env.RESEND_API_KEY || 're_U2xXp7Ws_KdiBKipDwP6JTQ1xxVroLj36';
  if (!resendKey) {
    return NextResponse.json(
      { error: 'RESEND_API_KEY not configured. Please add it to your environment variables.' },
      { status: 500 }
    );
  }

  const resend = new Resend(resendKey);

  const formattedDate = new Date(issuedAt).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  const { data, error } = await resend.emails.send({
    from: 'BharatsDev <certificates@bharatsdev.com>',
    to: [email],
    subject: `Your BharatsDev Certificate — ${role}`,
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#050505;font-family:'Helvetica Neue',sans-serif;color:#fff;">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
    <div style="text-align:center;margin-bottom:32px;">
      <h1 style="font-size:28px;font-weight:900;color:#fff;margin:0;">
        Bharats<span style="color:#2563EB;">Dev</span>
      </h1>
    </div>
    <div style="background:#0A0A0A;border:1px solid #222;border-radius:12px;padding:40px;text-align:center;">
      <div style="width:60px;height:60px;background:rgba(37,99,235,0.1);border-radius:50%;display:inline-flex;align-items:center;justify-content:center;margin-bottom:24px;">
        <span style="font-size:28px;">🏆</span>
      </div>
      <h2 style="font-size:22px;font-weight:700;color:#fff;margin:0 0 8px;">Congratulations, ${name}!</h2>
      <p style="color:#888;margin:0 0 24px;font-size:15px;">Your certificate has been issued.</p>
      <div style="background:#111;border:1px solid #222;border-radius:8px;padding:20px;margin-bottom:24px;text-align:left;">
        <p style="margin:0 0 8px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Certificate Details</p>
        <p style="margin:0 0 6px;color:#fff;font-size:15px;"><strong>Program:</strong> ${role}</p>
        <p style="margin:0 0 6px;color:#fff;font-size:15px;"><strong>Issued On:</strong> ${formattedDate}</p>
        <p style="margin:0;color:#fff;font-size:15px;"><strong>Certificate ID:</strong> <span style="color:#2563EB;font-family:monospace;">${certId}</span></p>
      </div>
      <a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://bharatsdev.com'}/verify?id=${certId}" 
         style="display:inline-block;background:#2563EB;color:#fff;text-decoration:none;padding:14px 28px;border-radius:8px;font-weight:700;font-size:15px;">
        Verify Certificate Online →
      </a>
      <p style="color:#555;font-size:13px;margin:24px 0 0;">
        Your certificate PDF is attached to this email.<br/>
        Scan the QR code on the certificate to verify it instantly.
      </p>
    </div>
    <p style="text-align:center;color:#444;font-size:12px;margin-top:24px;">
      © ${new Date().getFullYear()} BharatsDev. All rights reserved.<br/>
      <a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://bharatsdev.com'}" style="color:#2563EB;">${(process.env.NEXT_PUBLIC_APP_URL || 'bharatsdev.com').replace(/^https?:\/\//, '')}</a>
    </p>
  </div>
</body>
</html>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, id: data?.id });
}
