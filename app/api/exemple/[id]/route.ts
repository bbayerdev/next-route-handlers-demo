import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest){
    const searchParams = request.nextUrl.searchParams

    console.log(searchParams.get('name'))
    return NextResponse.json(`${searchParams}`)
}