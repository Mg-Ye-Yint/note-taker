import prisma from "@/helper/db";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, {params: {id }}: {params : {id: string}}){
    console.log(id);
    try {
        if(id){
            const data = await prisma.note.delete({where: {id}})
           return NextResponse.json(data);
        
        }
        else {
            return NextResponse.json({error: "Invalid ID"}, {status: 403});
            }
        
    } catch (error) {
        return NextResponse.json(error);
    }
}

export async function PATCH(req: Request, {params: {id }}: {params : {id: string}}){
    const body = await req.json();
   try {
       if(id && body.title && body.description){
           const data = await prisma.note.update({where: {id}, data: {...body}});
           return NextResponse.json(data);
        }
        else{
            return NextResponse.json({error: "Please provide title and description"}, {status: 404})
        }
   } catch (error) {
       return NextResponse.json(error);
   }
   }

