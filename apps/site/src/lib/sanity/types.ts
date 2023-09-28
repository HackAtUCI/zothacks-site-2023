import { z } from "zod";

export const SanityDocument = z.object({
	_id: z.string(),
	_createdAt: z.string().datetime(),
	_updatedAt: z.string().datetime(),
	_rev: z.string(),
});

export const SanityReference = z.object({
	_type: z.literal("reference"),
	_ref: z.string(),
});

export const SanityImageReference = z.object({
	_type: z.literal("image"),
	asset: SanityReference,
});

export const PortableTextMarkDefinition = z
	.object({
		_type: z.string(),
		_key: z.string(),
	})
	.catchall(z.unknown());
export const TypedObject = z.object({
	_type: z.string(),
	_key: z.string().optional(),
});
export const ArbitraryTypedObject = TypedObject.catchall(z.any());
export const PortableTextSpan = z.object({
	_type: z.literal("span"),
	_key: z.string().optional(),
	text: z.string(),
	marks: z.array(z.string()).optional(),
});
export const PortableTextBlockStyle = z
	.enum(["normal", "blockquote", "h1", "h2", "h3", "h4", "h5", "h6"])
	.or(z.string());
export const PortableTextListItemType = z
	.enum(["bullet", "number"])
	.or(z.string());
export const PortableTextBlock = z.object({
	_type: z.union([z.literal("block"), z.string()]),
	_key: z.string().optional(),
	children: z.array(z.union([ArbitraryTypedObject, PortableTextSpan])),
	markDefs: z.array(PortableTextMarkDefinition).optional(),
	style: PortableTextBlockStyle.optional(),
	listItem: PortableTextListItemType.optional(),
	level: z.number().optional(),
});
