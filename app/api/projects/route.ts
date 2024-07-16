import { NextRequest, NextResponse } from "next/server";
import getSheetTab from "../components/getSheetTab";
import getUrlFilter from "../components/getUrlParams";

export async function GET(request: NextRequest) {
  const filters = getUrlFilter(request.url);
  const resApi = await getSheetTab("projects", filters);

  return new NextResponse(JSON.stringify(resApi.data), {
    status: 200,
  });
}
