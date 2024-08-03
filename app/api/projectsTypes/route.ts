import { NextRequest, NextResponse } from "next/server";
import getSheetTabUncached from "../components/getSheetTabUnchached";

export async function GET(request: NextRequest) {
  const resApi = await getSheetTabUncached("projectTypes");

  return new NextResponse(JSON.stringify(resApi.data), {
    status: 200,
  });
}
