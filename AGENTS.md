# AGENTS.md — The Executive Facial Care Website

## Mission

Build the first production-ready digital presence for **The Executive Facial Care** as a mobile-first website that can later grow into centralized booking, branch management, CRM, loyalty and a customer app.

The current phase is **website MVP / owner-review phase**, not the final enterprise platform.

## Current product scope

The starter currently contains:

- Marketing homepage
- Services listing
- Branch directory concept
- Promo landing-page concept
- Testimonials concept
- Contact page
- Demo booking request form

Do not add a database, authentication, payments, medical intake, CRM or native app unless the user explicitly asks for that phase.

## Non-negotiable safety / accuracy rules

1. **Do not fabricate company facts.**
   - Never invent branch names, addresses, phone numbers, operating hours, prices, staff names, company history, awards or number of customers.
   - Use `TBD`, `To be confirmed`, or demo content until official data is provided.

2. **Do not make unsupported medical or cosmetic outcome claims.**
   - Avoid claims such as “cures acne”, “permanent results”, “guaranteed whitening”, “clinically proven” or treatment suitability unless supplied and approved by the company.
   - Keep service copy informational and neutral in the MVP.

3. **Treat customer privacy as a first-class requirement.**
   - The initial booking flow should collect only basic appointment/contact data.
   - Do not add questions about diagnoses, medications, medical history, pregnancy or other sensitive health data without an explicit approved requirement and privacy review.

4. **Never expose secrets.**
   - Put credentials only in `.env.local`.
   - Never commit service-role keys, SMTP credentials, API secrets or production tokens.
   - Browser-accessible variables must intentionally use `NEXT_PUBLIC_`.

5. **Do not silently change business rules.**
   - Booking duration, cancellation windows, branch capacity and appointment status flow must be documented before implementation.

6. **Demo assets are references, not automatically production-approved assets.**
   - Keep the demo images replaceable.
   - Do not remove the README reminder that final image usage requires company approval.

## Technical rules

- Next.js App Router.
- TypeScript with `strict: true`.
- Prefer Server Components by default.
- Add `"use client"` only for actual client-side interaction.
- Keep reusable UI inside `components/`.
- Keep demo/domain data in `lib/data.ts` until a backend exists.
- Use semantic HTML and keyboard-accessible controls.
- Design mobile-first; all changes must work at ~360px width.
- Keep brand tokens centralized in `app/globals.css` until a design-system migration is requested.
- Do not introduce a new UI library merely for convenience.
- Avoid large dependencies when native browser / React functionality is enough.
- Use `next/image` for local content images.

## Visual direction

Use the supplied campaign references as inspiration, not as page-layout templates.

Brand direction:

- Primary red / deep red
- White / cream backgrounds
- Soft blush accents
- Subtle gold details
- Elegant editorial serif for display headings
- Clean sans-serif for UI and body text
- Premium beauty-clinic feel
- Strong but tasteful “Book Now” CTA
- Plenty of whitespace
- Avoid overly busy poster-like layouts on the website

## Architecture direction for future phases

When explicitly asked to add backend features, prefer this progression:

1. Next.js website
2. Supabase PostgreSQL
3. Supabase Auth with roles: `head_office`, `branch_manager`, `staff`, `customer`
4. Row Level Security
5. Appointment availability / status flow
6. Notifications
7. Reporting
8. Loyalty / CRM
9. React Native / Expo mobile app

Do not skip authorization design when adding branch or customer data.

## Expected data model when backend work begins

Do not create this schema until requested, but use these concepts consistently:

- `branches`
- `services`
- `branch_services`
- `promotions`
- `promotion_branches`
- `customers`
- `appointments`
- `appointment_status_history`
- `staff_profiles`
- `branch_staff`
- `testimonials`

Keep service availability many-to-many with branches.

## Booking status direction

Only use after business confirmation. Proposed statuses:

`requested -> confirmed -> checked_in -> completed`

Alternate exits:

`requested/confirmed -> cancelled`

Do not imply that a submitted request is confirmed until a branch actually confirms it.

## Codex workflow for every task

Before coding:

1. Read `AGENTS.md`.
2. Inspect the files relevant to the task.
3. State internally which files will change.
4. Preserve existing behavior unless the request changes it.

While coding:

1. Make the smallest coherent change.
2. Avoid unrelated refactors.
3. Reuse existing CSS tokens/components.
4. Keep placeholder/company-confirmation language intact unless official data is supplied.
5. Add accessibility labels where needed.

After coding:

1. Run `npm run build` when dependencies are installed.
2. If build is unavailable, at minimum review imports, route structure and TypeScript types.
3. Report changed files.
4. Report any assumptions or content still awaiting owner confirmation.

## Definition of done for website MVP UI work

A UI task is complete only when:

- Desktop and mobile layouts are considered.
- No fabricated company data is introduced.
- Main CTA remains obvious.
- No horizontal overflow at mobile width.
- Navigation works.
- Form controls have labels.
- Images have meaningful alt text when informative.
- Placeholder content is clearly identifiable as placeholder/demo where needed.
- The change does not require secrets to run locally.

## Good prompts to use with Codex next

### Service detail pages

> Read AGENTS.md. Add dynamic service detail pages under `/services/[slug]` using the existing `lib/data.ts`. Keep claims neutral and mark missing official information as “To be confirmed.” Preserve the current design system and make the page mobile-first.

### Branch detail pages

> Read AGENTS.md. Add `/branches/[slug]` pages from the existing data. Include address, hours, contact placeholders, service availability area, map placeholder and Book CTA. Do not invent branch details.

### Supabase planning only

> Read AGENTS.md. Do not write migrations yet. Propose the Supabase schema, roles, RLS strategy and appointment state machine for a multi-branch facial-care booking platform. Identify decisions that must be confirmed with the owner before implementation.

### Booking MVP backend

> Read AGENTS.md. Implement only the approved appointment-request workflow. Customers submit a request, but the UI must not show “confirmed” until branch staff confirms it. Do not collect sensitive health information. Add RLS and server-side validation.
