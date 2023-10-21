"use client";

import { HeartSticker } from "@/components/Sticker/Stickers";

import styles from "./Landing.module.scss";

function Landing() {
	return (
		<div className={styles.landing}>
			<h1>ZotHacks 2023</h1>
			<p className="fs-2">November 4&ndash;5</p>
			<HeartSticker />
			{/* <ApplyButton /> */}
		</div>
	);
}

export default Landing;
