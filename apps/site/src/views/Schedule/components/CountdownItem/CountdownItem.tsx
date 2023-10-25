import { AnimatePresence, motion } from "framer-motion";

import styles from "./CountdownItem.module.scss";

interface CountdownItemProps {
	num: number;
	text: string;
}

export default function CountdownItem({ num, text }: CountdownItemProps) {
	return (
		<>
			<div className={styles.countdownItem}>
				<AnimatePresence mode="popLayout">
					<motion.h2
						key={num}
						initial={{ y: "100%" }}
						animate={{ y: "0%" }}
						exit={{ y: "-100%" }}
						transition={{ ease: "backIn", duration: 0.75 }}
						className="d-block"
					>
						{num}
					</motion.h2>
				</AnimatePresence>
			</div>

			<span>{text}</span>
		</>
	);
}
