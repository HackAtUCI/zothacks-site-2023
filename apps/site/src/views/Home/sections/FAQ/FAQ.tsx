import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import styles from "./FAQ.module.scss";

const sanityUrl: string =
	"https://1smqaeyk.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22faqs%22%5D+&perspective=previewDrafts";

interface sanityResponse {
	result: {
		faqs: faqType[];
	}[];
}
interface faqType {
	question: string;
	answer: string;
}

export default function FAQ() {
	const [faq, setFAQ] = useState<faqType[] | []>([]);

	useEffect(() => {
		fetch(sanityUrl)
			.then((response) => {
				response
					.json()
					.then((data: sanityResponse) => {
						setFAQ(data.result[0]["faqs"]);
					})
					.catch((e: Error) => {
						console.log(e);
					});
			})
			.catch((e: Error) => {
				console.log(e);
			});
	}, []);

	return (
		<Container as="section">
			<div className={styles.faq}>
				<div className={styles["vertical-line"]} />
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
