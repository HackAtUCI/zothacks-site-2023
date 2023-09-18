import Image from "next/image";
import Row from "react-bootstrap/Row";
import pin from "@/assets/images/index-card-pin.svg";
import hackDoodle from "@/assets/images/hack-doodle.svg";
import styles from "./Intro.module.scss";

export default function Intro() {
	return (
		<Row className={styles.intro + " m-5"}>
			<Image
				className={styles.pin}
				src={pin}
				width="100"
				height="100"
				alt="Index card pin"
			/>
			<h2>What is ZotHacks?</h2>
			<p>
				ZotHacks is a beginner-friendly hackathon where students with minimal
				computer science experience will learn to build their first CS project.
				Through ZotHacks, we introduce these students to the world of hackathons
				and web development by providing technical workshops, strong mentorship,
				and free food!
			</p>
			<Image
				className={styles.hackDoodle}
				src={hackDoodle}
				width="250"
				height="250"
				alt="Hack logo doodle"
			/>
		</Row>
	);
}
