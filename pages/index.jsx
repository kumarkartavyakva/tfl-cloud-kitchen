import LegacyPage from "../components/LegacyPage";
import { readLegacyBody } from "../lib/legacyHtml";

export default function CustomerPage(props) {
  return <LegacyPage {...props} />;
}

export function getStaticProps() {
  return {
    props: {
      title: "The Food Lab | Premium Cloud Kitchen",
      description: "Lab Tested Deliciousness. Order premium food from TFL sub-brands including Project Paratha, Rice Bowl Rocketry, and more.",
      bodyHtml: readLegacyBody("index.html"),
      pageScript: "customer.js",
      basePath: process.env.GITHUB_PAGES === "true" ? "/tfl-cloud-kitchen" : ""
    }
  };
}
