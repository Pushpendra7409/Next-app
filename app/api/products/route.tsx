import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 1, name: 'Milk', price: 2.5 },
        { id: 2, name: 'Bread', price: 3.5 },
        { id: 3, name: 'Butter', price: 5.5 }
    ])
}

export async function POST ( request: NextRequest )  {
     const body = await request.json()
     const validation = schema.safeParse(body)
     if (!validation.success) 
        return NextResponse.json(validation.error.errors, { status: 400 })
    return NextResponse.json({ id: 10, name: body.name, price: body.price}, { status: 201 })
     // validate body data
     // if valid, save data to DB and return 201 else return 400
}