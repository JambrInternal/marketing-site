import Link from "next/link";

export default function Footer({ variant = "standard" }) {
  const links =
    variant === "home"
      ? [
          { href: "/how-it-works", label: "How it works" },
          { href: "/privacy", label: "Privacy" }
        ]
      : [
          { href: "/", label: "Home" },
          { href: "/privacy", label: "Privacy" }
        ];

  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span className="muted">Agent Maple. Answers calls and texts so crews can focus.</span>
        <div className="nav">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
