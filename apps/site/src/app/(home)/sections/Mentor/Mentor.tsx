import Image from "next/image";

import BookmarkLink from "@/components/BookmarkLink/BookmarkLink";
import tape from "@/assets/images/tape.svg";

import styles from "./Mentor.module.scss";

const MENTOR_APP_URL = "https://hack.ics.uci.edu";

export default function Mentor() {
	const mentorHeader = (
		<h2 className="mb-3 text-start">Interested in becoming a mentor?</h2>
	);
	const mentorDescription = (
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
		<div className="container">
			<div className="position-relative my-5">
				<div className={styles.applySticky}>
					<Image src={tape} alt="post-it tape" className={styles.tape} />
					<div className={styles.applyStickyContent}>
						{mentorHeader}
						{mentorDescription}
					</div>
					{applyLink}
				</div>
				<div className={styles.descSticky + " text-center"}>
					{mentorDescription}
					{applyLink}
				</div>
			</div>
		</div>
	);
}
