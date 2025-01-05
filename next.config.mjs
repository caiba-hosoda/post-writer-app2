import { withContentlayer } from 'next-contentlayer2'

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true, experimental: { appDir: true } }

export default withContentlayer(nextConfig)