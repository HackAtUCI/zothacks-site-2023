import type { StickerProps } from "./Stickers/stickerProps";
import styles from "./StickerPosition.module.scss";

interface Sticker {
	Node: React.ComponentType<StickerProps>;
	positionX?: "left" | "right";
	positionY?: "top" | "bottom";
	offsetX?: number;
	offsetY?: number;
}

const StickerParent: React.FC<Sticker> = ({
	Node,
	positionY = "top",
	offsetX,
	offsetY,
}) => (
	<div
		className={styles.stickerParent}
		style={{
			alignSelf: positionY === "top" ? "flex-start" : "flex-end",
		}}
	>
		<Node offsetX={offsetX} offsetY={offsetY} />
	</div>
);

interface StickerPositionProps {
	children?: React.ReactNode;
	stickers: Sticker[];
}

const StickerPosition: React.FC<StickerPositionProps> = ({
	children,
	stickers,
}) => {
	return (
		<div className={styles.stickerPosition}>
			{stickers
				.filter(({ positionX }) => !positionX || positionX === "left")
				.map((sticker) => (
					// eslint-disable-next-line react/jsx-key
					<StickerParent {...sticker} />
				))}
			{children}
			{stickers
				.filter(({ positionX }) => positionX === "right")
				.map((sticker) => (
					// eslint-disable-next-line react/jsx-key
					<StickerParent {...sticker} />
				))}
		</div>
	);
};

export default StickerPosition;
