import Landing from "./sections/Landing/Landing";
import Intro from "./sections/Intro/Intro";
import Mentor from "./sections/Mentor/Mentor";
import Sponsors from "./sections/Sponsors/Sponsors";
import FAQ from "./sections/FAQ/FAQ";

import styles from "./page.module.scss";

function Home() {
	return (
		<>
			<StickerLayout />
			<div className={styles.home}>
				<Landing />
				<Intro />
				<Mentor />
				<Sponsors />
				<FAQ />
			</div>
		</>
	);
}

export default Home;
