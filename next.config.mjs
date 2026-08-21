import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {import('next').NextConfig} */
export default function nextConfig(phase) {
  return {
    reactStrictMode: true,
    // Keep production builds from replacing the active development cache.
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next" : ".next-build",
  };
}
