'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ShieldCheck, ShieldX, Loader2, Download, QrCode, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { getCertificate, generateQRCode, generateCertificatePDF, type Certificate } from '@/lib/certificates';
import { initializeFirebase } from '@/firebase';
import { Skeleton } from '@/components/ui/skeleton';

function VerifyContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id') || '';

  const [status, setStatus] = useState<'idle' | 'loading' | 'found' | 'not-found' | 'error'>('idle');
  const [cert, setCert] = useState<Certificate | null>(null);
  const [inputId, setInputId] = useState(id);

  const lookup = async (lookupId: string) => {
    if (!lookupId.trim()) return;
    setStatus('loading');
    setCert(null);
    try {
      const { firestore } = initializeFirebase();
      const result = await getCertificate(firestore, lookupId.trim().toUpperCase());
      if (result) {
        setCert(result);
        setStatus('found');
      } else {
        setStatus('not-found');
      }
    } catch {
      setStatus('error');
    }
  };

  // Auto-lookup if ID is in URL (from QR scan)
  useEffect(() => {
    if (id) lookup(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    lookup(inputId);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_60%)] rounded-full" />
      </div>

      {/* Nav */}
      <header className="relative z-10 border-b border-[#1A1A1A]">
        <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-lg font-black text-white">
            Bharats<span className="text-[#2563EB]">Dev</span>
          </Link>
          <Link href="/student-hub" className="text-xs text-zinc-500 hover:text-white transition-colors flex items-center gap-1">
            Student Hub <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </header>

      <main className="relative z-10 max-w-2xl mx-auto px-6 py-16">
        {/* Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-5">
            <QrCode className="w-3.5 h-3.5" /> Certificate Verification
          </div>
          <h1 className="text-3xl font-black text-white mb-3">Verify a Certificate</h1>
          <p className="text-zinc-500 text-sm">
            Enter a Certificate ID or scan the QR code on the certificate to verify its authenticity.
          </p>
        </div>

        {/* Search */}
        <form onSubmit={handleSubmit} className="flex gap-3 mb-10">
          <input
            type="text"
            value={inputId}
            onChange={(e) => setInputId(e.target.value.toUpperCase())}
            placeholder="e.g. BD-2024-AB1234"
            className="flex-1 bg-[#0A0A0A] border border-[#222] rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/50 transition-colors text-sm font-mono"
          />
          <button
            type="submit"
            disabled={!inputId.trim() || status === 'loading'}
            className="px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-colors text-sm whitespace-nowrap"
          >
            {status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Verify →'}
          </button>
        </form>

        {/* Result */}
        {status === 'loading' && (
          <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-2xl overflow-hidden mt-8">
            <div className="border-b border-[#1A1A1A] px-6 py-5 flex items-center gap-4">
              <Skeleton className="w-12 h-12 rounded-xl shrink-0" />
              <div className="space-y-2 w-full max-w-[200px]">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-3 w-2/3" />
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-2"><Skeleton className="h-4 w-24" /><Skeleton className="h-6 w-3/4" /></div>
              <div className="space-y-2"><Skeleton className="h-4 w-24" /><Skeleton className="h-5 w-1/2" /></div>
              <div className="space-y-2"><Skeleton className="h-4 w-24" /><Skeleton className="h-5 w-1/3" /></div>
            </div>
          </div>
        )}

        {status === 'found' && cert && (
          <div className="bg-[#0A0A0A] border border-emerald-500/30 rounded-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Header */}
            <div className="bg-emerald-500/10 border-b border-emerald-500/20 px-6 py-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-emerald-400 font-bold text-lg">✓ Verified Certificate</p>
                <p className="text-emerald-600 text-xs">This certificate is authentic and issued by BharatsDev.</p>
              </div>
            </div>

            {/* Details */}
            <div className="p-6 space-y-4">
              <VerifyRow label="Recipient Name" value={cert.name} large />
              <VerifyRow label="Program Completed" value={cert.role} accent />
              <VerifyRow
                label="Date of Issue"
                value={new Date(cert.issuedAt).toLocaleDateString('en-IN', {
                  weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
                })}
              />
              <VerifyRow label="Certificate ID" value={cert.id} mono />
              <VerifyRow
                label="Status"
                value={cert.status === 'sent' ? '✓ Officially Issued' : '✓ Generated'}
                green
              />
            </div>

            {/* Download Button */}
            <div className="border-t border-emerald-500/20 px-6 py-4">
              <DownloadCertButton cert={cert} />
            </div>

            {/* Footer */}
            <div className="border-t border-[#1A1A1A] px-6 py-4 flex items-center justify-between">
              <span className="text-zinc-600 text-xs">Issued by BharatsDev · bharatsdev.com</span>
              <Link
                href="/"
                className="text-xs text-[#2563EB] hover:text-[#2563EB]/80 transition-colors font-semibold"
              >
                Visit Website →
              </Link>
            </div>
          </div>
        )}

        {status === 'not-found' && (
          <div className="bg-[#0A0A0A] border border-red-500/30 rounded-2xl p-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mx-auto mb-4">
              <ShieldX className="w-7 h-7 text-red-400" />
            </div>
            <h3 className="text-red-400 font-bold text-xl mb-2">Certificate Not Found</h3>
            <p className="text-zinc-500 text-sm mb-4">
              No certificate found with ID <code className="text-red-400 font-mono">{inputId}</code>.
              <br />Please check the ID and try again.
            </p>
            <p className="text-zinc-600 text-xs">
              If you believe this is an error, contact{' '}
              <a href="mailto:contact@bharatsdev.com" className="text-[#2563EB]">
                contact@bharatsdev.com
              </a>
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 text-center text-red-400 text-sm">
            Something went wrong. Please try again.
          </div>
        )}
      </main>
    </div>
  );
}

function DownloadCertButton({ cert }: { cert: Certificate }) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const qrDataUrl = await generateQRCode(cert.id);
      const { pdfBlob } = await generateCertificatePDF({
        name: cert.name,
        role: cert.role,
        certId: cert.id,
        qrDataUrl,
        issuedAt: cert.issuedAt,
      });
      const url = URL.createObjectURL(pdfBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `BharatsDev-Certificate-${cert.id}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error('Download failed', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-3 rounded-xl transition-colors text-sm"
    >
      {loading ? (
        <><Loader2 className="w-4 h-4 animate-spin" /> Generating PDF…</>
      ) : (
        <><Download className="w-4 h-4" /> Download Certificate</>
      )}
    </button>
  );
}

function VerifyRow({
  label, value, large, accent, mono, green,
}: {
  label: string; value: string;
  large?: boolean; accent?: boolean; mono?: boolean; green?: boolean;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
      <span className="text-xs text-zinc-600 uppercase tracking-wider sm:w-36 shrink-0">{label}</span>
      <span
        className={[
          'font-semibold',
          large ? 'text-xl text-white' : 'text-sm',
          accent ? 'text-[#2563EB]' : '',
          mono ? 'font-mono text-[#2563EB]' : '',
          green ? 'text-emerald-400' : '',
          !accent && !mono && !green && !large ? 'text-zinc-200' : '',
        ].join(' ')}
      >
        {value}
      </span>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#2563EB]" />
      </div>
    }>
      <VerifyContent />
    </Suspense>
  );
}
