/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
};

// Integrating next-intl plugin
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
