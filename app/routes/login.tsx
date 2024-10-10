import { redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { commitSession, getSession } from "~/utils/session.server";

export let action = async ({ request }) => {
  let formData = await request.formData();
  let username = formData.get("username");
  let password = formData.get("password");

  if (username === "123" && password === "123") {
    let session = await getSession(request.headers.get("Cookie"));
    session.set("userId", "123");
    return redirect("/", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  } else {
    return { error: "Invalid credentials" };
  }
};

export default function Login() {
  let actionData = useActionData();
  return (
    <>
      <div className="justify-center justify-items-center flex pt-32 ">
        <Form method="post">
          <h3>Name :</h3>{" "}
          <input
            className="bg-black "
            type="text"
            name="username"
            placeholder="Username"
            required
          />
          <h3>Password :</h3>
          <input
            className="bg-black"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <br />
          <button className="pt-3 w-14 border-slate-800" type="submit">
            Login
          </button>
          {actionData?.error && <p>{actionData.error}</p>}
        </Form>
      </div>
    </>
  );
}
