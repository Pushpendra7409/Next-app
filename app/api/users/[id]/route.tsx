import { request } from "http";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schemas";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function GET(
    request: NextRequest, 
    { params }: {params: { id: string }}) {
      const user = await prisma.user.findUnique({
         where: { id: parseInt(params.id) },
      })
 // Fetch dta from DB
 //If not found, return 404 error  else return data
 if ( !user )
    return NextResponse.json({ error: 'User Not found' }, { status: 404});

 return NextResponse.json(user);
    }

    export async function PUT(
      request: NextRequest,
        { params }: {params: { id: number }}) {
         //validate the request body
         const body = await request.json();
         const validation = schema.safeParse(body);
         if(!validation.success)
            return NextResponse.json(validation.error.errors, {status: 400})
         //If valid return 400 
         //Fetch the user with given id
         //If does'nt exist, return 404 error 
         if (params.id > 10)
            return NextResponse.json({ error: 'User Not found' }, { status: 404});
         //updated user
         //Return the updated user
         return NextResponse.json({ id: 1, name: body.name }, { status: 200 });
}

export function DELETE(
   request: NextRequest,
   { params }: {params: { id: number }}
) {
   //Fetch user fom db
   if(params.id > 10)
      return NextResponse.json({ error: 'User Not found'}, { status: 404})
   //If not found return 404

   return NextResponse.json({});
   //Delete the user
   //return 200
}