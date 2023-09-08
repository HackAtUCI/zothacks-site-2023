"use client";

import Image from "next/image";

import styles from "./Footer.module.scss";

import Mail from "@/assets/icons/mail.png";
import Facebook from "@/assets/icons/facebook.png";
import Instagram from "@/assets/icons/insta.png";
import Hack from "@/assets/icons/hack.png";

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
		icon: Hack,
		link: "https://hack.ics.uci.edu/",
		alt: "Hack at UCI",
		width: 70,
		height: 70,
	},
];

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p className={styles.text}>Made with &lt;3 in Irvine, CA - Hack @ UCI</p>
			<div className="text-center">
				{SOCIALS.map(({ icon, link, alt, width, height }) => (
					<a key={link} href={link} target="_blank" className={styles.socials}>
						<Image src={icon.src} alt={alt} width={width} height={height} />
					</a>
				))}
			</div>
		</footer>
	);
}
