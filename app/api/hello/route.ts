import { location } from "@/components/findlocation";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
    const forwardedFor = req.headers.get('x-forwarded-for');
    const clientIp = req.ip;
    const ip = forwardedFor?.split(',')[0].trim();
    // const geo = forwardedFor ? geoip.lookup(forwardedFor) : "good"
    const geo = location()
    return NextResponse.json({
        forwardedFor,
        clientIp,
        ip,
        geo
    });
}