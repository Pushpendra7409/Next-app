import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    //fetch users from DB
    return NextResponse.json([
        { id: 1, name: "John", email: "jhon@gmail.com" },
        { id: 1, name: "Doe", email: "doe@gmail.com" },
    ])
}