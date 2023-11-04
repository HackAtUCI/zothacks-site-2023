"use client";

import Accordion from "react-bootstrap/Accordion";
import styles from "./FAQ.module.scss";
import { StarSticker, EraserSticker } from "@/components/Sticker/Stickers";
import StickerPosition from "@/components/Sticker/StickerPosition";

interface FAQAccordion {
	faq: {
		_key: string;
		question: JSX.Element;
		answer: JSX.Element;
	}[];
}

const FAQAccordion: React.FC<FAQAccordion> = ({ faq }) => {
	return (
		<StickerPosition
			stickers={[
				{
					Node: StarSticker,
					positionX: "right",
					positionY: "top",
				},
				{
					Node: EraserSticker,
					positionX: "left",
					positionY: "bottom",
				},
			]}
		>
			<div className={styles.faq}>
				<div className={styles["vertical-line"]} />
				<h2 className={styles.title}>FAQ</h2>
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
			</div>
		</StickerPosition>
	);
};

export default FAQAccordion;
