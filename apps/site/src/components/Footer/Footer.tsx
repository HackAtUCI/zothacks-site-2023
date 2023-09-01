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
	marginRight: string;
};

const SOCIALS: Social[] = [
	{
		icon: Mail,
		link: "mailto:hack@uci.edu",
		alt: "Mail",
		width: 78,
		height: 78,
		marginRight: "25px",
	},
	{
		icon: Facebook,
		link: "https://www.facebook.com/UCI.Hack/",
		alt: "Facebook",
		width: 59,
		height: 59,
		marginRight: "16px",
	},
	{
		icon: Instagram,
		link: "https://www.instagram.com/hackatuci/",
		alt: "Instagram",
		width: 91,
		height: 91,
		marginRight: "16px",
	},
	{
		icon: Twitter,
		link: "https://www.twitter.com/HackUCI",
		alt: "Twitter",
		width: 64,
		height: 53,
		marginRight: "0px",
	},
];

export default function Footer() {
	return (
		<div className={styles.footer}>
			<p className={styles.text}>Made with &lt;3 in Irvine, CA - Hack @ UCI</p>
			<div className={styles.socials}>
				{SOCIALS.map(
					({ icon, link, alt, width, height, marginRight }: Social) => (
						<a
							key={link}
							href={link}
							target="_blank"
							style={{ marginRight: marginRight }}
						>
							<Image src={icon.src} alt={alt} width={width} height={height} />
						</a>
					),
				)}
			</div>
		</div>
	);
}
