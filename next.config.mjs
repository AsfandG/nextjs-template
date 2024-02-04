/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1vbmxqfrfhtre.cloudfront.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "multivendorswedenuzrtech.s3.eu-north-1.amazonaws.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
