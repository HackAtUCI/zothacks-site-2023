import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { media } from "sanity-plugin-media";
import { schemaTypes } from "./schemas";

export default defineConfig({
	name: "default",
	title: "zothacks-site-2023",

	projectId: "1smqaeyk",
	dataset: "production",

	plugins: [deskTool(), visionTool(), media()],

	schema: {
		types: schemaTypes,
	},
});
