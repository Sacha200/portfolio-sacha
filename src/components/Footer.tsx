export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--border)" }}>
      <div className="container mx-auto px-4 h-14 flex items-center justify-between text-sm">
        <p>© {new Date().getFullYear()} Sacha. Tous droits réservés.</p>
        <a className="hover:underline" href="https://outlook.office.com/mail/">sacha.nahmani@epitech.eu</a>
      </div>
    </footer>
  );
}


