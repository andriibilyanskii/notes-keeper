import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { CONSTANTS } from '@constants';

export async function middleware(request: NextRequest) {
	if (request.nextUrl.pathname === '/') {
	}
}

export const config = {
	matcher: ['/'],
};
