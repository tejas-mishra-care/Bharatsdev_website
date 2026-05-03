export default function TermsOfServicePage() {
  return (
    <div className="bg-[#050505] text-white min-h-screen pt-40 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-black font-heading mb-8">Terms of Service</h1>
        <div className="prose prose-invert prose-lg text-zinc-400 font-sans">
          <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-6">By accessing and using the BharatsDev website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use our services.</p>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Services Provided</h2>
          <p className="mb-6">BharatsDev provides custom software engineering, digital strategy, web development, and enterprise applications. All services are subject to a separate Master Services Agreement (MSA) or Statement of Work (SOW) which will be provided upon project initiation.</p>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. No Retainers Policy</h2>
          <p className="mb-6">As stated in our branding, we operate on a strict project-based delivery model. Upon final handover and payment of the agreed-upon project fee, the client retains full ownership of the developed asset. We do not enforce mandatory ongoing retainers unless explicitly requested via a separate maintenance contract.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Intellectual Property</h2>
          <p className="mb-6">Unless otherwise agreed upon in writing, all source code, assets, and intellectual property engineered during a project are transferred to the client upon final payment. BharatsDev retains the right to display the project in our portfolio unless a Non-Disclosure Agreement (NDA) is signed.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Limitation of Liability</h2>
          <p className="mb-6">In no event shall BharatsDev be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Contact</h2>
          <p className="mb-6">For any legal inquiries, please contact us at: <strong>contact@bharatsdev.com</strong>.</p>
        </div>
      </div>
    </div>
  );
}
