import { PropsWithChildren } from "react";
import Button from "react-bootstrap/Button";

import styles from "./BookmarkLink.module.scss";

interface BookmarkLinkProps {
	className?: string;
	href: string;
	props: any;
}

export default function BookmarkLink({
	className,
	href,
	children,
	...props
}: PropsWithChildren<BookmarkLinkProps>) {
	return (
		<Button
			className={styles.bookmarkLink + " " + className}
			variant=""
			href={href}
			{...props}
		>
			{children}
		</Button>
	);
}
