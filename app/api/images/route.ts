import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
const NodeCache = require("node-cache");
const myCache = new NodeCache();

export async function GET(request: NextRequest) {
  let authKey = myCache.get("BACKBLAZE_AUTH_TOKEN");

  if (!authKey) {
    const newKey = await axios.get(
      "https://api005.backblazeb2.com/b2api/v3/b2_authorize_account",
      {
        headers: {
          Authorization: process.env.BACKBLAZE_TOKEN_REQUEST_HEADER,
        },
      }
    );
    myCache.set(
      "BACKBLAZE_AUTH_TOKEN",
      newKey.data.authorizationToken,
      10 * 3600
    );
    authKey = newKey.data.authorizationToken;
  }
  try {
    const searshParam = request.nextUrl.searchParams.get("");
    const reponse = await axios.get(
      "https://f005.backblazeb2.com/" + searshParam,
      {
        headers: {
          Authorization: authKey,
        },
        responseType: "stream",
      }
    );
    return new NextResponse(reponse.data, {
      status: 200,
    });
  } catch (e: any) {
    if (e?.response?.status == 401) {
      myCache.del("BACKBLAZE_AUTH_TOKEN")
      return await GET(request);
    }
  }

  return new NextResponse("Internal server error", {
    status: 500,
  });
}
