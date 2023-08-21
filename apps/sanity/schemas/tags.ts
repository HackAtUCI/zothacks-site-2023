import { defineType, defineField } from "sanity";

export default defineType({
	name: "tag",
	title: "Tag",
	type: "document",
	fields: [
		defineField({
			name: "tag_title",
			type: "string",
			title: "Tag",
		}),
	],
});
