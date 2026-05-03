'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import {
  Award, Send, Download, LogOut, CheckCircle2,
  Loader2, User, Mail, Briefcase, FileText, Eye, X, RefreshCw,
} from 'lucide-react';
import {
  generateCertificateId,
  generateQRCode,
  generateCertificatePDF,
  saveCertificate,
  markCertificateSent,
  type Certificate,
} from '@/lib/certificates';
import { initializeFirebase } from '@/firebase';

const ROLES = [
  'Full Stack Web Development',
  'Frontend Development',
  'Backend Development',
  'UI/UX Design',
  'Mobile App Development',
  'AI & Machine Learning',
  'Cloud Engineering',
  'Digital Marketing',
  'Cybersecurity',
  'Data Science',
];

interface GeneratedCert {
  cert: Certificate;
  pdfBase64: string;
  pdfBlobUrl: string;
  qrDataUrl: string;
}

export default function CertificatesPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', role: ROLES[0] });
  const [generating, setGenerating] = useState(false);
  const [sending, setSending] = useState(false);
  const [generated, setGenerated] = useState<GeneratedCert | null>(null);
  const [sendStatus, setSendStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [sendError, setSendError] = useState('');
  const [previewOpen, setPreviewOpen] = useState(false);
  const [sentList, setSentList] = useState<string[]>([]);

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin');
  };

  const handleGenerate = useCallback(async () => {
    if (!form.name.trim() || !form.email.trim()) return;
    setGenerating(true);
    setSendStatus('idle');
    setGenerated(null);

    try {
      const certId = generateCertificateId();
      const issuedAt = new Date().toISOString();
      // 1. Generate QR code
      const qrDataUrl = await generateQRCode(certId);

      // 2. Generate PDF
      const { pdfBase64, pdfBlob } = await generateCertificatePDF({
        name: form.name.trim(),
        role: form.role,
        certId,
        qrDataUrl,
        issuedAt,
      });

      // 3. Save to Firestore
      const { firestore } = initializeFirebase();
      const cert: Certificate = {
        id: certId,
        name: form.name.trim(),
        email: form.email.trim(),
        role: form.role,
        issuedAt,
        status: 'generated',
      };
      await saveCertificate(firestore, cert);

      // 4. Create preview URL
      const pdfBlobUrl = URL.createObjectURL(pdfBlob);

      setGenerated({ cert, pdfBase64, pdfBlobUrl, qrDataUrl });
    } catch (err) {
      console.error(err);
      setSendError('Failed to generate certificate. Check console for details.');
      setSendStatus('error');
    } finally {
      setGenerating(false);
    }
  }, [form]);

  const handleSend = async () => {
    if (!generated) return;
    setSending(true);
    setSendStatus('idle');
    setSendError('');

    try {
      const res = await fetch('/api/certificates/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: generated.cert.name,
          email: generated.cert.email,
          role: generated.cert.role,
          certId: generated.cert.id,
          issuedAt: generated.cert.issuedAt,
          pdfBase64: generated.pdfBase64,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Send failed');
      }

      // Mark as sent in Firestore
      const { firestore } = initializeFirebase();
      await markCertificateSent(firestore, generated.cert.id);

      setSendStatus('success');
      setSentList((prev) => [generated.cert.id, ...prev]);
    } catch (err: unknown) {
      setSendError(err instanceof Error ? err.message : 'Unknown error');
      setSendStatus('error');
    } finally {
      setSending(false);
    }
  };

  const handleReset = () => {
    setGenerated(null);
    setSendStatus('idle');
    setSendError('');
    setForm({ name: '', email: '', role: ROLES[0] });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Header */}
      <header className="border-b border-[#1A1A1A] bg-[#080808] sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center">
              <Award className="w-4 h-4 text-[#2563EB]" />
            </div>
            <div>
              <span className="font-black text-white text-sm">Bharats<span className="text-[#2563EB]">Dev</span></span>
              <span className="text-zinc-600 text-xs ml-2">Certificate Admin</span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-zinc-500 hover:text-white text-sm transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Certificate Generator</h1>
          <p className="text-zinc-500 text-sm mt-1">Issue, preview, and send certificates to students.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* LEFT — Form */}
          <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-2xl p-6">
            <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-6 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#2563EB]" /> Certificate Details
            </h2>

            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Recipient Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="e.g. Shristi Gupta"
                    className="w-full bg-[#111] border border-[#222] rounded-lg pl-10 pr-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/50 transition-colors text-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Recipient Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="student@example.com"
                    className="w-full bg-[#111] border border-[#222] rounded-lg pl-10 pr-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/50 transition-colors text-sm"
                  />
                </div>
              </div>

              {/* Role */}
              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Program / Role
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 z-10" />
                  <select
                    value={form.role}
                    onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))}
                    className="w-full bg-[#111] border border-[#222] rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/50 transition-colors text-sm appearance-none"
                  >
                    {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
              </div>

              {/* Generate button */}
              <button
                onClick={handleGenerate}
                disabled={generating || !form.name.trim() || !form.email.trim()}
                className="w-full flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-colors text-sm mt-2"
              >
                {generating ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Generating Certificate…</>
                ) : (
                  <><Award className="w-4 h-4" /> Generate Certificate</>
                )}
              </button>

              {generated && (
                <button
                  onClick={handleReset}
                  className="w-full flex items-center justify-center gap-2 border border-[#222] hover:border-[#333] text-zinc-400 hover:text-white font-semibold py-2.5 rounded-xl transition-colors text-sm"
                >
                  <RefreshCw className="w-4 h-4" /> Reset / New Certificate
                </button>
              )}
            </div>
          </div>

          {/* RIGHT — Preview & Actions */}
          <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-2xl p-6 flex flex-col">
            <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-6 flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#2563EB]" /> Preview & Send
            </h2>

            {!generated ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-2xl bg-[#111] border border-[#1E1E1E] flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-zinc-700" />
                </div>
                <p className="text-zinc-600 text-sm">Fill in the form and click<br />"Generate Certificate" to preview.</p>
              </div>
            ) : (
              <div className="flex-1 flex flex-col gap-5">
                {/* Certificate Info Card */}
                <div className="bg-[#0D0D0D] border border-[#1E1E1E] rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="text-emerald-400 text-sm font-semibold">Certificate Generated</span>
                  </div>
                  <div className="space-y-2.5">
                    <Row label="Name" value={generated.cert.name} />
                    <Row label="Email" value={generated.cert.email} />
                    <Row label="Program" value={generated.cert.role} />
                    <Row label="Certificate ID" value={generated.cert.id} mono />
                    <Row label="Issued" value={new Date(generated.cert.issuedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} />
                  </div>
                </div>

                {/* QR Preview */}
                <div className="flex items-center gap-4 bg-[#0D0D0D] border border-[#1E1E1E] rounded-xl p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={generated.qrDataUrl} alt="QR Code" className="w-16 h-16 rounded-lg bg-white p-1" />
                  <div>
                    <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">QR Code</p>
                    <p className="text-xs text-zinc-600 mt-1">Points to:</p>
                    <p className="text-xs text-[#2563EB] font-mono break-all">
                      {(process.env.NEXT_PUBLIC_APP_URL || 'https://bharatsdev.com').replace(/^https?:\/\//, '')}/verify?id={generated.cert.id}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setPreviewOpen(true)}
                    className="flex-1 flex items-center justify-center gap-2 border border-[#222] hover:border-[#2563EB]/50 text-zinc-300 hover:text-white py-2.5 rounded-xl transition-colors text-sm font-semibold"
                  >
                    <Eye className="w-4 h-4" /> Preview PDF
                  </button>
                  <a
                    href={generated.pdfBlobUrl}
                    download={`BharatsDev-${generated.cert.id}.pdf`}
                    className="flex-1 flex items-center justify-center gap-2 border border-[#222] hover:border-[#2563EB]/50 text-zinc-300 hover:text-white py-2.5 rounded-xl transition-colors text-sm font-semibold"
                  >
                    <Download className="w-4 h-4" /> Download
                  </a>
                </div>

                {/* Send Button */}
                {sendStatus !== 'success' ? (
                  <button
                    onClick={handleSend}
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA6C10] disabled:opacity-40 disabled:cursor-not-allowed text-black font-bold py-3 rounded-xl transition-colors text-sm"
                  >
                    {sending ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Sending Email…</>
                    ) : (
                      <><Send className="w-4 h-4" /> Send Certificate to {generated.cert.email}</>
                    )}
                  </button>
                ) : (
                  <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <p className="text-emerald-400 text-sm font-semibold">Certificate Sent!</p>
                      <p className="text-zinc-500 text-xs">Email delivered to {generated.cert.email}</p>
                    </div>
                  </div>
                )}

                {sendStatus === 'error' && sendError && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 text-sm">
                    {sendError}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Sent history */}
        {sentList.length > 0 && (
          <div className="mt-8 bg-[#0A0A0A] border border-[#1A1A1A] rounded-2xl p-6">
            <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-4">
              Sent This Session ({sentList.length})
            </h2>
            <div className="space-y-2">
              {sentList.map((id) => (
                <div key={id} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <code className="text-[#2563EB] font-mono">{id}</code>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* PDF Preview Modal */}
      {previewOpen && generated && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-[#1A1A1A]">
              <span className="text-sm font-semibold text-white">Certificate Preview</span>
              <button
                onClick={() => setPreviewOpen(false)}
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-hidden p-4">
              <iframe
                src={generated.pdfBlobUrl}
                className="w-full h-full rounded-lg"
                style={{ minHeight: '60vh' }}
                title="Certificate Preview"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Row({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex justify-between items-start gap-4">
      <span className="text-xs text-zinc-600 uppercase tracking-wide shrink-0">{label}</span>
      <span className={`text-sm text-zinc-300 text-right ${mono ? 'font-mono text-[#2563EB]' : ''}`}>
        {value}
      </span>
    </div>
  );
}
