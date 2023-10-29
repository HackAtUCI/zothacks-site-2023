import { defineType, defineField} from "sanity";

export default defineType({
	name: "event",
	title: "Event",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "title",
			type: "string"
		}),
		defineField({
			name: "startTime",
			title: "startTime",
			type: "datetime"
		}),
		defineField({
			name: "endTime",
			title: "endTime",
			type: "datetime"
		}),
		defineField({
			name: "category",
			title: "category",
			type: "string"
		}),
		defineField({
			name: "host",
			title: "host",
			type: "string"
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
