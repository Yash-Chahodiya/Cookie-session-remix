// app/routes/logout.jsx
import { redirect } from "@remix-run/node";
import { destroySession, getSession } from "~/utils/session.server";

export let loader = async ({ request }) => {
  let session = await getSession(request.headers.get("Cookie"));
  return redirect("/", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
};
