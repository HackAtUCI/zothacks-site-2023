import { z } from "zod";
import { cache } from "react";
import { client } from "@/lib/sanity/client";
import { SanityDocument } from "@/lib/sanity/types";

const APIResources = z.array(SanityDocument.extend({}));

export const getApiResources = cache(async () => {
	return APIResources.parse(
		await client.fetch("*[_type == 'resources' && resourceType == 'api']"),
	);
});
