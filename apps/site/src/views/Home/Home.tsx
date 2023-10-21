import Landing from "./sections/Landing/Landing";
import Intro from "./sections/Intro/Intro";
import FAQ from "./sections/FAQ/FAQ";

import StickerLayout from "./components/StickerLayout/StickerLayout";

import styles from "./Home.module.scss";

function Home() {
	return (
		<>
			<div className={styles.home}>
				<Landing />
				<Intro />
				{/* <Mentor /> */}
				<FAQ />
			</div>
		</>
	);
}

export default Home;
