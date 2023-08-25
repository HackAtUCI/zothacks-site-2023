// schemas/stickers.ts
import { defineType, defineField, defineArrayMember } from "sanity";
import { ImageIcon } from "@sanity/icons";

export default defineType({
	name: "sticker",
	type: "document",
	title: "Stickers",
	icon: ImageIcon,
	fields: [
		defineField({
			name: "label",
			type: "string",
			title: "Label",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "stickerImage",
			type: "image",
			title: "Image",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			title: "Description",
			name: "description",
			type: "array",
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
