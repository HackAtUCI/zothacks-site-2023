import "server-only";

import { z } from "zod";
import { cache } from "react";
import { client } from "@/lib/sanity/client";
import { SanityDocument, PortableTextBlock } from "@/lib/sanity/types";
import { groq } from "next-sanity";

const FAQs = SanityDocument.extend({
	_type: z.literal("faqs"),
	faqs: z.array(
		z.object({
			_key: z.string(),
			_type: z.literal("faq"),
			question: z.string(),
			answer: z.array(PortableTextBlock),
		}),
	),
});

export const getFAQs = cache(async () => {
	return FAQs.parse(await client.fetch(groq`*[_type == "faqs"][0]`));
});
