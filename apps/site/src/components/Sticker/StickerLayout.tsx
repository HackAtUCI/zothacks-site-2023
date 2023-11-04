import styles from "./StickerLayout.module.scss";
import {
	PencilSticker,
	HeartSticker,
	HeadphoneSticker,
	LaptopSticker,
	MagnifyingGlassSticker,
} from "@/components/Sticker/Stickers";

interface StickerPositionProps {
	children?: React.ReactNode;
}
const StickerLayout: React.FC<StickerPositionProps> = ({ children }) => {
	return (
		<div style={{ maxWidth: "100vw" }}>
			<PencilSticker
				style={{
					position: "absolute",
					height: "150px",
					width: "150px",
					left: "14%",
					top: "5%",
				}}
			/>
			<HeadphoneSticker
				style={{
					position: "absolute",
					height: "150px",
					width: "150px",
					left: "70%",
					top: "5%",
				}}
			/>
			<HeartSticker
				style={{
					position: "absolute",
					height: "150px",
					width: "150px",
					left: "75%",
					top: "12%",
				}}
			/>
			<LaptopSticker
				style={{
					position: "absolute",
					height: "150px",
					width: "150px",
					left: "25%",
					top: "10%",
				}}
			/>
			<MagnifyingGlassSticker
				style={{
					position: "absolute",
					left: "50%",
					top: "18%",
					height: "150px",
					width: "150px",
				}}
			/>
			{children}
		</div>
	);
};

export default StickerLayout;
