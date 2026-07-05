"use client";

import { useState } from "react";

interface Props {
  className: string;
  loadingClassName?: string;
  children: React.ReactNode;
}

const ALLOWED_CHECKOUT_HOSTS = [
  "shop.getpressr.com",
  "getpressr.com",
  "marati-5036.myshopify.com",
];

export default function CheckoutButton({
  className,
  loadingClassName,
  children,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = (await res.json()) as { checkoutUrl?: string; error?: string };

      if (!res.ok || !data.checkoutUrl) {
        throw new Error("Checkout unavailable. Please try again.");
      }

      // Validate the redirect target is a known Shopify domain.
      const url = new URL(data.checkoutUrl);
      if (!ALLOWED_CHECKOUT_HOSTS.includes(url.hostname)) {
        throw new Error("Checkout unavailable. Please try again.");
      }

      window.location.href = data.checkoutUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <span className="inline-flex flex-col items-center gap-2">
      <button
        onClick={handleClick}
        disabled={loading}
        className={loading ? (loadingClassName ?? className) : className}
      >
        {loading ? "Loading…" : children}
      </button>
      {error && (
        <span className="text-red-500 text-xs font-medium">{error}</span>
      )}
    </span>
  );
}
