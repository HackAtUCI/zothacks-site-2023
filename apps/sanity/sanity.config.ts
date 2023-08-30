import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { media } from "sanity-plugin-media";
import { schemaTypes } from "./schemas";
import { HelpCircle } from "lucide-react";

export default defineConfig({
	name: "default",
	title: "zothacks-site-2023",

	projectId: "1smqaeyk",
	dataset: "production",

	plugins: [
		deskTool({
			structure: (S) =>
				S.list()
					.title("Content")
					.items([
						S.listItem()
							.title("FAQs")
							.icon(HelpCircle)
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
		media(),
	],

	schema: {
		types: schemaTypes,
	},
});
