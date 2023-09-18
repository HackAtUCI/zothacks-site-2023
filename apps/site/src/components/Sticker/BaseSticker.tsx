import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./BaseSticker.module.scss";
import { MutableRefObject } from "react";

export default function Sticker({
	imageSrc,
	alt,
	height = 100,
	width = 100,
	draggable = false,
	// TODO replace with useWindowDimensions hook
	dragConstraints = {
		top: 0,
		left: 0,
		right: window.innerWidth,
		bottom: window.innerHeight,
	},
}: StickerProps) {
	// TODO add drag constraints
	const drag = draggable
		? {
				whileTap: {
					scale: 1.15,
					filter: `drop-shadow(${0.15 * width}px ${0.17 * height}px ${
						0.1 * height
					}px rgba(0, 0, 0, 0.15)`,
				},
				whileHover: {
					scale: 1.05,
					filter: `drop-shadow(${0.07 * width}px ${0.09 * height}px ${
						0.09 * height
					}px rgba(0, 0, 0, 0.25)`,
				},
				drag: true,
				dragMomentum: false,
				dragConstraints: dragConstraints,
				dragElastic: 0.2,
		  }
		: {};

	let transition = {};

	if (draggable) transition = { ...transition, type: "spring", stiffness: 100 };

	return (
		<motion.div
			style={{
				height,
				width,
			}}
			className={styles.stickerContainer}
			transition={transition}
			{...drag}
		>
			<Image
				src={imageSrc}
				alt={alt}
				height={height}
				width={width}
				style={{ pointerEvents: "none" }}
			/>
		</motion.div>
	);
}

interface StickerProps {
	imageSrc: string;
	alt: string;
	height?: number | undefined;
	width?: number | undefined;
	draggable: boolean;
	dragConstraints: object | false | MutableRefObject<any> | undefined;
	// dragConstraints prop can be an object, a Falsy boolean, or a parent ref (https://www.framer.com/motion/gestures/#:~:text=%23-,dragConstraints%3A,-false%20%7C%20Partial%3CBoundingBox2D)
}
