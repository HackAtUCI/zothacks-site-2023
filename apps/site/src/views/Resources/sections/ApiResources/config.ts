import google_cloud_sticker from "@/assets/icons/google-cloud-logo.png";
import twitter_sticker from "@/assets/icons/twitter-logo.png";
import spotify_sticker from "@/assets/icons/spotify-logo.png";
import api_tag from "@/assets/images/api-reference-tag.png";

const ApiResourcesList = [
	{
		title: "Google Cloud API",
		description:
			"API that allows users to access Google services such as storage access and machine-learning",
		stickerSrc: google_cloud_sticker.src,
		tagSrc: api_tag.src,
		tagLink: "https://hack.ics.uci.edu/",
		stickyNoteColor: "#FFFFA9",
	},
	{
		title: "Twitter API",
		description:
			"API that retrieves data on tweets, direct messages, trends, users, and many more of Twitter's features",
		stickerSrc: twitter_sticker.src,
		tagSrc: api_tag.src,
		tagLink: "https://hack.ics.uci.edu/",
		stickyNoteColor: "#DFFFFD",
	},
	{
		title: "Spotify API",
		description:
			"API that retrieves data on Spotify music, playlists, artists, users for your software applications",
		stickerSrc: spotify_sticker.src,
		tagSrc: api_tag.src,
		tagLink: "https://hack.ics.uci.edu/",
		stickyNoteColor: "#D8FFA6",
	},
];

export default ApiResourcesList;
