"use client";

import { FormEvent, useState } from "react";
import { branches, services } from "@/lib/data";

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="successCard" role="status">
        <span className="successIcon">✓</span>
        <h2>Demo request received</h2>
        <p>
          This starter does not send or store customer data yet. Connect this form to the approved
          booking backend only after the workflow and privacy requirements are confirmed.
        </p>
        <button className="button" onClick={() => setSubmitted(false)} type="button">
          Create another demo request
        </button>
      </div>
    );
  }

  return (
    <form className="bookingForm" onSubmit={handleSubmit}>
      <div className="fieldGrid">
        <label>
          Full name
          <input name="name" required placeholder="Your name" autoComplete="name" />
        </label>
        <label>
          Mobile number
          <input name="phone" required placeholder="09xx xxx xxxx" inputMode="tel" />
        </label>
      </div>

      <div className="fieldGrid">
        <label>
          Branch
          <select name="branch" required defaultValue="">
            <option value="" disabled>
              Select a branch
            </option>
            {branches.slice(0, 2).map((branch) => (
              <option key={branch.slug} value={branch.slug}>
                {branch.name}, {branch.area}
              </option>
            ))}
          </select>
        </label>
        <label>
          Service
          <select name="service" required defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="fieldGrid">
        <label>
          Preferred date
          <input name="date" type="date" required />
        </label>
        <label>
          Preferred time
          <input name="time" type="time" required />
        </label>
      </div>

      <label>
        Note <span className="optional">optional</span>
        <textarea
          name="note"
          rows={4}
          placeholder="Appointment-related note only. Avoid entering medical or sensitive health information."
        />
      </label>

      <div className="privacyNote">
        Demo only — no data is transmitted or stored in this starter.
      </div>

      <button className="button buttonWide" type="submit">
        Submit Demo Appointment
      </button>
    </form>
  );
}
