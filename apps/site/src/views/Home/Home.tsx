"use client";

import Landing from "./sections/Landing/Landing";
import About from "./sections/About/About";
import Mentors from "./sections/Mentors/Mentors";
import Sponsors from "./sections/Sponsors/Sponsors";
import FAQ from "./sections/FAQ/FAQ";

import styles from "./Home.module.scss";

function Home() {
	return (
		<div className={styles.home}>
			<Landing />
			<About />
			<Mentors />
			<Sponsors />
			<FAQ />
		</div>
	);
}

export default Home;
