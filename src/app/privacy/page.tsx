export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#050505] text-white min-h-screen pt-40 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-black font-heading mb-8">Privacy Policy</h1>
        <div className="prose prose-invert prose-lg text-zinc-400 font-sans">
          <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Introduction</h2>
          <p className="mb-6">Welcome to BharatsDev. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. The Data We Collect About You</h2>
          <p className="mb-6">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. How We Use Your Personal Data</h2>
          <p className="mb-6">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Contact Us</h2>
          <p className="mb-6">If you have any questions about this privacy policy or our privacy practices, please contact us at: <strong>contact@bharatsdev.com</strong>.</p>
        </div>
      </div>
    </div>
  );
}
