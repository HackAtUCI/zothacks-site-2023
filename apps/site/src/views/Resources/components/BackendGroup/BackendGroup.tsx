import Link from "next/link";

import styles from "./BackendGroup.module.scss";
import Clear_Tape_Left from "@/assets/images/clear_tape_left.svg";
import Clear_Tape_Right from "@/assets/images/clear_tape_right.svg";

export interface tag {
	link: string;
	src: string;
	alt: string;
	className?: string;
}

export interface BackendGroupProps {
	stickyNoteColor: string;
	title: string;
	description: string;
	tags: tag[];
	tapeOrientation: string;
	className?: string | undefined;
}

export function BackendGroup({
	stickyNoteColor,
	title,
	description,
	tags,
	tapeOrientation,
	className,
}: BackendGroupProps) {
	let tapePosition;
	switch (tapeOrientation) {
		case "left":
			tapePosition = (
				<img className={styles.left_tape} src={Clear_Tape_Left.src} />
			);
			break;
		case "right":
			tapePosition = (
				<img className={styles.right_tape} src={Clear_Tape_Right.src} />
			);
			break;
	}

	return (
		<>
			{/* height hardcoded for 3 tags */}
			<div
				style={{
					backgroundColor: `${stickyNoteColor}`,
				}}
				className={`${className} ${styles.wrapper}`}
			>
				{tapePosition}
				<div className={styles.text_flexbox}>
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.description}>{description}</p>
				</div>
				<div className={styles.tag_flexbox}>
					{tags?.map((tag) => (
						<Resource_Tag
							key={tag.src}
							link={tag.link}
							src={tag.src}
							alt={tag.alt}
						/>
					))}
				</div>
			</div>
		</>
	);
}

function Resource_Tag({ link, className, src, alt }: tag) {
	return (
		<div className={`${className} ${styles.tag_wrapper}`}>
			<Link href={link}>
				<img src={src} className={styles.tag} alt={alt} />
			</Link>
		</div>
	);
}
