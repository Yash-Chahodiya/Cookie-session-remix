import { createCookie } from "@remix-run/node";
export const cookie = createCookie("cookie ",{
    httpOnly:true,
    secure:true,
    path:"/"
})