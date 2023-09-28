import { HackSticker, HeartSticker } from "@/components/Sticker/Stickers";

export default function StickerLayout() {
	return (
		<div style={{ maxWidth: "100vw" }}>
			<HackSticker
				style={{
					position: "absolute",
					left: "60vw",
					top: "15vh",
					zIndex: 100,
				}}
			/>
			<HeartSticker
				style={{
					position: "absolute",
					left: "30vw",
					top: "15vh",
					zIndex: 100,
				}}
			/>
		</div>
	);
}
