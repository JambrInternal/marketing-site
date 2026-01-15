import Link from "next/link";
import BookCallLink from "./BookCallLink";
import { withBasePath } from "../lib/basePath";

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="brand brand--header" href="/">
          <img
            className="brand__mark"
            src={withBasePath("/brand/agent-maple-wordmark-1line-white-textHalf.png")}
            width="1221"
            height="178"
            alt="Agent Maple"
            decoding="async"
          />
        </Link>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
        <BookCallLink className="btn header-cta" href="/book#schedule" location="header">
          Book a 25-min call
        </BookCallLink>
      </div>
    </header>
  );
}
