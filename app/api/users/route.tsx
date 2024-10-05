import { NextRequest, NextResponse } from "next/server";
import schema from "./schemas";

export function GET(request: NextRequest) {
    //fetch users from DB
    return NextResponse.json([
        { id: 1, name: "John", email: "jhon@gmail.com" },
        { id: 1, name: "Doe", email: "doe@gmail.com" },
    ])
}

export async function POST(request: NextRequest) {
    const body =  await request.json()
    const validation = schema.safeParse(body)
    //validate 
    //If invalid, return 400 else , return error
    if(!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400})
    return NextResponse.json({id: 1, name: body.name}, { status: 201 });
}