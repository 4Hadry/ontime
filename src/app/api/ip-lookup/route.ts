import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { ip } = await req.json();

  if (!ip) {
    return NextResponse.json(
      { error: "IP address is required" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(`https://ipwho.is/${ip}`);
    const data = await res.json();
    // console.log("res", data);
    return NextResponse.json({
      ip: data.ip,
      city: data.city,
      region: data.region,
      country: data.country,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch location" },
      { status: 500 }
    );
  }
}
