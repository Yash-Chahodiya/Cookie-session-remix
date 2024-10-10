// app/utils/auth.server.js
import { getSession } from "./session.server.js";

export async function requireUserId(request) {
  let session = await getSession(request.headers.get("Cookie"));
  let userId = session.get("userId");
  if (!userId) {
    throw redirect("/login");
  }
  return userId;
}
