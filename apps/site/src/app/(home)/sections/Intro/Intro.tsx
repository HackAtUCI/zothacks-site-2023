"use client";

import Image from "next/image";
import Container from "react-bootstrap/Container";

import pin from "@/assets/images/index-card-pin.svg";
import StickerPosition from "@/components/Sticker/StickerPosition";
import { HackSticker } from "@/components/Sticker/Stickers";

import styles from "./Intro.module.scss";

const Intro = () => {
	return (
		<Container as="section">
			<StickerPosition
				stickers={[
					{
						Node: HackSticker,
						positionX: "right",
						positionY: "bottom",
						offsetX: -170,
						offsetY: -20,
					},
				]}
			>
				<Container>
					<div className={styles.intro}>
						<Image
							className={styles.pin}
							src={pin}
							width="100"
							height="100"
							alt="Index card pin"
						/>
						<h2>What is ZotHacks?</h2>
						<p>
							ZotHacks is a beginner-friendly hackathon where students with
							minimal computer science experience will learn to build their
							first CS project. Through ZotHacks, we introduce these students to
							the world of hackathons and web development by providing technical
							workshops, strong mentorship, and free food!
						</p>
					</div>
				</Container>
			</StickerPosition>
		</Container>
	);
};

export default Intro;
