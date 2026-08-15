"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    ml?: (...args: unknown[]) => void;
  }
}

const ML_ACCOUNT_ID = "2550034";
const ML_FORM_ID = "JLh55U";

export default function ResourceCapture({ compact = false }: { compact?: boolean }) {
  useEffect(() => {
    // The homepage's root layout already loads MailerLite's universal script
    // once, sitewide. But this component can also mount on its own after
    // the initial page load (e.g. when navigating client-side to a page
    // that renders it), and MailerLite's script only scans the DOM for
    // ".ml-embedded" elements when it first runs. Re-injecting a fresh
    // script tag here forces that scan to happen again, now that this
    // component's embed div actually exists in the DOM, so the form
    // reliably renders no matter how the page was reached.
    const script = document.createElement("script");
    script.src = "https://assets.mailerlite.com/js/universal.js";
    script.async = true;
    script.onload = () => {
      window.ml?.("account", ML_ACCOUNT_ID);
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const form = (
    <div className="resource-form">
      <div className="ml-embedded" data-form={ML_FORM_ID}></div>
    </div>
  );

  if (compact) return form;

  return (
    <div className="resource-capture">
      <h3>Get The Implementation Gap Assessment</h3>
      <p>A free 20-page self-assessment and fillable workbook for established small and growing businesses. Enter your email and we&apos;ll send it straight to your inbox.</p>
      {form}
    </div>
  );
}
