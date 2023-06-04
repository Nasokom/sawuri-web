/** @type {import('next').NextConfig} */
const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
}); 
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  withBundleAnalyzer : bundleAnalyzer,

  async headers() {
    return [
      {
        source: "/api/sendMmail",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Origin, X-Requested-With, Content-Type, Accept",
          },
          { key: 'Access-Control-Allow-Headers', value: 'Accept-Encoding' },
          { key: 'Access-Control-Allow-Methods', value: 'GET' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
    ];
  },
}


module.exports = nextConfig
