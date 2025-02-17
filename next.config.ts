import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/Adithya_Iyer_Resume.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
