import { HackSticker, HeartSticker } from "@/components/Sticker/Stickers";

export default function StickerLayout() {
	return (
		<div style={{ maxWidth: "100vw" }}>
			<HeartSticker
				style={{
					position: "absolute",
					left: "55vw",
					top: "40vh",
					zIndex: 100,
				}}
			/>
		</div>
	);
}
