# Accredian Enterprise Landing Page

A responsive landing page built with the Next.js App Router. The page presents enterprise learning content and includes a local lead-submission flow.

## Features

- Sticky navigation with desktop links and a state-controlled mobile menu.
- Landing-page sections for the hero, statistics, partnerships, Accredian Edge, domain expertise, course segmentation, strategic skill enhancement, CAT framework, delivery process, FAQs, testimonials, CTA, and footer.
- Local images, SVGs, course artwork, and partner logos from `public/`.
- Data arrays rendered for statistics, partner logos, domain cards, course cards, process steps, FAQ categories/questions, testimonials, navigation links, and social links.
- FAQ category selection and accordion answer expansion.
- Testimonials carousel with pagination controls; it renders one card per row on small screens and two cards per row from the medium breakpoint.
- Shared enquiry trigger used by the Hero, FAQ, and footer enquiry buttons.
- Enquiry modal with a responsive image panel, backdrop blur, outside-click closing, Escape-key closing, body scroll locking, and opacity/scale transitions.
- Lead form with inline validation errors, a submission loading state, duplicate-submission prevention, API error feedback, and a success status message.
- `POST /api/leads` route that validates submitted lead data before storage.
- JSON lead storage in `data/leads.json`; the storage utility creates the data directory when required and queues writes within the running process.

## Tech Stack

### Frontend

- Next.js 16.2.12
- React 19.2.4
- TypeScript
- Tailwind CSS 4

### Backend

- Next.js Route Handler at `src/app/api/leads/route.ts`
- Node.js filesystem APIs for JSON lead storage

### Declared Libraries

- `lucide-react`
- `react-icons`

### Declared Development Tools

- ESLint and `eslint-config-next`
- PostCSS and `@tailwindcss/postcss`
- TypeScript type definitions for Node.js and React

## Project Structure

```text
src/
├── app/
│   ├── api/leads/route.ts       # POST lead-submission route
│   ├── layout.tsx               # Root layout and enquiry provider
│   └── page.tsx                 # Landing-page section composition
├── components/
│   ├── EnquiryModal.tsx         # Modal UI and open-state effects
│   ├── EnquiryProvider.tsx      # Shared enquiry-modal context/state
│   ├── EnquireNowButton.tsx     # Reusable enquiry trigger
│   ├── LeadForm.tsx             # Lead form and client-side validation flow
│   ├── testimonials/            # Testimonial cards, carousel, and dots
│   ├── footer/                  # Footer component
│   └── ...                      # Other landing-page section components
└── lib/
    ├── leadStorage.ts           # JSON storage and write queue
    └── validation.ts            # Lead validation schema

public/                          # Images, SVGs, course assets, and logos
data/leads.json                  # Locally stored lead records
```

## Setup Instructions

### Prerequisites

- Node.js compatible with Next.js 16.2.12
- npm

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

### Environment Variables

The source does not read environment variables.

The lead route writes to `data/leads.json`, so the application process needs write access to the project directory or the equivalent deployment filesystem.

### Validation Dependency Note

`src/lib/validation.ts` imports `zod`, but `zod` is not listed in the current `package.json` dependencies. A clean installation therefore requires adding that dependency before the lead form and API route can compile.

## Approach Taken

I structured the page as a composition of section components, with smaller components for repeated UI such as cards, FAQ controls, carousel controls, and process elements. The page component is responsible for section order, while each section owns its content and presentation.

I used local arrays and `map()` for repeated content, including testimonials, FAQ categories and questions, course/domain cards, statistics, navigation links, and social links. React state is used for the mobile navigation, FAQ selection and expansion, testimonial page selection, form state, and the shared enquiry-modal state.

I used Tailwind utility classes for layout, spacing, typography, colors, shadows, breakpoints, and transitions. The layouts are responsive: section content stacks or changes grid columns on smaller viewports, and the testimonials carousel changes from two cards per page to one card per row.

I placed enquiry state in a client-side provider used by the root layout. This lets the Hero, FAQ, and footer triggers open one modal rather than each maintaining separate form state and markup. The modal uses an effect only for Escape handling and restoring body scrolling after it closes.

I placed the lead validation schema in `src/lib/validation.ts` and import it in both the form and API route. The route validates the request body again before calling the storage utility. I used JSON storage for the implemented lead flow: `leadStorage.ts` reads the existing array, appends an ID and timestamp, and serializes writes through a promise queue within the running Node.js process.

I organized page UI under `src/components`, shared lead logic under `src/lib`, the HTTP endpoint under `src/app/api`, static assets under `public`, and local lead records under `data`.

## AI Usage Explanation

I used AI for brainstorming component boundaries, generating initial boilerplate, debugging implementation issues, suggesting refactoring opportunities, and drafting documentation. I reviewed the generated code, understood its behavior, modified it where needed, and integrated it manually into the project structure.

## Deployment

Create a production build and start the server with:

```bash
npm run build
npm run start
```

The lead route writes to the Node.js filesystem. Deploy it only to an environment with a writable filesystem if local JSON lead records need to persist. Environments with read-only or ephemeral filesystems will not provide durable storage for `data/leads.json`.
