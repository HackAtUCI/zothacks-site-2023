import type React from "react";
import type { StickerProps } from "../stickerProps";
import HeartEmoji from "@/assets/images/heart_emoji.png";
import BaseSticker from "../../BaseSticker";
import { fastShake } from "@/components/animation";

const HeartSticker: React.FC<StickerProps> = (props) => (
	<BaseSticker
		imageSrc={HeartEmoji.src}
		alt="heart emoji sticker"
		height={150}
		width={150}
		{...fastShake}
		{...props}
	/>
);

export default HeartSticker;
