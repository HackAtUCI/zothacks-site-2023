import styles from "./ApiGroup.module.scss";

export interface APIGroupProps {
	title: string;
	description: string;
	stickerSrc: string;
	tagSrc: string;
	tagLink: string;
	stickyNoteColor: string;
}

export function ApiGroup({
	title,
	description,
	stickerSrc,
	tagSrc,
	tagLink,
	stickyNoteColor,
}: APIGroupProps) {
	return (
		<div
			className={styles.group}
			style={{
				backgroundColor: `${stickyNoteColor}`,
			}}
		>
			<div className={styles.container}>
				<div className={styles.tape}></div>
				<img src={stickerSrc} />
				<h3>{title}</h3>
				<p className={styles.text}>{description}</p>
			</div>
			<a href={tagLink} target="_blank">
				<img src={tagSrc} className={styles.tag} />
			</a>
		</div>
	);
}
