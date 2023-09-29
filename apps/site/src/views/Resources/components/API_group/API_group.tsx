import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import styles from "./API_group.module.scss";

import Post_It from "@/assets/images/google_post_it.png";
import Google_Cloud_Sticker from "@/assets/images/google_cloud_logo.png";
import API_Reference_Tag from "@/assets/images/api_reference_tag.png";

interface API_group_props {
	title: string;
	description: string;
	sticker_src: string;
	tag_src: string;
	tag_link: string;
	post_it_src: string;
}

export default function API_group({
	title,
	description,
	sticker_src,
	tag_src,
	tag_link,
	post_it_src,
}: API_group_props) {
	console.log(post_it_src);
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
