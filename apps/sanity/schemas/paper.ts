// schemas/paper.ts
import { defineType, defineField, defineArrayMember } from "sanity";
import { DocumentSheetIcon } from "@sanity/icons";

export default defineType({
	name: "paper",
	type: "document",
	title: "Paper",
	icon: DocumentSheetIcon,
	fields: [
		defineField({
			name: "label",
			type: "string",
			title: "Label",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "paperImage",
			type: "image",
			title: "Image",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "description",
			type: "array",
			title: "Description",
			of: [defineArrayMember({ type: "block" })],
		}),
		defineField({
			name: "tags",
			type: "array",
			title: "Tags",
			of: [defineArrayMember({ type: "reference", to: [{ type: "tag" }] })],
		}),
	],
});