import importedWithBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = importedWithBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer({});
