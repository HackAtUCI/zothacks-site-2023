import HeartEmoji from "@/assets/images/heart_emoji.png";
import BaseSticker from "../../BaseSticker";
import { fastShake } from "@/components/animation";

export default function HeartSticker({
	style,
}: {
	style?: object | undefined;
}) {
	return (
		<div style={{ ...style }}>
			<BaseSticker
				imageSrc={HeartEmoji.src}
				alt="heart emoji sticker"
				height={200}
				width={200}
				{...fastShake}
			/>
		</div>
	);
}
