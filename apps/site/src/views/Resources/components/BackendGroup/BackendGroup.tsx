import Link from "next/link";

import styles from "./BackendGroup.module.scss";
import { Backend_Group_Props, tag } from "../../interfaces/interfaces";
import Clear_Tape_Left from "@/assets/images/clear_tape_left.svg";
import Clear_Tape_Right from "@/assets/images/clear_tape_right.svg";

export default function Backend_Group({
	card,
	title,
	description,
	tagList,
	tapeOrientation,
	className,
}: Backend_Group_Props) {
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
					backgroundImage: `url(${card})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					width: "495px",
					height: "510px",
					position: "relative",
					marginTop: "50px",
				}}
				className={`${className} ${styles.wrapper}`}
			>
				{tapePosition}
				<div className={styles.text_flexbox}>
					<h2 className={styles.title}>{title}</h2>
					<p className={styles.description}>{description}</p>
				</div>
				<div className={styles.tag_flexbox}>
					{tagList?.map((tag) => (
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
