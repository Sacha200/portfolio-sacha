export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <form className="max-w-xl space-y-4">
        <input className="w-full border rounded px-3 py-2" placeholder="Nom" />
        <input className="w-full border rounded px-3 py-2" placeholder="Email" type="email" />
        <textarea className="w-full border rounded px-3 py-2" placeholder="Message" rows={6} />
        <button className="inline-flex items-center justify-center rounded-md bg-black text-white px-4 py-2 text-sm font-medium hover:opacity-90">
          Envoyer
        </button>
      </form>
    </section>
  );
}


