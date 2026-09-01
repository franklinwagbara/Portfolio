/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site — `next build` emits the deployable HTML/CSS/JS into `out/`.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
