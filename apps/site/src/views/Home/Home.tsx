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
			<div className={styles.home}>
				<StickerLayout />
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
