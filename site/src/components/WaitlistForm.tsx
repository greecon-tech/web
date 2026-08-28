"use client";

import { useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!email) return;
    setStatus("submitted");
  }

  if (status === "submitted") {
    return <p className="waitlist-confirm">You&rsquo;re on the list &mdash; we&rsquo;ll be in touch soon.</p>;
  }

  return (
    <form className="waitlist-form" onSubmit={handleSubmit}>
      <label htmlFor="waitlist-email">Enter your email</label>
      <input
        id="waitlist-email"
        type="email"
        required
        placeholder="name@company.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button type="submit">Join the Waitlist</button>
      <p className="waitlist-fineprint">We&rsquo;ll only use your email to notify you at launch. No spam, ever.</p>
    </form>
  );
}
