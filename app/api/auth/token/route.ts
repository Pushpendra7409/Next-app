import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest) {
    
    const token = await getToken ({req: request})   //console application cookies token
    return NextResponse.json(token);   //check on browser /api/auth/token
}


