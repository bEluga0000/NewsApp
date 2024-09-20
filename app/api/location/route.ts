import { NextRequest, NextResponse } from "next/server";
import geoip from "geoip-lite";

export async function GET(req: NextRequest) {
    const forwardedFor = req.headers.get('x-forwarded-for');
    const clientIp =  req.ip;
    const ip = forwardedFor?.split(',')[0].trim();
    const geo = ip ? geoip.lookup(ip) : null;

    console.log(geo); // Log geo information for debugging

    return NextResponse.json({
        forwardedFor,
        clientIp,
        geo
    });
}
