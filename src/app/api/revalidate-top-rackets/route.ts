import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (): Promise<NextResponse<{ text: string }>> => {
  revalidateTag("getTopRackets", "hours"); // { stale: 60 * 5, revalidate: 60 * 60, expire: 60 * 60 * 24 }

  return NextResponse.json({ text: "success" });
};
