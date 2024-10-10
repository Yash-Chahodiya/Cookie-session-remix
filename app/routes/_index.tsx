import type {
  LoaderFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import { cookie } from "~/utils/cookie";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix app" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async ({
  request,
}: LoaderFunctionArgs) => {
  const cookieValue = "example-cookie-value";
  const cookieOptions = {
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, //
  };

  const setCookieHeader = await cookie.serialize(
    "DummyCookie",
    cookieValue,
    cookieOptions
  );

  return new Response("/login on route", {
    headers: {
      "Content-Type": "text/plain",
      "Set-Cookie": setCookieHeader,
    },
  });
};
