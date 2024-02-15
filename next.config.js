const { withSentryConfig } = require('@sentry/nextjs');

// Configuration for your Next.js application
const moduleExports = {
  reactStrictMode: true,
  swcMinify: true, // Corrected typo here
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// Sentry Webpack Plugin options
const sentryWebpackPluginOptions = {
  silent: true,
  org: 'rdmi',
  project: 'javascript-nextjs',
};

// Sentry Next.js specific options
const sentryNextJsOptions = {
  widenClientFileUpload: true,
  transpileClientSDK: true,
  tunnelRoute: '/monitoring',
  hideSourceMaps: true,
  disableLogger: true,
};

// Export the configuration with Sentry integration
module.exports = withSentryConfig(
  moduleExports,
  sentryWebpackPluginOptions,
  sentryNextJsOptions,
);
