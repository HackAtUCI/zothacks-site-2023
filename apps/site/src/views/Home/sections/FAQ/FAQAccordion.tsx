"use client";

import Accordion from "react-bootstrap/Accordion";
import styles from "./FAQ.module.scss";

interface FAQAccordion {
	faq: {
		_key: string;
		question: JSX.Element;
		answer: JSX.Element;
	}[];
}

export default function FAQAccordion({ faq }: FAQAccordion) {
	return (
		<Accordion className={styles.accordion} alwaysOpen>
			{faq.map(({ _key, question, answer }) => (
				<Accordion.Item
					key={_key}
					className={styles["accordion-border"]}
					eventKey={_key}
				>
					<Accordion.Header as="h3" className={styles.body}>
						{question}
					</Accordion.Header>
					<Accordion.Body className={styles.body}>{answer}</Accordion.Body>
				</Accordion.Item>
			))}
		</Accordion>
	);
}
