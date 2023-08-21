// schemas/notes.ts
import { defineType, defineField, defineArrayMember } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export default defineType({
	name: "note",
	type: "document",
	title: "Notes",
	icon: DocumentIcon,
	fields: [
		defineField({
			name: "label",
			type: "string",
			title: "Label",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "noteImage",
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
