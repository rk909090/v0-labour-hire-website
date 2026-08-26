/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a fully static export into ./out (HTML/CSS/JS + the /*.php form handlers
  // in public/ carried through as-is) for upload to cPanel.
  output: "export",
  // Emit each route as <route>/index.html so clean URLs like /team/andrew-hylands
  // resolve on LiteSpeed without redirecting into an index-less directory.
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
