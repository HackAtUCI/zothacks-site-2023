"use client";

import Image from "next/image";

import styles from "./Footer.module.scss";

import Mail from "@/assets/icons/email.svg";
import Facebook from "@/assets/icons/Facebook-Logo-Primary-min.svg";
import Instagram from "@/assets/icons/instagram.png";
import Hack from "@/assets/icons/hack-logo.svg";
import TikTok from "@/assets/icons/TikTok-Social-Icon-Circle-White.svg";

type Social = {
	icon: any;
	link: string;
	alt: string;
};

const SOCIALS: Social[] = [
	{
		icon: Hack,
		link: "https://hack.ics.uci.edu/",
		alt: "Hack at UCI logo that links to Hack at UCI's club website",
	},
	{
		icon: Mail,
		link: "mailto:hack@uci.edu",
		alt: "Mail icon that creates an email with Hack at UCI as sender",
	},
	{
		icon: Facebook,
		link: "https://www.facebook.com/UCI.Hack/",
		alt: "Facebook logo that links to Hack at UCI's Facebook",
	},
	{
		icon: Instagram,
		link: "https://www.instagram.com/hackatuci/",
		alt: "Instagram logo that links to Hack at UCI's Instagram",
	},
	{
		icon: TikTok,
		link: "https://www.tiktok.com/@hackatuci",
		alt: "TikTok logo that links to Hack at UCI's TikTok",
	},
];

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p className={styles.text}>Made with &lt;3 in Irvine, CA - Hack @ UCI</p>
			<div className="text-center">
				{SOCIALS.map(({ icon, link, alt }) => (
					<a key={link} href={link} target="_blank">
						<Image
							src={icon.src}
							alt={alt}
							width={45}
							height={45}
							className={styles.socials}
						/>
					</a>
				))}
			</div>
		</footer>
	);
}
