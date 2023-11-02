import type React from "react";
import type { StickerProps } from "../stickerProps";
import HackLogo from "@/assets/icons/hack.png";
import BaseSticker from "../../BaseSticker";
import { lightShake } from "@/components/animation";

const HackSticker: React.FC<StickerProps> = (props) => (
	<BaseSticker
		imageSrc={HackLogo.src}
		alt="Hack at UCI sticker"
		height={150}
		width={150}
		{...lightShake}
		{...props}
	/>
);

export default HackSticker;
