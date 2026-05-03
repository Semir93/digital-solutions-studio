"use client";

import type { FormEvent, ReactNode } from "react";
import { useState } from "react";

const WEB3FORMS_ACCESS_KEY = "ab0f457a-f540-4e08-882c-3016203dce8f";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "Novi upit - Digital Solutions Studio");
    formData.append("from_name", "Digital Solutions Studio website");

    setSubmitState("submitting");
    setStatusMessage("");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Poruka nije poslana.");
      }

      form.reset();
      setSubmitState("success");
      setStatusMessage("Upit je poslan. Javit ću se što prije sa odgovorom.");
    } catch {
      setSubmitState("error");
      setStatusMessage(
        "Poruka trenutno nije poslana. Pokušaj ponovo ili pošalji direktno na email.",
      );
    }
  }

  const isSubmitting = submitState === "submitting";

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="Ime i prezime">
          <input
            type="text"
            name="name"
            placeholder="Ime i prezime"
            className="field-input"
            required
          />
        </FormField>
        <FormField label="Email">
          <input
            type="email"
            name="email"
            placeholder="email@firma.com"
            className="field-input"
            required
          />
        </FormField>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="Tip usluge">
          <select name="service_type" className="field-select" required defaultValue="Web aplikacija">
            <option>Web aplikacija</option>
            <option>Mobile aplikacija</option>
            <option>Booking sistem</option>
            <option>Custom software</option>
            <option>Redesign</option>
          </select>
        </FormField>
        <FormField label="Budžet / opseg">
          <input
            type="text"
            name="scope"
            placeholder="Npr. manji projekt, srednji sistem ili fazni razvoj"
            className="field-input"
          />
        </FormField>
      </div>

      <FormField label="Opis projekta">
        <textarea
          name="message"
          placeholder="Kratko opiši šta želiš napraviti, kome je namijenjeno i koje funkcije su najvažnije."
          rows={6}
          className="field-textarea"
          required
        />
      </FormField>

      <div className="contact-submit-row">
        <p>
          Poruka se šalje direktno na email Digital Solutions Studio. Odgovor stiže
          nakon pregleda upita i osnovnih detalja projekta.
        </p>
        <button type="submit" className="button-primary" disabled={isSubmitting}>
          {isSubmitting ? "Slanje..." : "Pošalji upit"}
        </button>
      </div>

      {statusMessage ? (
        <p className={`contact-form-status contact-form-status-${submitState}`} role="status">
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}

function FormField({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      {children}
    </label>
  );
}
