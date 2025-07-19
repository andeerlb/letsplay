import { defineConfig } from "@lingui/cli";

export default defineConfig({
  sourceLocale: "pt-BR",
  locales: ["pt-BR", "en"],
  catalogs: [
    {
      path: "<rootDir>/src/locales/{locale}/messages",
      include: ["src"],
    },
  ],
});