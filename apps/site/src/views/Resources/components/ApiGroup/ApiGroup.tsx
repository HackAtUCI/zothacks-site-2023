import styles from "./ApiGroup.module.scss";

export interface APIGroupProps {
	title: string;
	description: JSX.Element;
	stickerSrc: string;
	tagLink: string;
	stickyNoteColor: string;
}

export function ApiGroup({
	title,
	description,
	stickerSrc,
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
				<div className={styles.text}>{description}</div>
			</div>
		</div>
	);
}
