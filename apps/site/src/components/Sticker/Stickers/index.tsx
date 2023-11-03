import type React from "react";
import type { StickerProps } from "./stickerProps";
import HackLogo from "@/assets/icons/hack.png";
import HeartEmoji from "@/assets/images/heart_emoji.png";
import BaseSticker from "../BaseSticker";
import { fastShake, lightShake } from "@/components/animation";

export const HackSticker: React.FC<StickerProps> = (props) => {
	return (
		<BaseSticker
			imageSrc={HackLogo.src}
			alt="Hack at UCI sticker"
			height={150}
			width={150}
			{...lightShake}
			{...props}
		/>
	);
};

export const HeartSticker: React.FC<StickerProps> = (props) => (
	<BaseSticker
		imageSrc={HeartEmoji.src}
		alt="heart emoji sticker"
		height={150}
		width={150}
		{...fastShake}
		{...props}
	/>
);
