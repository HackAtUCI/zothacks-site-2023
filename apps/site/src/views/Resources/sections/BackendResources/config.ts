import flask_tutorial_tag from "@/assets/images/flask_tutorial_button.png";
import flask_documentation_tag from "@/assets/images/flask_documentation_button.png";
import flask_project_tag from "@/assets/images/flask_project_button.png";

const BackendResourcesList = [
	{
		stickyNoteColor: "#FFDAF7",
		title: "Flask",
		description:
			"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
		tapeOrientation: "left",
		tags: [
			{
				link: "https://hack.ics.uci.edu/",
				src: flask_tutorial_tag.src,
				alt: "Flask Tutorial Tag Link",
			},
			{
				link: "https://hack.ics.uci.edu/",
				src: flask_documentation_tag.src,
				alt: "Flask Documentation Tag Link",
			},
			{
				link: "https://hack.ics.uci.edu/",
				src: flask_project_tag.src,
				alt: "Flask Project Tag Link",
			},
		],
	},
	{
		stickyNoteColor: "#FFE7A9",
		title: "Flask",
		description:
			"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
		tapeOrientation: "right",
		tags: [
			{
				link: "https://hack.ics.uci.edu/",
				src: flask_tutorial_tag.src,
				alt: "Flask Tutorial Tag Link",
			},
			{
				link: "https://hack.ics.uci.edu/",
				src: flask_documentation_tag.src,
				alt: "Flask Documentation Tag Link",
			},
			{
				link: "https://hack.ics.uci.edu/",
				src: flask_project_tag.src,
				alt: "Flask Project Tag Link",
			},
		],
	},
];

export default BackendResourcesList;
