import {NextResponse, NextRequest} from "next/server";

export async function GET(request: NextRequest) {
 const req = await request.json();
 return NextResponse.json({status: 200, message: "API is Running", data: req});
}
