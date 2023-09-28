import Image from "next/image";
import styles from "./FAQ.module.scss";

import star from "@/assets/images/star.svg";
import eraser from "@/assets/images/eraser.svg";
import { client } from "@/lib/sanity/client";
import clsx from "clsx";
import { getFAQs } from "./getFAQ";

interface sanityResponse {
	faqs: faqType[];
}

interface faqType {
	_key: string;
	_type: string;
	question: string;
	answer: string;
}

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
				<div className={clsx(styles.accordion, "accordion")}>
					{faqs.faqs.map((q, index) => (
						<div
							key={index}
							className={clsx(styles["accordion-border"], "accordion-item")}
						>
							<h3 className={clsx(styles.body, "accordion-header")}>
								{q["question"]}
							</h3>
							<div
								id="collapseOne"
								className={clsx(
									styles.body,
									"accordion-collapse",
									"collapse",
									"show",
								)}
							>
								{/* <p className="accordion-body">{q["answer"]}</p> */}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
