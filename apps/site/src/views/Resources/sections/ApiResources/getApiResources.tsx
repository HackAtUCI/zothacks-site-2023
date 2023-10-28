import { z } from "zod";
import { cache } from "react";
import { client } from "@/lib/sanity/client";
import { SanityDocument } from "@/lib/sanity/types";

const Resources = z.array(
	SanityDocument.extend({
		description: z.array(
			z.object({
				_key: z.string(),
				children: z.array(
					z.object({
						_key: z.string(),
						text: z.string(),
					}),
				),
			}),
		),
		link: z.string(),
		logo: z.object({
			_type: z.string(),
			asset: z.object({
				_ref: z.string(),
				_type: z.literal("reference"),
			}),
		}),
		stickyNoteColor: z.object({
			_type: z.literal("color"),
			alpha: z.number(),
			hex: z.string(),
		}),
		title: z.string(),
	}),
);

export const getResources = cache(async () => {
	return Resources.parse(await client.fetch("*[_type == 'resource']"));
});
