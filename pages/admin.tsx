import type { GetStaticProps, InferGetStaticPropsType } from "next";
import LegacyPage from "../components/LegacyPage";
import type { LegacyPageProps } from "../components/LegacyPage";
import { readLegacyBody } from "../lib/legacyHtml";

export default function AdminPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return <LegacyPage {...props} />;
}

export const getStaticProps: GetStaticProps<LegacyPageProps> = () => {
  return {
    props: {
      title: "TFL Admin | Operations Dashboard",
      description: "The Food Lab operations dashboard for managing orders, menu items, updates, staff, and cloud sync.",
      bodyHtml: readLegacyBody("admin.html"),
      pageScript: "admin.js",
      basePath: process.env.GITHUB_PAGES === "true" ? "/tfl-cloud-kitchen" : ""
    }
  };
};
