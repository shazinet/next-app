import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: number };
}

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "User doesn't exist" }, { status: 404 });
  return NextResponse.json({ id: 1, name: "Hoomaan" });
}
