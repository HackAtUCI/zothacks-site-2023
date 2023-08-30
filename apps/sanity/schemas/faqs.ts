import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
	name: "faqs",
	title: "FAQs",
	type: "document",
	fields: [
		defineField({
			name: "faqs",
			title: "FAQs",
			type: "array",
			of: [
				defineArrayMember({
					type: "object",
					name: "faq",
					fields: [
						defineField({
							name: "question",
							title: "Question",
							type: "text",
						}),

						defineField({
							name: "answer",
							title: "Answer",
							type: "text",
						}),
					],

					preview: {
						select: {
							title: "question",
							subtitle: "answer",
						},
					},
				}),
			],
		}),
	],
});
