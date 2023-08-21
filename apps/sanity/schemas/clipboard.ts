// schemas/clipboard.ts
import { defineType, defineField, defineArrayMember } from "sanity";
import { ClipboardIcon } from "@sanity/icons";

export default defineType({
	name: "clipboard",
	type: "document",
	title: "Clipboards",
	icon: ClipboardIcon,
	fields: [
		defineField({
			name: "label",
			type: "string",
			title: "Label",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "clipboardImage",
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
			of: [
				defineArrayMember({
					type: "reference",
					to: [{ type: "tag" }],
					name: "tag",
				}),
			],
		}),
	],
});
