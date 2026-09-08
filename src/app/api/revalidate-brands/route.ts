import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (): Promise<NextResponse<{ message: string }>> => {
  revalidateTag("getBrands", "days"); // { stale: 60 * 5, revalidate: 60 * 60 * 24, expire: 60 * 60 * 24 * 7 }

  return NextResponse.json({ message: "success" });
};
