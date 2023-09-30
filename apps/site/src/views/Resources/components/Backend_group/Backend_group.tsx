import styles from "./Backend_group.module.scss";
import { Backend_Group_Props, tag } from "../../interfaces/interfaces";

export default function Backend_Group({
	card,
	title,
	description,
	tagList,
	className,
}: Backend_Group_Props) {
	return (
		<>
			{/* height hardcoded for 3 tags */}
			<div
				style={{
					backgroundImage: `url(${card})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					width: "495px",
					height: "510px",
					position: "relative",
				}}
				className={className}
			>
				<div className={styles.text_flexbox}>
					<h2 className={styles.title}>{title}</h2>
					<p className={styles.description}>{description}</p>
				</div>
				<div className={styles.tag_flexbox}>
					{tagList?.map((tag) => (
						<Resource_Tag link={tag.link} src={tag.src} alt={tag.alt} />
					))}
				</div>
			</div>
		</>
	);
}

function Resource_Tag({ link, className, src, alt }: tag) {
	return (
		<div className={className}>
			<a href={link}>
				<img src={src} className={styles.tag} alt={alt} />
			</a>
		</div>
	);
}
