import HackLogo from "@/assets/icons/hack.png";
import BaseSticker from "../../BaseSticker";
import styles from "./HackSticker.module.scss";
import { lightShake } from "@/components/animation";

export default function HackSticker({ style }: { style?: object | undefined }) {
	return (
		<div className={styles.stickerContainer} style={{ ...style }}>
			<BaseSticker
				imageSrc={HackLogo.src}
				alt="hack-at-uci-sticker"
				draggable
				dragConstraints={false}
				height={500}
				width={500}
				{...lightShake}
			/>
		</div>
	);
}
