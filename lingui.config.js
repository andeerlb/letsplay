import { defineConfig } from "@lingui/cli";

export default defineConfig({
  sourceLocale: "pt",
  locales: ["pt", "en"],
  catalogs: [
    {
      path: "<rootDir>/locales/{locale}/messages",
      include: ["src"],
    },
  ],
});