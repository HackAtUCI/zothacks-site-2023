import styles from "./ApiGroup.module.scss";
import { API_Group_Props } from "../../interfaces/interfaces";
export default function API_group({
	title,
	description,
	stickerSrc,
	tagSrc,
	tagLink,
	postItSrc,
}: API_Group_Props) {
	return (
		<div
			style={{
				backgroundImage: `url(${postItSrc})`,
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
