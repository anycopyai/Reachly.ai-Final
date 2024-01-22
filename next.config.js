const { withSentryConfig } = require("@sentry/nextjs");



// Sentry Webpack Plugin options
const sentryWebpackPluginOptions = {
  // Options...
  silent: true,
  org: "rdmi",
  project: "javascript-nextjs",
};

// Sentry Next.js specific options
const sentryNextJsOptions = {
  // Options...
  widenClientFileUpload: true,
  transpileClientSDK: true,
  tunnelRoute: "/monitoring",
  hideSourceMaps: true,
  disableLogger: true,
};

// Export the configuration with Sentry integration
module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions, sentryNextJsOptions);
