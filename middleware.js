import {auth} from "@/app/_lib/auth";

 export const middleware = auth

export const config={
    matcher:["/account"]
}
// import {NextResponse} from "next/server";

// function Middleware(request) {
// return NextResponse.redirect(new URL("/cabins/182", request.url));
// }
// export default Middleware
