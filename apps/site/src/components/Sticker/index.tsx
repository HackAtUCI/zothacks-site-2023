import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Sticker.module.scss";

interface StickerProps {
	imageSrc: string;
	alt: string;
	fill: boolean | undefined;
	height: number | undefined;
	width: number | undefined;
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
		<motion.div style={{ height, width }} drag dragMomentum={false}>
			<Image
				src={imageSrc}
				alt={alt}
				{...sizing}
				style={{ pointerEvents: "none" }}
			/>
		</motion.div>
	);
}
