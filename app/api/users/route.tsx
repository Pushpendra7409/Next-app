import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    //fetch users from DB
    return NextResponse.json([
        { id: 1, name: "John", email: "jhon@gmail.com" },
        { id: 1, name: "Doe", email: "doe@gmail.com" },
    ])
}

export async function POST(request: NextRequest) {
    const body =  await request.json()
    //validate 
    //If invalid, return 400 else , return error
    if(!body.name)
        return NextResponse.json({ error: 'Name is required'}, { status: 400})
    return NextResponse.json({id: 1, name: body.name}, { status: 201 });
}