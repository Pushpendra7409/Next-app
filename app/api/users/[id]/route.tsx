import { NextRequest, NextResponse } from "next/server";

export function GET(
    request: NextRequest, 
    { params }: {params: { id: number }}) {
 // Fetch dta from DB
 //If not found, return 404 error  else return data
 if ( params.id > 10 )
    return NextResponse.json({ error: 'User Not found' }, { status: 404});

 return NextResponse.json({ id: 1, name: 'John' });
    }