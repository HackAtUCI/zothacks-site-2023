import Image from "next/image";

import openNewWindow from "@/assets/icons/open-new-window.svg";
import styles from "./ResourceCard.module.scss";

type Tag = {
	text: string;
	link: string;
};

interface ResourceCardProps {
	title: string;
	description: string;
	stickerSrc?: string;
	links: Tag[];
	stickyNoteColor: string;
}

export default function ResourceCard({
	title,
	description,
	stickerSrc,
	links,
	stickyNoteColor,
}: ResourceCardProps) {
	return (
		<div
			className={styles.group}
			style={{
				backgroundColor: `${stickyNoteColor}`,
			}}
		>
			<div className={styles.container}>
				<div className={styles.tape}></div>
				{stickerSrc ? <img src={stickerSrc} alt="Resource logo" /> : null}
				<h3>{title}</h3>
				<p className={styles.text}>{description}</p>
			</div>

			{links.map(({ text, link }) => (
				<a
					key={link}
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className={styles.tag}
				>
					{text}
					<div className="d-inline ms-1 vertical-align-middle">
						<Image
							src={openNewWindow}
							width="20"
							height="20"
							alt="Open link in new window"
						/>
					</div>
				</a>
			))}
		</div>
	);
}
