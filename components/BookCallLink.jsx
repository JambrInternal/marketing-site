"use client";

import Link from "next/link";

const BOOK_CALL_EVENT = "book_call_clicked";
const EXTERNAL_NAV_DELAY_MS = 150;

const isExternalHref = (href) => /^https?:\/\//i.test(href);

const isModifiedEvent = (event) =>
  event.metaKey || event.altKey || event.ctrlKey || event.shiftKey || event.button !== 0;

const captureBookCallClick = ({ href, location }) => {
  if (typeof window === "undefined" || !window.posthog?.capture) {
    return false;
  }

  window.posthog.capture(
    BOOK_CALL_EVENT,
    {
      cta_location: location,
      cta_destination: href
    },
    { send_instantly: true }
  );

  return true;
};

export default function BookCallLink({ href, className, children, location }) {
  const external = isExternalHref(href);

  const handleClick = (event) => {
    const captured = captureBookCallClick({ href, location });

    if (!external || isModifiedEvent(event) || !captured) {
      return;
    }

    // Delay navigation so the capture request can be sent first.
    event.preventDefault();
    window.setTimeout(() => {
      window.location.assign(href);
    }, EXTERNAL_NAV_DELAY_MS);
  };

  if (external) {
    return (
      <a className={className} href={href} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href} onClick={handleClick}>
      {children}
    </Link>
  );
}
