/** @type {import('next').NextConfig} */

const stylexPlugin = require("@stylexjs/nextjs-plugin");

const nextConfig = {
  rewrites: () => [
    {
      source: "/approved",
      destination: "http://20.196.201.68:8080/v1/product",
    },
  ],
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  transpilePackages: ["@stylexjs/open-props"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "naviblobstorages.blob.core.windows.net",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.mp4$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      }
    );

    return config;
  },
};

module.exports = stylexPlugin({
  rootDir: __dirname,
})(nextConfig);
