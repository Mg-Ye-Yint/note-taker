import prisma from "@/helper/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request, res: Response){
    const body = await req.json();
   try {
       if(body.title && body.description){
           const data = await prisma.note.create({data: {title: body.title, description: body.description} });
           return NextResponse.json(data);
        }
        else{
            return NextResponse.json({error: "Your input is not valid"}, {status: 403})
        }
   } catch (error) {
       return NextResponse.json(error);
   }
   }

   


