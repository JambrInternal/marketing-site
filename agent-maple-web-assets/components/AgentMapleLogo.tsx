import React from "react";

type Variant = "color" | "mono-dark" | "mono-white";
type Mark = "lockup" | "icon" | "wordmark";

type Props = {
  mark?: Mark;
  variant?: Variant;
  /** CSS width/height (e.g. 160, "12rem"). For lockups, height auto. */
  size?: number | string;
  className?: string;
  alt?: string;
};

const ASSETS = {
  lockup: {
    color: {
      src: "/brand/agent-maple-lockup-transparent-330w.png",
      srcSet: [
        "/brand/agent-maple-lockup-transparent-220w.png 220w",
        "/brand/agent-maple-lockup-transparent-330w.png 330w",
        "/brand/agent-maple-lockup-transparent-660w.png 660w",
        "/brand/agent-maple-lockup-transparent-990w.png 990w",
      ].join(", "),
    },
    "mono-dark": { src: "/brand/agent-maple-lockup-mono-dark.png" },
    "mono-white": { src: "/brand/agent-maple-lockup-mono-white.png" },
  },
  icon: {
    color: { src: "/brand/agent-maple-icon-512x512.png" },
    "mono-dark": { src: "/brand/agent-maple-icon-mono-dark-512x512.png" },
    "mono-white": { src: "/brand/agent-maple-icon-mono-white-512x512.png" },
  },
  wordmark: {
    color: { src: "/brand/agent-maple-wordmark.png" },
    "mono-dark": { src: "/brand/agent-maple-wordmark.png" },
    "mono-white": { src: "/brand/agent-maple-wordmark.png" },
  },
} as const;

export function AgentMapleLogo({
  mark = "lockup",
  variant = "color",
  size,
  className,
  alt = "Agent Maple",
}: Props) {
  const asset = (ASSETS as any)[mark]?.[variant] ?? (ASSETS as any)[mark]?.color;
  const style: React.CSSProperties =
    mark === "icon"
      ? { width: size ?? 48, height: size ?? 48 }
      : { width: size ?? 200, height: "auto" };

  return (
    <img
      className={className}
      src={asset.src}
      srcSet={asset.srcSet}
      sizes={asset.srcSet ? "200px" : undefined}
      style={style}
      alt={alt}
      decoding="async"
      loading="lazy"
    />
  );
}
