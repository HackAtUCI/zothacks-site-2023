import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./BaseSticker.module.scss";
import { MutableRefObject, useRef } from "react";

interface StickerProps {
	imageSrc: string;
	alt: string;
	height?: number;
	width?: number;
	draggable?: boolean;
	dragConstraints?: object | false | MutableRefObject<any> | undefined;
	// dragConstraints prop can be an object containing coordinates, a Falsy boolean, or a parent ref (https://www.framer.com/motion/gestures/#:~:text=%23-,dragConstraints%3A,-false%20%7C%20Partial%3CBoundingBox2D)
	animate?: object | undefined;
	transition?: object | undefined;
}

export default function Sticker({
	imageSrc,
	alt,
	height = 100,
	width = 100,
	draggable = false,
	dragConstraints = false,
	animate = {},
	transition = {},
}: StickerProps) {
	const pageRef = useRef(document.documentElement);
	let transitionProps = { ...transition };

	let animateProps = {
		...animate,
		filter: "drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.3))",
	};

	if (draggable)
		transitionProps = {
			...transition,
			scale: { type: "spring", stiffness: 100 },
		};
	const drag = draggable
		? {
				whileTap: {
					scale: 1.1,
					filter: `drop-shadow(${0.08 * width}px ${0.1 * height}px ${
						0.1 * height
					}px rgba(0, 0, 0, 0.15))`,
				},
				whileHover: {
					scale: 1.025,
					filter: `drop-shadow(${0.05 * width}px ${0.07 * height}px ${
						0.05 * height
					}px rgba(0, 0, 0, 0.2))`,
				},
				drag: true,
				dragMomentum: false,
				dragConstraints: dragConstraints ? dragConstraints : pageRef,
				dragElastic: 0.2,
				transition: transitionProps,
		  }
		: {};

	return (
		<motion.div
			style={{
				height,
				width,
			}}
			className={styles.stickerContainer}
			animate={animateProps}
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
