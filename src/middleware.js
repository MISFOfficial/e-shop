import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

const middleware = async (req) => {

    console.log(req)
    const token = await getToken({ req });
    const isTokenOk = Boolean(token)
    // console.log(token)
    // console.log(isTokenOk)
    const isRoute = req.nextUrl.pathname.startsWith('/deshboard')

    if (!token && isRoute) {
        return NextResponse.redirect(new URL('/login', req.url)); // ✅ FIXED
    }

    return NextResponse.next()
};

export default middleware;