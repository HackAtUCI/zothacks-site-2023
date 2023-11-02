import Button from "react-bootstrap/Button";
import StickerPosition from "@/components/Sticker/StickerPosition";
import {
	PencilSticker,
	HeartSticker,
	HeadphoneSticker,
	LaptopSticker,
	MagnifyingGlassSticker,
} from "@/components/Sticker/Stickers";

import styles from "./ApplyButton.module.scss";

export default function ApplyButton() {
	return (
		<StickerPosition
			stickers={[
				{
					Node: HeartSticker,
					positionX: "right",
					positionY: "bottom",
					offsetX: 50,
					offsetY: 50,
				},
				{
					Node: PencilSticker,
					positionX: "left",
					positionY: "top",
					offsetX: -100,
					offsetY: -50,
				},
				{
					Node: HeadphoneSticker,
					positionX: "left",
					positionY: "bottom",
					offsetX: -50,
					offsetY: 50,
				},
				{
					Node: LaptopSticker,
					positionX: "right",
					positionY: "top",
					offsetX: 100,
					offsetY: -100,
				},
				{
					Node: MagnifyingGlassSticker,
					positionX: "right",
					positionY: "bottom",
					offsetX: 200,
					offsetY: 100,
				},
			]}
		>
			<Button
				className={styles.applyButton}
				href="/apply"
				variant=""
				target="_blank"
				disabled
			>
				<span>Applications have closed!</span>
			</Button>
		</StickerPosition>
	);
}
