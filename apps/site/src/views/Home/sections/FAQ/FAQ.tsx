import Image from "next/image";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import styles from "./FAQ.module.scss";

import star from "@/assets/images/star.svg";
import eraser from "@/assets/images/eraser.svg";
import { client } from "@/lib/sanity/client";

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
	const data: sanityResponse[] = await client.fetch('*[_type == "faqs"]');
	const faq: faqType[] = data[0]["faqs"];

	return (
		<Container as="section">
			<div className={styles.faq}>
				<div className={styles["vertical-line"]} />
				<Image src={star} alt="star" className={styles["star-lg"]} />
				<Image src={star} alt="star" className={styles["star-sm"]} />
				<Image src={eraser} alt="eraser" className={styles["eraser"]} />
				<h2 className={styles.title}>FAQ</h2>
				<Accordion className={styles.accordion} alwaysOpen>
					{faq.map((q, index) => (
						<Accordion.Item
							key={index}
							className={styles["accordion-border"]}
							eventKey={`${index}`}
						>
							<Accordion.Header as="h3" className={styles.body}>
								{q["question"]}
							</Accordion.Header>
							<Accordion.Body as="p" className={styles.body}>
								{q["answer"]}
							</Accordion.Body>
						</Accordion.Item>
					))}
				</Accordion>
			</div>
		</Container>
	);
}
