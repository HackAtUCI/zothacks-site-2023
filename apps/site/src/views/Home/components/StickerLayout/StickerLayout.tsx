import { HackSticker, HeartSticker } from "@/components/Sticker/Stickers";

export default function StickerLayout() {
	return (
		<HeartSticker
			style={{
				position: "absolute",
				top: "45%",
				left: "60%",
				zIndex: 100,
			}}
		/>
	);
}
