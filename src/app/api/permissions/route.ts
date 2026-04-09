import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '../_lib/requireAuth';
import { getBackendConfig } from '../_lib/backend-config';

export async function GET(req: NextRequest) {
    const auth = requireAuth(req);
    if (auth instanceof NextResponse) return auth;

    const backendConfig = getBackendConfig();

    const iamApiUrl = `${backendConfig.iamApiUrl}/user-access/get_application_permissions_for_user?application_mnemonic=${backendConfig.applicationMnemonic}`;

    const res = await fetch(iamApiUrl, {
        method: 'GET',
        headers: auth.backendHeaders,
        cache: 'no-store',
    });

    const data = await res.json();

    return NextResponse.json(data, { status: res.status });
}