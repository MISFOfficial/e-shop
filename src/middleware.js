import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

const middleware = async (req) => {
    const token = await getToken({ req })

    // if (token) {
    //     console.log('middleware', token)
    // }
    // if (!token) {
    //     const loginUrl = new URL("/login", req.url);
    //     return NextResponse.redirect(loginUrl);
    // }

    return NextResponse.next()
};

export default middleware;