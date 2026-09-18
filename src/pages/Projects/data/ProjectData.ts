import {
	AndroidStudio,
	FastAPI,
	Firebase,
	Flutter,
	Java,
	MongoDB,
	Postman,
	Python,
	Reactjs,
	TypeScript,
} from "../../../assets";

export interface Technology {
	name: string;
	icon: string;
}

export interface Project {
	title: string;
	category: string;
	description: string;
	githubUrl: string;
	technologies: Technology[];
}

export const projects: Project[] = [
	{
		title: "Anime Recommendation",
		category: "Recommendation System",
		description:
			"Built a Python-based recommendation system for anime, enhancing user experience and content discovery.",
		githubUrl: "https://github.com/MFA21SCM03D/AnimeRecommendation",
		technologies: [{ name: "Python", icon: Python }],
	},
	{
		title: "Anime Database API",
		category: "API Development",
		description:
			"Developed and deployed a powerful Anime API using FastAPI and MongoDB, with comprehensive testing through Postman.",
		githubUrl: "https://github.com/MFA21SCM03D/AnimeRecommendationAPI",
		technologies: [
			{ name: "Python", icon: Python },
			{ name: "FastAPI", icon: FastAPI },
			{ name: "MongoDB", icon: MongoDB },
			{ name: "Postman", icon: Postman },
		],
	},
	{
		title: "AnimeSuggest",
		category: "Web Application",
		description:
			"ReactJS web app, optimizing user satisfaction through responsive UI, API integration, and MongoDB for enhanced functionality.",
		githubUrl: "https://github.com/MFA21SCM03D/AnimeRecommendationWebApp",
		technologies: [
			{ name: "React", icon: Reactjs },
			{ name: "TypeScript", icon: TypeScript },
			{ name: "MongoDB", icon: MongoDB },
		],
	},
	{
		title: "Punekar",
		category: "Mobile Application",
		description:
			"Led agile Android app development, implemented UX, integrated Firebase, and MongoDB for analytics and secure data storage.",
		githubUrl: "https://github.com/MFA21SCM03D/Punekar",
		technologies: [
			{ name: "Android", icon: AndroidStudio },
			{ name: "Firebase", icon: Firebase },
			{ name: "Java", icon: Java },
			{ name: "MongoDB", icon: MongoDB },
		],
	},
	{
		title: "Health Monitoring App",
		category: "Mobile Application",
		description:
			"Enabled location-based hospital suggestions, secured sensitive user data with Firebase, and implemented medication alerts for enhanced health app functionality.",
		githubUrl: "https://github.com/MFA21SCM03D/HealthCare",
		technologies: [
			{ name: "Android", icon: AndroidStudio },
			{ name: "Firebase", icon: Firebase },
			{ name: "Java", icon: Java },
		],
	},
	{
		title: "The Ultimate Pokedex",
		category: "Mobile Application",
		description:
			"Developed an efficient Pokedex Flutter app utilizing the Pokemon API, providing a user-friendly grid and detailed card views for seamless exploration of Pokemon data.",
		githubUrl: "https://github.com/MFA21SCM03D/Pokedex",
		technologies: [{ name: "Flutter", icon: Flutter }],
	},
];
