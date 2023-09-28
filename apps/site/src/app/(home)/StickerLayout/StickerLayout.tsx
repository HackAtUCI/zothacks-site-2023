"use client";

import { HackSticker, HeartSticker } from "@/components/Sticker/Stickers";

export default function StickerLayout() {
	return (
		<div style={{ maxWidth: "100vw" }}>
			<HeartSticker
				style={{
					position: "absolute",
					left: "52vw",
					top: "35vh",
					zIndex: 100,
				}}
			/>
		</div>
	);
}
