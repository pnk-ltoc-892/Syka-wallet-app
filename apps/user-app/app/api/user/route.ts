import PrismaClient from "@repo/db/client";
import { NextResponse } from "next/server";

const client = PrismaClient;

export const GET = async () => {
    console.log("ajajdasdad");
    
    await client.user.create({
        data: {
            email: "asd",
            name: "adsads"
        }
    })
    return NextResponse.json({
        message: "hi there"
    })
}