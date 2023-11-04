import type React from "react";
import type { StickerProps } from "./stickerProps";
import HackLogo from "@/assets/icons/hack.png";
import HeartEmoji from "@/assets/images/heart_emoji.png";
import MagnifyingGlass from "@/assets/images/magnifying_glass.png";
import Laptop from "@/assets/images/laptop.png";
import Pencil from "@/assets/images/pencil.png";
import Headphone from "@/assets/images/headphones.png";
import BaseSticker from "../BaseSticker";

import { lightShake, reverseLightShake } from "@/components/animation";

export const HackSticker: React.FC<StickerProps> = (props) => {
	return (
		<BaseSticker
			imageSrc={HackLogo.src}
			alt="Hack at UCI sticker"
			height={200}
			width={200}
			{...props}
			{...lightShake}
		/>
	);
};

export const HeartSticker: React.FC<StickerProps> = (props) => (
	<BaseSticker
		imageSrc={HeartEmoji.src}
		alt="heart emoji sticker"
		height={150}
		width={150}
		{...lightShake}
		{...props}
	/>
);

export const PencilSticker: React.FC<StickerProps> = (props) => (
	<BaseSticker
		imageSrc={Pencil.src}
		alt="pencil sticker"
		height={220}
		width={220}
		{...reverseLightShake}
		{...props}
	/>
);

export const MagnifyingGlassSticker: React.FC<StickerProps> = (props) => (
	<BaseSticker
		imageSrc={MagnifyingGlass.src}
		alt="magnifying glass sticker"
		height={300}
		width={300}
		{...reverseLightShake}
		{...props}
	/>
);

export const LaptopSticker: React.FC<StickerProps> = (props) => (
	<BaseSticker
		imageSrc={Laptop.src}
		alt="laptop sticker"
		height={230}
		width={230}
		{...reverseLightShake}
		{...props}
	/>
);

export const HeadphoneSticker: React.FC<StickerProps> = (props) => (
	<BaseSticker
		imageSrc={Headphone.src}
		alt="headphone sticker"
		height={200}
		width={200}
		{...reverseLightShake}
		{...props}
	/>
);
