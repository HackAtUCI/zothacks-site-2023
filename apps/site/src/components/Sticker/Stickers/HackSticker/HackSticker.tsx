import HackLogo from "@/assets/icons/hack.png";
import BaseSticker from "../../BaseSticker";
import styles from "./HackSticker.module.scss";
import { lightShake } from "@/components/animation";

export default function HackSticker({ style }: { style?: object | undefined }) {
	return (
		<div className={styles.stickerContainer} style={{ ...style }}>
			<BaseSticker
				imageSrc={HackLogo.src}
				alt="Hack at UCI sticker"
				height={200}
				width={200}
				{...lightShake}
			/>
		</div>
	);
}
