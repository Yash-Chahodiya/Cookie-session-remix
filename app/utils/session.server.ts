// app/utils/session.server.js
import { createCookieSessionStorage } from "@remix-run/node";

// Create a session storage with a cookie
export const { getSession, commitSession, destroySession } = createCookieSessionStorage({
  cookie: {
    name: "Login",
    httpOnly: true,
    maxAge: 60 * 60 * 24, // 1 day
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production"
  }
});
