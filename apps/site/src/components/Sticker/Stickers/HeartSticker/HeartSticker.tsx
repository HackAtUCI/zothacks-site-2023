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
				draggable
				dragConstraints={false}
				height={150}
				width={150}
				{...fastShake}
			/>
		</div>
	);
}
