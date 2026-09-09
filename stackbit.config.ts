import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",

  contentSources: [
    new GitContentSource({
      rootPath: __dirname,

      contentDirs: ["content"],

      models: [
        {
          name: "Page",
          type: "page",

          urlPath: "/",

          filePath: "content/pages/index.json",

          fields: [
            {
              name: "title",
              label: "Yrityksen nimi",
              type: "string"
            },
            {
              name: "description",
              label: "Esittelyteksti",
              type: "string"
            },
            {
              name: "openingHours",
              label: "Aukioloajat",
              type: "string"
            },
            {
              name: "coffeePrice",
              label: "Kahvin hinta",
              type: "string"
            }
          ]
        }
      ]
    })
  ],

  pagesDir: "content/pages"
});