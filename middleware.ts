import type { NextRequest } from 'next/server';


export async function middleware(request: NextRequest) {
	if (request.nextUrl.pathname === '/') {
	}
}

export const config = {
	matcher: ['/'],
};
