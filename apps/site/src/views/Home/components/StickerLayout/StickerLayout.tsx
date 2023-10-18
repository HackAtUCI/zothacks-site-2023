import { HackSticker, HeartSticker } from "@/components/Sticker/Stickers";

export default function StickerLayout() {
	return (
		<HeartSticker
			style={{
				position: "absolute",
				top: "43%",
				left: "55%",
				zIndex: 100,
			}}
		/>
	);
}
