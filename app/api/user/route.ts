import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {

    console.log(req.nextUrl.searchParams)
    return Response.json({ message: 'rodando' })
}

export async function POST(req: Request) {
    const { name } = await req.json()

    try {
        const user = await prisma.user.create({
            data: {
                name
            }
        })
        return Response.json({ message: "okkk", name })

    } catch (erro) {
        return NextResponse.json({
            message: "error", erro
        },
            {
                status: 500
            }
        )
    }



}