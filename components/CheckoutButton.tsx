"use client";

import { useState } from "react";

interface Props {
  className: string;
  loadingClassName?: string;
  children: React.ReactNode;
}

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
      const data = (await res.json()) as { checkoutUrl?: string; error?: string; debug?: { originalUrl: string; finalUrl: string } };

      console.log("[checkout] Full API response:", data);
      if (data.debug) {
        console.log("[checkout] Original URL:", data.debug.originalUrl);
        console.log("[checkout] Final URL:", data.debug.finalUrl);
      }

      if (!res.ok || !data.checkoutUrl) {
        throw new Error(data.error ?? "Checkout unavailable. Please try again.");
      }

      console.log("[checkout] Redirecting browser to:", data.checkoutUrl);
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
