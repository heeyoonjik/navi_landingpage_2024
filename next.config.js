/** @type {import('next').NextConfig} */

const stylexPlugin = require("@stylexjs/nextjs-plugin");

const nextConfig = {
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