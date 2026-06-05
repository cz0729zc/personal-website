"use client";

import { useState } from "react";

type CopyEmailButtonProps = {
  className: string;
  email: string;
};

export function CopyEmailButton({ className, email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button className={className} onClick={copyEmail} type="button">
      {copied ? "已复制" : email}
    </button>
  );
}
