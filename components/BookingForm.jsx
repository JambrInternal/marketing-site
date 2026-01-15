"use client";

import { useState } from "react";
import { EMAIL_PATTERN, isWorkEmail } from "../lib/emailPolicy";

const CALENDAR_URL = "https://calendar.app.google/48BjSXGNeWYYGK839";
const BOOK_CALL_EVENT = "book_call_clicked";
const NAV_DELAY_MS = 250;
const LINKEDIN_PATTERN = /^(https?:\/\/)?(www\.)?linkedin\.com\/.+/i;
const PHONE_ALLOWED_PATTERN = /^[+]?[\d\s().-]+$/;
const MIN_PHONE_DIGITS = 7;

const normalizeLinkedIn = (value) => {
  const trimmed = value.trim();
  if (!trimmed) {
    return "";
  }

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  if (/^(www\.)?linkedin\.com\//i.test(trimmed)) {
    return `https://${trimmed}`;
  }

  return trimmed;
};

const normalizePhone = (value) => value.trim();

const countDigits = (value) => value.replace(/\D/g, "").length;

export default function BookingForm() {
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [linkedinError, setLinkedinError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const trimmedEmail = email.trim();
    const normalizedLinkedIn = normalizeLinkedIn(linkedin);
    const normalizedPhone = normalizePhone(phone);

    setEmailError("");
    setLinkedinError("");
    setPhoneError("");

    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      setEmailError("Enter a valid email.");
      return;
    }

    if (!isWorkEmail(trimmedEmail)) {
      setEmailError("Use a work email.");
      return;
    }

    if (normalizedLinkedIn && !LINKEDIN_PATTERN.test(normalizedLinkedIn)) {
      setLinkedinError("Use a LinkedIn profile URL.");
      return;
    }

    if (
      normalizedPhone &&
      (!PHONE_ALLOWED_PATTERN.test(normalizedPhone) ||
        countDigits(normalizedPhone) < MIN_PHONE_DIGITS)
    ) {
      setPhoneError("Enter a valid phone number.");
      return;
    }

    setIsSubmitting(true);

    if (window.posthog?.identify) {
      const personProperties = { email: trimmedEmail };
      if (normalizedLinkedIn) {
        personProperties.linkedin = normalizedLinkedIn;
      }
      if (normalizedPhone) {
        personProperties.phone = normalizedPhone;
      }

      window.posthog.identify(trimmedEmail, personProperties);
    }

    if (window.posthog?.capture) {
      window.posthog.capture(
        BOOK_CALL_EVENT,
        {
          cta_location: "book_page_schedule",
          cta_destination: CALENDAR_URL
        },
        { send_instantly: true }
      );
    }

    window.setTimeout(() => {
      window.location.assign(CALENDAR_URL);
    }, NAV_DELAY_MS);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <label className="field-label" htmlFor="booking-email">
        Work email
      </label>
      <input
        className="field-input"
        id="booking-email"
        name="email"
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder="you@company.com"
        required
        value={email}
        aria-invalid={emailError ? "true" : "false"}
        onChange={(event) => setEmail(event.target.value)}
      />
      {emailError ? (
        <p className="field-error" role="alert">
          {emailError}
        </p>
      ) : null}
      <p className="muted small">We will send the invite here.</p>
      <label className="field-label" htmlFor="booking-linkedin">
        LinkedIn (optional)
      </label>
      <input
        className="field-input"
        id="booking-linkedin"
        name="linkedin"
        type="url"
        inputMode="url"
        autoComplete="url"
        placeholder="linkedin.com/in/you"
        value={linkedin}
        aria-invalid={linkedinError ? "true" : "false"}
        onChange={(event) => setLinkedin(event.target.value)}
      />
      {linkedinError ? (
        <p className="field-error" role="alert">
          {linkedinError}
        </p>
      ) : null}
      <label className="field-label" htmlFor="booking-phone">
        Phone (optional)
      </label>
      <input
        className="field-input"
        id="booking-phone"
        name="phone"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        placeholder="(555) 555-5555"
        value={phone}
        aria-invalid={phoneError ? "true" : "false"}
        onChange={(event) => setPhone(event.target.value)}
      />
      {phoneError ? (
        <p className="field-error" role="alert">
          {phoneError}
        </p>
      ) : null}
      <button className="btn" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Opening calendar..." : "Book a 25-min call"}
      </button>
    </form>
  );
}
