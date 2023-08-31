import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Footer.module.scss";

import Mail from "@/assets/icons/mail.svg";
import Facebook from "@/assets/icons/facebook.svg";
import Instagram from "@/assets/icons/insta.svg";
import Twitter from "@/assets/icons/twitter.svg";

const SOCIALS = [
	{
		icon: Mail,
		link: "mailto:hack@uci.edu",
		alt: "Mail",
	},
	{
		icon: Facebook,
		link: "https://www.facebook.com/UCI.Hack/",
		alt: "Facebook",
	},
	{
		icon: Instagram,
		link: "https://www.instagram.com/hackatuci/",
		alt: "Instagram",
	},
	{
		icon: Twitter,
		link: "https://www.twitter.com/HackUCI",
		alt: "Twitter",
	},
];

export default function Footer() {
	return (
		<div className={styles.footer}>
			<p className={styles.text}>Made with &lt;3 in Irvine, CA - Hack @ UCI</p>
			<div className={styles.socials}>
				{SOCIALS.map(({ icon, link, alt }) => (
					<a key={link} href={link} target="_blank">
						<img src={icon.src} alt={alt} />
					</a>
				))}
			</div>
		</div>
	);
}
