export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--border)" }}>
      <div className="container mx-auto px-4 h-14 flex items-center justify-between text-sm">
        <p>
          Coded with <span aria-hidden>❤️</span> by <span className="font-medium">Sacha Nahmani</span> — {new Date().getFullYear()}
        </p>
        <a className="hover:underline" href="mailto:sacha.nahmani@epitech.eu">sacha.nahmani@epitech.eu</a>
      </div>
    </footer>
  );
}


