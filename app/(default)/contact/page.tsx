export default function ContactPage() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

        <p className="text-lg text-gray-300 mb-8">
          We’re here to help you with Managed IT, Cybersecurity, Network Solutions, 
          Cloud Services, and Green IT Consulting. Reach out and our team will get back to you shortly.
        </p>

        <div className="space-y-6 text-gray-300">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Email</h2>
            <p>info@careezitsol.com</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Phone</h2>
            <p>+1 (000) 000‑0000</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Location</h2>
            <p>Toronto, Canada</p>
          </div>
        </div>
      </div>
    </section>
  );
}

