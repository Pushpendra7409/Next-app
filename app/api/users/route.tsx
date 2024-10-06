import { NextRequest, NextResponse } from "next/server";
import schema from "./schemas";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
export async function GET(request: NextRequest) {
    const users = await prisma.user.findMany()
    //fetch users from DB
    return NextResponse.json(users)
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