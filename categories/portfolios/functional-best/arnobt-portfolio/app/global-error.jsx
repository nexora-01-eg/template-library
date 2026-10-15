"use client";

import Error from "next/error";

/**
 * Root-level error boundary. Renders when an error occurs in the root layout
 * or any segment; shows Next.js default error UI. Must define its own <html>/<body>.
 */
export default function GlobalError({ error }) {
  return (
    <html>
      <body>
        <Error />
      </body>
    </html>
  );
}
