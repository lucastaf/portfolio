import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import getSheetTab, { getUrlParams, SheetApiRequest } from "../getSheetTab";

export async function GET(request: NextRequest) {
  const filters = getUrlParams(request.url);
  const resApi = await getSheetTab({
    tab: "projects",
    filters: filters,
  });

  return new NextResponse(JSON.stringify(resApi.data), {
    status: 200,
  });
}
