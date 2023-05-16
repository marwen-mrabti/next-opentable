/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  images: {
    domains: [
      "via.placeholder.com",
      "images.unsplash.com",
      "resizer.otstatic.com",
    ],
  },
};

module.exports = nextConfig;
