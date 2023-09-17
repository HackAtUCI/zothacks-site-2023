import Image from "next/image";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import useWindowWidth from "@/lib/useWindowWidth";
import BookmarkLink from "@/components/BookmarkLink/BookmarkLink";
import tape from "@/assets/images/tape.svg";
import styles from "./Mentor.module.scss";

const MENTOR_APP_URL = "https://hack.ics.uci.edu";

export default function Mentor() {
	const width = useWindowWidth();

	const mentorHeader = (
		<h2 className="mb-3">Interested in becoming a mentor?</h2>
	);
	const mentorDescEl = (
		<p>
			Have a knack for innovation? Interested in inspiring the next generation
			of developers? Our mentors are vital to making ZotHacks 2023 successful
			and enjoyable for our hackers. Apply to be a mentor today!
		</p>
	);
	const applyLink = (
		<BookmarkLink className="mb-4" href={MENTOR_APP_URL}>
			Apply to Mentor!
		</BookmarkLink>
	);

	return (
		<Container className="py-5">
			{width >= 992 ? (
				<Row className="position-relative">
					<Col lg={4} className={styles.applySticky}>
						{mentorHeader}
						{applyLink}
					</Col>
					<Col className={styles.descSticky + " text-center"}>
						{mentorDescEl}
					</Col>
				</Row>
			) : (
				<Row className="position-relative">
					<Col className={styles.applyStickyMobile + " mx-3 p-5"}>
						<Image src={tape} alt="post-it tape" className={styles.tape} />
						{mentorHeader}
						{mentorDescEl}
					</Col>
					<Col className={styles.descStickyMobile}>{applyLink}</Col>
				</Row>
			)}
		</Container>
	);
}
