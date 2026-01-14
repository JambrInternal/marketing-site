import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="brand brand--header" href="/">
          <img
            className="brand__mark"
            src="/brand/agent-maple-icon-mono-white-64x64.png"
            srcSet="/brand/agent-maple-icon-mono-white-64x64.png 1x, /brand/agent-maple-icon-mono-white-128x128.png 2x, /brand/agent-maple-icon-mono-white-256x256.png 4x"
            width="64"
            height="64"
            alt="Agent Maple"
            decoding="async"
          />
        </Link>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
        <Link className="btn header-cta" href="/book#schedule">
          Book a 25-min call
        </Link>
      </div>
    </header>
  );
}
