import Image from "next/image";

interface StickerProps {
	imageSrc: string;
	alt: string;
	fill: boolean;
	height: number;
	width: number;
}

export default function Sticker({
	imageSrc,
	alt,
	fill = false,
	height = 100,
	width = 100,
}: StickerProps) {
	const sizing = fill ? { fill } : { height, width };

	return (
		<div>
			<Image src={imageSrc} alt={alt} {...sizing} />
		</div>
	);
}
