// src/server/routes/api/preview.ts

import { defineEventHandler, setCookie, sendRedirect } from "h3";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  if (query.secret !== import.meta.env.PREVIEW_SECRET) {
    return { error: "Invalid preview token" };
  }

  // Set a preview cookie
  setCookie(event, "preview", "true", { httpOnly: true, path: "/" });

  // Redirect to the preview page (e.g. /events/my-event)
  return sendRedirect(event, `/events/${query.slug}`);
});
