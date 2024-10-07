export { default } from 'next-auth/middleware'

export const config = {
    //+: one or more parameters
    // *: zero or more
    // ?: zero or one
    matcher: ['/dashboard/:path*'],
};
