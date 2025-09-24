export default function ProjectsPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Projets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Cartes projet placeholder */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="rounded-lg border p-4">
            <div className="h-40 bg-muted rounded mb-3" />
            <h3 className="font-semibold">Projet {index + 1}</h3>
            <p className="text-sm text-muted-foreground">Description courte</p>
          </div>
        ))}
      </div>
    </section>
  );
}


