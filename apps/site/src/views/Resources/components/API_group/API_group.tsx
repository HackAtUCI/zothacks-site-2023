import styles from "./API_group.module.scss";
import { API_Group } from "../../interfaces/interfaces";
export default function API_group({
	title,
	description,
	sticker_src,
	tag_src,
	tag_link,
	post_it_src,
}: API_Group) {
	return (
		<div
			style={{
				backgroundImage: `url(${post_it_src})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPositionY: "25px",
				width: "344px",
				height: "500px",
				position: "relative",
			}}
		>
			<div className={styles.container}>
				<div className={styles.tape}></div>
				<img src={sticker_src} />
				<h3>{title}</h3>
				<p className={styles.text}>{description}</p>
			</div>
			<a href={tag_link} target="_blank">
				<img src={tag_src} className={styles.tag} />
			</a>
		</div>
	);
}
