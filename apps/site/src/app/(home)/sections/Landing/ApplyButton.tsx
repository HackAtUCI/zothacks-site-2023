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

const ApplyButton = () => {
	return (
		<StickerPosition
			stickers={[
				{
					Node: HeartSticker,
					positionX: "right",
					positionY: "bottom",
					offsetX: 25,
					offsetY: 30,
				},
				{
					Node: PencilSticker,
					positionX: "left",
					positionY: "top",
					offsetX: -300,
					offsetY: -200,
				},
				{
					Node: HeadphoneSticker,
					positionX: "left",
					positionY: "bottom",
					offsetX: -200,
					offsetY: 100,
				},
				{
					Node: LaptopSticker,
					positionX: "right",
					positionY: "top",
					offsetX: 250,
					offsetY: -200,
				},
				{
					Node: MagnifyingGlassSticker,
					positionX: "right",
					positionY: "bottom",
					offsetX: 300,
					offsetY: 80,
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
};

export default ApplyButton;
