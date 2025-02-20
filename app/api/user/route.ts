import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
    const { name } = await req.json()
    try {
        const user = await prisma.user.create({
            data: {
                name
            }
        })
        return Response.json({ message: "criado", name })

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

export async function GET(req: NextRequest) {
    try {
        const users = await prisma.user.findMany()
        return NextResponse.json(users)
    } catch (error) {
        return NextResponse.json(
            { message: "error", error },
            { status: 500 }
        )
    }
}
