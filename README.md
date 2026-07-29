# Accredian Enterprise Landing Page

A responsive landing page built with the Next.js App Router. It presents enterprise learning content and includes a lead-submission form that validates requests and logs validated submissions on the server.

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
- `POST /api/leads` route that validates submitted lead data on the server, logs the validated lead object, and returns a success response.

## Tech Stack

### Frontend

- Next.js 16.2.12
- React 19.2.4
- TypeScript
- Tailwind CSS 4

### Backend

- Next.js Route Handler at `src/app/api/leads/route.ts`

### Libraries

- `zod` for the shared lead validation schema
- `lucide-react`
- `react-icons`

### Tools

- npm
- ESLint and `eslint-config-next`
- PostCSS and `@tailwindcss/postcss`

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
    └── validation.ts            # Shared Zod lead validation schema

public/                          # Images, SVGs, course assets, and logos
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

No environment variables are read by the source code.

No writable filesystem, database, or external service is required for the lead route.

## Approach Taken

I structured the page as a composition of section components, with smaller components for repeated UI such as cards, FAQ controls, carousel controls, and process elements. The page component is responsible for section order, while each section owns its content and presentation.

I used local arrays and `map()` for repeated content, including testimonials, FAQ categories and questions, course/domain cards, statistics, navigation links, and social links. React state is used for the mobile navigation, FAQ selection and expansion, testimonial page selection, form state, and the shared enquiry-modal state.

I used Tailwind utility classes for layout, spacing, typography, colors, shadows, breakpoints, and transitions. The layouts are responsive: section content stacks or changes grid columns on smaller viewports, and the testimonials carousel changes from two cards per page to one card per row.

I placed enquiry state in a client-side provider used by the root layout. This lets the Hero, FAQ, and footer triggers open one modal rather than each maintaining separate form state and markup. The modal uses an effect for Escape handling and restoring body scrolling after it closes.

I placed the Zod lead validation schema in `src/lib/validation.ts` and import it in both the form and API route. The route validates the request body again, logs the validated lead object with `console.log()`, and returns the success response without writing to the filesystem.

I organized page UI under `src/components`, shared validation under `src/lib`, the HTTP endpoint under `src/app/api`, and static assets under `public`.

## AI Usage Explanation

I used AI for brainstorming component boundaries, generating initial boilerplate, debugging implementation issues, suggesting refactoring opportunities, and drafting documentation. I reviewed the generated code, understood its behavior, modified it where needed, and integrated it manually into the project structure.

## Improvements With More Time

- Add unit tests for validation and interactive components.
- Add integration and end-to-end tests for the lead-submission flow.
- Add focus trapping and focus restoration for the modal.
- Replace console logging with a database or CRM integration when durable lead persistence is required.
- Add authenticated lead-management functionality.
- Add analytics for enquiry interactions and submissions.
- Add form autosave and more detailed API error handling.
- Add reduced-motion behavior and further carousel refinements.
- Add dark mode and internationalization.
- Measure and optimize image loading and page performance.

## Screenshots

### Home Page

(Add screenshot)

### Lead Capture Modal

(Add screenshot)

## Deployment

Create a production build and start the server with:

```bash
npm run build
npm run start
```

The API route does not write to the filesystem or require a database. Validated lead submissions are logged by the server process, so the app can be deployed to environments with read-only filesystems, including Vercel.
