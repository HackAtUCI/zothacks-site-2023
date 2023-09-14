"use client";

import "./Landing.module.scss";
import Sticker from "@/components/Sticker";
import HackLogo from "@/assets/icons/hack.png";

export default function Landing() {
	return (
		<main>
			<h1>ZotHacks 2023</h1>
			<div style={{ marginTop: 100, position: "relative" }}>
				<Sticker imageSrc={HackLogo.src} alt="test" />
			</div>
		</main>
	);
}
