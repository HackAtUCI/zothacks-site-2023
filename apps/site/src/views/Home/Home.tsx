"use client";

import Landing from "./sections/Landing/Landing";
import About from "./sections/About/About";
import Mentors from "./sections/Mentors/Mentors";
import Sponsors from "./sections/Sponsors/Sponsors";
import FAQ from "./sections/FAQ/FAQ";

import StickerLayout from "./components/StickerLayout/StickerLayout";

import styles from "./Home.module.scss";

function Home() {
	return (
		<StickerLayout>
			<div className={styles.home}>
				<Landing />
				<About />
				<Mentors />
				<Sponsors />
				<FAQ />
			</div>
		</StickerLayout>
	);
}

export default Home;
