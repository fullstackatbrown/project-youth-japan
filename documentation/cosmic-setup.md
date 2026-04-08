# Cosmic CMS Setup

How content fetching works in this repo, and how to add a new content type.

## Installed package

- `@cosmicjs/sdk` — official Cosmic JS client.

## Environment variables

Add to `.env.local` (never commit this file):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

Get both from the Cosmic dashboard → **Bucket Settings → API Access**.

## Where things live

- `lib/cosmic/cosmic.ts` — singleton Cosmic client. Server-only. Do not import from client components.
- `lib/cosmic/<type>.ts` — one file per content type. Exports a TS type and an async `get<Type>()` function that calls Cosmic and maps the raw response into the app's shape. Example: `lib/cosmic/library.ts`.
- `app/<route>/page.tsx` — async **server** component. Calls the fetcher, sets `export const revalidate = N`, and passes plain data to a client component.
- `app/<route>/<Name>Client.tsx` — `"use client"` component that receives the data as a prop and handles all filtering / interactivity.

## The pattern: server fetch + client filter

Each CMS-backed page is split in two:

1. **Server component (`page.tsx`)** — fetches from Cosmic, sets ISR via `revalidate`, renders the client component with the data as a prop.
2. **Client component (`<Name>Client.tsx`)** — `"use client"`, owns filter state and UI.

### Why split it

- **SEO** — content is in the server-rendered HTML, not loaded after hydration.
- **Caching** — `revalidate` gives ISR for free; one Cosmic fetch is shared across all visitors for the revalidation window.
- **Security** — the Cosmic SDK and read key never ship to the browser.
- **Smaller client bundle** — no SDK in client JS, only the filter UI.

## Recipe: adding a new content type

1. **In Cosmic dashboard** — create the object type. Note the type slug (e.g. `members`) and every metafield key exactly. Publish at least one object so the API returns something.
2. **Add `lib/cosmic/<type>.ts`** — export a TS type for the app shape and an async `get<Type>()` that calls `cosmic.objects.find({ type: "<slug>" }).props("id,title,slug,metadata").depth(1)` and maps each raw object into the app type. Wrap in try/catch and return `[]` on failure (see `lib/cosmic/library.ts` for the template).
3. **Add `app/<route>/page.tsx`** — async server component:
   ```ts
   import { get<Type> } from "@/lib/cosmic/<type>";
   import <Name>Client from "./<Name>Client";

   export const revalidate = 3600;

   export default async function <Name>Page() {
     const items = await get<Type>();
     return <<Name>Client items={items} />;
   }
   ```
4. **Add `app/<route>/<Name>Client.tsx`** — `"use client"`, takes `items` as a prop, owns filter state. Use the `FilterPanel` component for consistent UI.

## Gotchas

- **`title` and `slug` are top-level**, not under `metadata`. Cosmic puts these on the object itself.
- **Uploaded file URLs are at `metadata.<key>.url`**, not `metadata.<key>`. The metadata value is an object describing the asset.
- **Drafts don't appear in the API by default.** Objects must be Published in Cosmic to be returned.
- **Select-dropdown option strings are case-sensitive.** Filter values in code must match the Cosmic options exactly. Current example mismatch in `library-resources`: `resource_type` options are lowercase (`communique`, `report`, `translation`, `slides`, `other`) while `summit_type` options are uppercase (`Y7`, `Y20`). Mind the casing per field.
- **Don't import `lib/cosmic/cosmic.ts` from client components.** The read key would leak into the client bundle. Always go through a server `page.tsx`.
