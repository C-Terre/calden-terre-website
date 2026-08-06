"use client";
import { useState } from "react";

export default function Collapsible({
  label = "See more",
  openLabel = "See less",
  children
}: {
  label?: string;
  openLabel?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={`expand-body${open ? " is-open" : ""}`}>{children}</div>
      <button
        type="button"
        className="see-more"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {open ? openLabel : label}
      </button>
    </>
  );
}
