import Landing from "./sections/Landing/Landing";
import Intro from "./sections/Intro/Intro";
import Mentor from "./sections/Mentor/Mentor";
import Sponsors from "./sections/Sponsors/Sponsors";
import FAQ from "./sections/FAQ/FAQ";

import styles from "./Home.module.scss";

function Home() {
	return (
		<>
			<div className={styles.home}>
				<Landing />
				<Intro />
				<Mentor />
				<FAQ />
			</div>
		</>
	);
}

export default Home;
