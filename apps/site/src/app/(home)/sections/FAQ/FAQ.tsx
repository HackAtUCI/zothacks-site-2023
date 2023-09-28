import Image from "next/image";
import styles from "./FAQ.module.scss";

import star from "@/assets/images/star.svg";
import eraser from "@/assets/images/eraser.svg";
import { getFAQs } from "./getFAQ";
import { Accordion } from "./Accordion";

export default async function FAQ() {
	const faqs = await getFAQs();

	return (
		<div className="container">
			<div className={styles.faq}>
				<div className={styles["vertical-line"]} />
				<Image src={star} alt="star" className={styles["star-lg"]} />
				<Image src={star} alt="star" className={styles["star-sm"]} />
				<Image src={eraser} alt="eraser" className={styles["eraser"]} />
				<h2 className={styles.title}>FAQ</h2>
				<Accordion faqs={faqs} />
			</div>
		</div>
	);
}
