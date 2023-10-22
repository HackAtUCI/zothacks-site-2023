import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { colorInput } from "@sanity/color-input";
import { media } from "sanity-plugin-media";
import { schemaTypes } from "./schemas";
import { BadgeHelp } from "lucide-react";

export default defineConfig({
	name: "default",
	title: "zothacks-site-2023",

	projectId: "tz8iut6e",
	dataset: "production",

	plugins: [
		deskTool({
			structure: (S) =>
				S.list()
					.title("Content")
					.items([
						S.listItem()
							.title("FAQs")
							.icon(BadgeHelp)
							.child(
								S.document().schemaType("faqs").documentId("faqs").title("FAQs")
							),
						S.divider(),
						...S.documentTypeListItems().filter(
							(listItem) => !["faqs"].includes(listItem.getId()!)
						),
					]),
		}),
		visionTool(),
		colorInput(),
		media(),
	],

	schema: {
		types: schemaTypes,
	},
});
