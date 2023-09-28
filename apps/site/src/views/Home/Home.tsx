"use client";

import Landing from "./sections/Landing/Landing";
import Intro from "./sections/Intro/Intro";
import Mentor from "./sections/Mentor/Mentor";
import Sponsors from "./sections/Sponsors/Sponsors";
import FAQ from "./sections/FAQ/FAQ";

import StickerLayout from "./components/StickerLayout/StickerLayout";

import styles from "./Home.module.scss";

function Home() {
	return (
		<>
			<StickerLayout />
			<div className={styles.home}>
				<Landing />
				<About />
				<Mentors />
				<Sponsors />
				<FAQ />
			</div>
		</>
	);
}

export default Home;
