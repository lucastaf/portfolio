import { NextRequest, NextResponse } from "next/server";
import getUrlFilter from "../components/getUrlParams";
import getSheetTabUncached from "../components/getSheetTabUnchached";

export async function GET(request: NextRequest) {
  const filters = getUrlFilter(request.url);
  const resApi = await getSheetTabUncached("knowledge", filters);

  return new NextResponse(JSON.stringify(resApi.data), {
    status: 200,
  });
}
