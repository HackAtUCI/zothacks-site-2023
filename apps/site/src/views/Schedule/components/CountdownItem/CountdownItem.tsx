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
					<motion.span key={num} className="h2">
						{num}
					</motion.span>
				</AnimatePresence>
			</div>

			<span>{text}</span>
		</>
	);
}
