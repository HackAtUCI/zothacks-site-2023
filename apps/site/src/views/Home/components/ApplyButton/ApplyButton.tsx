import Button from "react-bootstrap/Button";
import { HeartSticker } from "@/components/Sticker/Stickers";

import styles from "./ApplyButton.module.scss";

export default function ApplyButton() {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "flex-end",
			}}
		>
			<Button
				className={styles.applyButton}
				href="/apply"
				variant=""
				target="_blank"
			>
				<div>Apply</div>
			</Button>
			<div
				style={{
					position: "relative",
					width: 0,
					height: 0,
					transform: "translate(-75px, -75px);",
				}}
			>
				<HeartSticker
					style={{
						position: "absolute",
						zIndex: 100,
					}}
				/>
			</div>
		</div>
	);
}
