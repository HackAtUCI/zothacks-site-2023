import { z } from "zod";

export const SanityDocument = z.object({
	_id: z.string(),
	_createdAt: z.string().datetime(),
	_updatedAt: z.string().datetime(),
	_rev: z.string(),
});