"use client";

import { FormEvent, useState } from "react";
import { publicBranches } from "@/lib/branches";
import { serviceCategoryLabels, services } from "@/lib/services";

type BookingFormProps = {
  initialBranch?: string;
  initialService?: string;
};

type RequestData = {
  service: string;
  branch: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  note: string;
};

const stepLabels = ["Service", "Branch", "Date", "Time", "Details", "Review", "Submit"];

export function BookingForm({ initialBranch = "", initialService = "" }: BookingFormProps) {
  const validBranch = publicBranches.some((branch) => branch.slug === initialBranch) ? initialBranch : "";
  const validService = services.some((service) => service.slug === initialService) ? initialService : "";
  const startingStep = validService ? (validBranch ? 3 : 2) : 1;
  const [step, setStep] = useState(startingStep);
  const [submitted, setSubmitted] = useState(false);
  const [request, setRequest] = useState<RequestData>({
    service: validService,
    branch: validBranch,
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
    note: "",
  });

  const selectedService = services.find((service) => service.slug === request.service);
  const selectedBranch = publicBranches.find((branch) => branch.slug === request.branch);

  function update(field: keyof RequestData, value: string) {
    setRequest((current) => ({ ...current, [field]: value }));
  }

  function canContinue() {
    if (step === 1) return Boolean(request.service);
    if (step === 2) return Boolean(request.branch);
    if (step === 3) return Boolean(request.date);
    if (step === 4) return Boolean(request.time);
    if (step === 5) return Boolean(request.name.trim() && request.phone.trim());
    return true;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step < 6) {
      if (canContinue()) setStep((current) => Math.min(current + 1, 6));
      return;
    }
    setStep(7);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="successCard" role="status">
        <span className="successIcon">✓</span>
        <p className="eyebrow">Step 7 of 7</p>
        <h2>Appointment Request Sent</h2>
        <p>
          This demo does not transmit or store customer data. Your requested schedule is not an
          appointment confirmation; the selected branch must confirm availability.
        </p>
        <button
          className="button"
          onClick={() => { setSubmitted(false); setStep(1); }}
          type="button"
        >
          Create another request
        </button>
      </div>
    );
  }

  return (
    <form className="bookingForm multiStepForm" onSubmit={handleSubmit}>
      <div className="bookingProgress" aria-label={`Booking step ${step} of 7`}>
        {stepLabels.map((label, index) => (
          <span className={index + 1 <= step ? "active" : ""} key={label}>
            <i>{index + 1}</i><small>{label}</small>
          </span>
        ))}
      </div>

      <div className="bookingStep">
        <p className="eyebrow">Step {step} of 7</p>
        {step === 1 ? (
          <>
            <h2>Select a service</h2>
            <label>
              Service
              <select value={request.service} onChange={(event) => update("service", event.target.value)} required>
                <option value="" disabled>Select a service</option>
                {services.map((service) => (
                  <option key={service.slug} value={service.slug}>
                    {service.name} — {serviceCategoryLabels[service.category]}
                  </option>
                ))}
              </select>
            </label>
          </>
        ) : null}

        {step === 2 ? (
          <>
            <h2>Select a branch</h2>
            <label>
              Branch
              <select value={request.branch} onChange={(event) => update("branch", event.target.value)} required>
                <option value="" disabled>Select a branch</option>
                {publicBranches.map((branch) => (
                  <option key={branch.slug} value={branch.slug}>
                    {branch.name}, {branch.province}
                  </option>
                ))}
              </select>
            </label>
            <p className="privacyNote">Service availability varies by branch and will be confirmed after submission.</p>
          </>
        ) : null}

        {step === 3 ? (
          <>
            <h2>Choose a preferred date</h2>
            <label>
              Preferred date
              <input value={request.date} onChange={(event) => update("date", event.target.value)} name="date" type="date" required />
            </label>
          </>
        ) : null}

        {step === 4 ? (
          <>
            <h2>Choose a preferred time</h2>
            <label>
              Preferred time
              <input value={request.time} onChange={(event) => update("time", event.target.value)} name="time" type="time" required />
            </label>
            <p className="privacyNote">This is a preferred time only. The branch must confirm availability.</p>
          </>
        ) : null}

        {step === 5 ? (
          <>
            <h2>Add your contact details</h2>
            <div className="fieldGrid">
              <label>
                Full name
                <input value={request.name} onChange={(event) => update("name", event.target.value)} name="name" required placeholder="Your name" autoComplete="name" />
              </label>
              <label>
                Mobile number
                <input value={request.phone} onChange={(event) => update("phone", event.target.value)} name="phone" required placeholder="09xx xxx xxxx" inputMode="tel" autoComplete="tel" />
              </label>
            </div>
            <label>
              Email <span className="optional">optional</span>
              <input value={request.email} onChange={(event) => update("email", event.target.value)} name="email" type="email" autoComplete="email" placeholder="you@example.com" />
            </label>
            <label>
              Appointment note <span className="optional">optional</span>
              <textarea
                value={request.note}
                onChange={(event) => update("note", event.target.value)}
                name="note"
                rows={3}
                placeholder="Appointment-related note only. Do not include medical or sensitive health information."
              />
            </label>
          </>
        ) : null}

        {step === 6 ? (
          <>
            <h2>Review your request</h2>
            <dl className="bookingReview">
              <div><dt>Service</dt><dd>{selectedService?.name}</dd></div>
              <div><dt>Branch</dt><dd>{selectedBranch?.name}, {selectedBranch?.province}</dd></div>
              <div><dt>Preferred date</dt><dd>{request.date}</dd></div>
              <div><dt>Preferred time</dt><dd>{request.time}</dd></div>
              <div><dt>Name</dt><dd>{request.name}</dd></div>
              <div><dt>Mobile</dt><dd>{request.phone}</dd></div>
              {request.email ? <div><dt>Email</dt><dd>{request.email}</dd></div> : null}
              {request.note ? <div><dt>Note</dt><dd>{request.note}</dd></div> : null}
            </dl>
            <p className="privacyNote">
              Demo only — no data is transmitted or stored. Submission creates a request, not a confirmed appointment.
            </p>
          </>
        ) : null}
      </div>

      <div className="bookingNav">
        {step > 1 ? (
          <button className="button buttonOutline" type="button" onClick={() => setStep((current) => current - 1)}>
            Back
          </button>
        ) : <span />}
        <button className="button" type="submit" disabled={!canContinue()}>
          {step === 6 ? "Submit Appointment Request" : "Continue"}
        </button>
      </div>
    </form>
  );
}
