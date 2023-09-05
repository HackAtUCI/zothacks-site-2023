import Image from "next/image";

import styles from "./Footer.module.scss";

import Mail from "@/assets/icons/mail.svg";
import Facebook from "@/assets/icons/facebook.svg";
import Instagram from "@/assets/icons/insta.svg";
import Twitter from "@/assets/icons/twitter.svg";

type Social = {
	icon: any;
	link: string;
	alt: string;
	width: number;
	height: number;
};

const SOCIALS: Social[] = [
	{
		icon: Mail,
		link: "mailto:hack@uci.edu",
		alt: "Mail",
		width: 79,
		height: 59,
	},
	{
		icon: Facebook,
		link: "https://www.facebook.com/UCI.Hack/",
		alt: "Facebook",
		width: 59,
		height: 59,
	},
	{
		icon: Instagram,
		link: "https://www.instagram.com/hackatuci/",
		alt: "Instagram",
		width: 69,
		height: 72,
	},
	{
		icon: Twitter,
		link: "https://www.twitter.com/HackUCI",
		alt: "Twitter",
		width: 64,
		height: 53,
	},
];

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p className={styles.text}>Made with &lt;3 in Irvine, CA - Hack @ UCI</p>
			<div className={styles.socials}>
				{SOCIALS.map(({ icon, link, alt, width, height }: Social) => (
					<a key={link} href={link} target="_blank">
						<Image src={icon.src} alt={alt} width={width} height={height} />
					</a>
				))}
			</div>
		</footer>
	);
}
