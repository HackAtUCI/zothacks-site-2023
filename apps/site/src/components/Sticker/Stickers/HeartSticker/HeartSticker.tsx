import HeartEmoji from "@/assets/images/heart_emoji.png";
import BaseSticker from "../../BaseSticker";
import { fastShake } from "@/components/animation";
import React from "react";

interface HeartStickerProps {
	children: React.ReactNode;
	position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const HeartSticker: React.FC<HeartStickerProps> = (props) => (
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
