import "./globals.css";
import Header from "../components/Header";
import SiteEffects from "../components/SiteEffects";
import { PostHogProvider } from "./providers";

export const metadata = {
  title: "Agent Maple",
  description:
    "Internal support for trades and field teams. Answers crew calls and texts, handles scheduling and documentation requests, and escalates when needed."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon/favicon.svg"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon/favicon-dark.svg"
          media="(prefers-color-scheme: dark)"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#25263b" />
        <meta name="msapplication-TileColor" content="#25263b" />
        <meta name="theme-color" content="#25263b" />
      </head>
      <body>
        <PostHogProvider>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Header />
          {children}
          <SiteEffects />
        </PostHogProvider>
      </body>
    </html>
  );
}
