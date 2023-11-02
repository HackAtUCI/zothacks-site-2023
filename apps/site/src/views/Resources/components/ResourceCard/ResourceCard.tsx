"use client";
import Image from "next/image";
import { Variants, circIn, easeIn, motion } from "framer-motion";
import openNewWindow from "@/assets/icons/open-new-window.svg";
import styles from "./ResourceCard.module.scss";

type Tag = {
	text: string;
	link: string;
};

interface ResourceCardProps {
	title: string;
	description: JSX.Element;
	stickerSrc?: string;
	links: Tag[];
	stickyNoteColor: string;
}

const variant: Variants = {
	initial: {
		scale: 3,
		opacity: 0,
	},
	animate: {
		scale: 1,
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.1,
		},
	},
};

export default function ResourceCard({
	title,
	description,
	stickerSrc,
	links,
	stickyNoteColor,
}: ResourceCardProps) {
	return (
		<motion.div
			variants={variant}
			initial="initial"
			animate="animate"
			className={styles.group}
			style={{
				backgroundColor: `${stickyNoteColor}`,
			}}
		>
			<motion.div
				className={styles.container + " text-center px-3"}
				variants={variant}
			>
				<motion.div className={styles.tape} variants={variant}></motion.div>
				{stickerSrc && (
					<motion.img
						src={stickerSrc}
						alt="Resource logo"
						width="100"
						variants={variant}
					/>
				)}
				<motion.h3 variants={variant}>{title}</motion.h3>
				{description}
			</motion.div>

			{links.map(({ text, link }) => (
				<motion.a
					key={link}
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className={styles.tag}
					variants={variant}
				>
					{text}
					<motion.div
						className="d-inline ms-1 vertical-align-middle"
						variants={variant}
					>
						<Image
							src={openNewWindow}
							width="20"
							height="20"
							alt="Open link in new window"
						/>
					</motion.div>
				</motion.a>
			))}
		</motion.div>
	);
}
