import { NextRequest, NextResponse } from "next/server";
import geoip from "geoip-lite";

export async function GET(req: NextRequest) {
    const forwardedFor = req.headers.get('x-forwarded-for');
    const clientIp =  req.ip;
    const ip = forwardedFor?.split(',')[0].trim();
    const geo = geoip.lookup("115.96.177.254") 
    return NextResponse.json({
        forwardedFor,
        clientIp,
        ip
        // geo
    });
}
