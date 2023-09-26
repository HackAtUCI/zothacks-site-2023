"use client";

import Image from "next/image";

import styles from "./Footer.module.scss";

import Mail from "@/assets/icons/email.svg";
import Facebook from "@/assets/icons/facebook.png";
import Instagram from "@/assets/icons/instagram.png";
import Hack from "@/assets/icons/hack-logo.svg";
import TikTok from "@/assets/icons/tiktok.png";

type Social = {
	icon: any;
	link: string;
	alt: string;
	width: number;
	height: number;
};

const SOCIALS: Social[] = [
	{
		icon: Hack,
		link: "https://hack.ics.uci.edu/",
		alt: "Hack at UCI",
		width: 59,
		height: 59,
	},
	{
		icon: Mail,
		link: "mailto:hack@uci.edu",
		alt: "Mail",
		width: 59,
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
		width: 59,
		height: 59,
	},
	{
		icon: TikTok,
		link: "",
		alt: "TikTok",
		width: 59,
		height: 59,
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
