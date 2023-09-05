import Image from "next/Image";
import Container from "react-bootstrap/Container";
import pin from "@/assets/images/index-card-pin.svg";
import styles from "./Intro.module.scss";

export default function Intro() {
	return (
		<>
			<Container className={styles.intro}>
				<Image src={pin} width="100" height="100" alt="Index card pin" />
				<h1>What is ZotHacks?</h1>
				<p>
					ZotHacks is a beginner-friendly hackathon where students with minimal
					computer science experience will learn to build their first CS
					project. Through ZotHacks, we introduce these students to the world of
					hackathons and web development by providing technical workshops,
					strong mentorship, and free food!
				</p>
			</Container>
		</>
	);
}
