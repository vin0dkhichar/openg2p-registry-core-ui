
import { NextRequest, NextResponse } from 'next/server';
import { getBackendConfig } from '@/app/api/_lib/backend-config';

export async function POST(req: NextRequest) {
    const backendConfig = getBackendConfig();

    const registryPartnerApiUrl = backendConfig.registryPartnerApiUrl;
    const body = await req.json();
    const { vc } = body;

    if (!registryPartnerApiUrl) {
        return NextResponse.json(
            { error: 'Partner ingest URL not configured' },
            { status: 500 }
        );
    }

    const response = await fetch(registryPartnerApiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
        },
        body: JSON.stringify(vc),
    }
    );

    const result = await response.json();

    return NextResponse.json(result, { status: response.status });
}
