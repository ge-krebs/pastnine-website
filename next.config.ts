import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // Lets the dev server respond to requests from your phone/other devices
  // on the LAN (e.g. testing via the "Network:" URL next dev prints).
  // Update this if your machine's local IP changes.
  allowedDevOrigins: ["192.168.1.24"],
};

export default nextConfig;
