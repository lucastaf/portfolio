import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const searshParam = request.nextUrl.searchParams.get("");

  const reponse = await axios.get(
    "https://f005.backblazeb2.com/" + searshParam,
    {
      headers: {
        Authorization: process.env.BACKBLAZE_AUTH_TOKEN,
      },
      responseType: "stream",
    }
  );

  return new NextResponse(reponse.data, {
    status: 200,
  });
}
