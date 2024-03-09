import { db } from "@/lib/db"
import { NextResponse } from "next/server";

export async function POST(req){
    const query = await req.json();
    const food = await db.food.findMany(query);
    
    return NextResponse.json(food);
}