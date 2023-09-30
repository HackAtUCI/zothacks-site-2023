export interface tag {
	link: string;
	src: string;
	alt: string;
	className?: string;
}

export interface Backend_Group_Props {
	card: string | undefined;
	title: string | undefined;
	description: string | undefined;
	tagList: tag[] | undefined;
	tapeOrientation: string | undefined;
	className?: string | undefined;
}

export interface API_Group_Props {
	title: string;
	description: string;
	stickerSrc: string;
	tagSrc: string;
	tagLink: string;
	postItSrc: string;
}
