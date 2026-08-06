"use client";
import { useState } from "react";

export default function ResourceCapture({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xlgqkjey", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          _subject: "Implementation Gap Assessment request",
          message: `New request for the free Implementation Gap Assessment from ${email}`
        })
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className={compact ? "" : "resource-capture"}>
        {!compact && <h3>Check your inbox</h3>}
        <p style={{ color: "var(--body)", margin: 0 }}>
          Thanks — we&apos;ll send the Implementation Gap Assessment to {email} shortly.
        </p>
      </div>
    );
  }

  const form = (
    <form onSubmit={handleSubmit} className="resource-form">
      <input
        type="email"
        required
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Download the Free Assessment"}
      </button>
      {status === "error" && (
        <p className="form-error">Something went wrong — please try again, or email info@caldenterre.com directly.</p>
      )}
    </form>
  );

  if (compact) return form;

  return (
    <div className="resource-capture">
      <h3>Get The Implementation Gap Assessment</h3>
      <p>A free 20-page self-assessment and fillable workbook for SMEs and CDFIs. Enter your email and we&apos;ll send it straight to your inbox.</p>
      {form}
    </div>
  );
}
