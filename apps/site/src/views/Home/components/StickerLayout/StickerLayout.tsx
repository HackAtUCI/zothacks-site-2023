import { HeartSticker } from "@/components/Sticker/Stickers";

export default function StickerLayout() {
	return (
		<div>
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
