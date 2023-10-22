import { defineType, defineField } from "sanity";

export default defineType({
	name: "resource",
	title: "Resources",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "array",
			of: [
				{
					type: "block",
					styles: [{ title: "Normal", value: "normal" }],
					lists: [],
				},
			],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "link",
			title: "Link",
			type: "url",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "logo",
			title: "Logo",
			type: "image",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "stickyNoteColor",
			title: "Sticky Note Color",
			type: "color",
			validation: (Rule) => Rule.required(),
		}),
	],
});
