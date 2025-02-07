import { NextRequest, NextResponse } from 'next/server'
import { api } from './services/app';

export async function middleware(req: NextRequest){
    const token = req.cookies.get("session")?.value;
    
    const publicRoutes = ["/", "/signup"];
    const protectedRoutes = "/dashboard"

    const urlPath = req.nextUrl.pathname
    
    if (publicRoutes.includes(urlPath)){ //prevents logged users to access login/signup page
        if(token) {
            return NextResponse.redirect(new URL("/dashboard", req.url));
        }
    }

    if(urlPath.startsWith(protectedRoutes)){
        if(!token){
            return NextResponse.redirect(new URL("/", req.url))
        }

        const isValid = await validateToken(token);
    
        if(!isValid){
            const response = NextResponse.redirect(new URL("/", req.url));
            response.cookies.delete("session");
            return response;
        }
    }

    return NextResponse.next();

}

export const config = {
    matcher: ["/", "/signup", "/dashboard/:path*"]
}


async function validateToken(token: string | undefined){
    if (!token) return false;

    try{
        await api.get("/userinfo", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return true;

    } catch(err){
        return false
    }
}