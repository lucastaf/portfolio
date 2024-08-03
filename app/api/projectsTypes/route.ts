import { NextRequest, NextResponse } from "next/server";
import getSheetTab from "../components/getSheetTab";

export async function GET(request: NextRequest) {
  const resApi = await getSheetTab("projectTypes");

  return new NextResponse(JSON.stringify(resApi.data), {
    status: 200,
  });
}
