import { defineType, defineField } from "sanity";

export default defineType({
	name: "event",
	title: "Event",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "startTime",
			title: "Start Time",
			type: "datetime",
		}),
		defineField({
			name: "endTime",
			title: "End Time",
			type: "datetime",
		}),
		defineField({
			name: "category",
			title: "Category",
			type: "string",
		}),
		defineField({
			name: "host",
			title: "Host",
			type: "string",
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
	],
});
