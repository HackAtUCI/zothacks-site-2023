import { z } from "zod";
import { cache } from "react";
import { client } from "@/lib/sanity/client";
import { SanityDocument } from "@/lib/sanity/types";

const Events = z.array(
	SanityDocument.extend({
		description: z.array(
			z.object({
				_key: z.string(),
				markDefs: z.array(
					z.object({
						_type: z.string(),
						href: z.optional(z.string()),
						_key: z.string(),
					}),
				),
				children: z.array(
					z.object({
						text: z.string(),
						_key: z.string(),
						_type: z.literal("span"),
						marks: z.array(z.string()),
					}),
				),
				_type: z.literal("block"),
				style: z.literal("normal"),
			}),
		),
		host: z.string(),
		startTime: z.string().datetime(),
		endTime: z.string().datetime(),
		title: z.string(),
		category: z.string(),
		location: z.string(),
		_type: z.literal("event"),
	}),
);

export const getSchedule = cache(async () => {
	return Events.parse(await client.fetch("*[_type == 'event']"));
});
