import { HackSticker, HeartSticker } from "@/components/Sticker/Stickers";

export default function StickerLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
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
			{children}
		</div>
	);
}
