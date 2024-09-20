import geoip from "geoip-lite";

export const location = ()=>{
    const geo = geoip.lookup("115.96.177.254")
    return geo
}