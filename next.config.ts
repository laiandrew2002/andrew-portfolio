import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion'],
  },

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Bundle analyzer (only in development)
  ...(process.env.ANALYZE === 'true' && {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    webpack: async (config: any) => {
      if (process.env.NODE_ENV === 'development') {
        const { BundleAnalyzerPlugin } = await import(
          'webpack-bundle-analyzer'
        );
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            openAnalyzer: true,
          })
        );
      }
      return config;
    },
  }),

  // Performance optimizations
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
