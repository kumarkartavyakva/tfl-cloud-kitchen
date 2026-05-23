const repoName = "tfl-cloud-kitchen";
const isGithubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: false,
  images: {
    unoptimized: true
  },
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : ""
};

module.exports = nextConfig;
