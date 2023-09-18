import { motion } from "framer-motion";

import HackLogo from "@/assets/icons/hack.png";
import BaseSticker from "../../BaseSticker";
import styles from "./HackSticker.module.scss";

export default function HackSticker() {
	return (
		<motion.div className={styles.stickerContainer}>
			<BaseSticker
				imageSrc={HackLogo.src}
				alt="hack-at-uci-sticker"
				draggable
				dragConstraints={false}
				height={100}
				width={100}
			/>
		</motion.div>
	);
}
