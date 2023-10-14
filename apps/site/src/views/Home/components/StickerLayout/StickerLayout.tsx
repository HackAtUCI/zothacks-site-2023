import { HeartSticker } from "@/components/Sticker/Stickers";

export default function StickerLayout() {
	return (
		<div>
			<HeartSticker
				style={{
					position: "absolute",
					top: "55%",
					right: "20%",
					zIndex: 100,
				}}
			/>
		</>
	);
}
