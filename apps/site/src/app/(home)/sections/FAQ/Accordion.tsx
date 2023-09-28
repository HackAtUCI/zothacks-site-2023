"use client";

import type z from "zod";
import type { FAQs } from "./getFAQ";
import clsx from "clsx";
import styles from "./Accordion.module.scss";

interface AccordionProps {
	faqs: z.infer<typeof FAQs>;
}

export const Accordion = ({ faqs }: AccordionProps) => {
	return (
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
	);
};
