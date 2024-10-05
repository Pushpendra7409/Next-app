import { request } from "http";
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

    export async function PUT(
      request: NextRequest,
        { params }: {params: { id: number }}) {
         //validate the request body
         const body = await request.json();
         if(!body.name)
            return NextResponse.json({error: 'Name is required'}, {status: 400})
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