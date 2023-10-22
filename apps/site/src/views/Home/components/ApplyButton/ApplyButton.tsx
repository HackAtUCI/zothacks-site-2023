import Button from "react-bootstrap/Button";
import { HeartSticker } from "@/components/Sticker/Stickers";

import styles from "./ApplyButton.module.scss";

export default function ApplyButton() {
	return (
		<HeartSticker>
			<Button
				className={styles.applyButton}
				href="/apply"
				variant=""
				target="_blank"
			>
				<div>Apply</div>
			</Button>
		</HeartSticker>
	);
}
