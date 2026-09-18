import {
	CSS3,
	HTML5,
	JavaScript,
	Reactjs,
	TypeScript,
	TailwindCSS,
	Redux,
	MySQL,
	Postman,
	Python,
	Java,
	FastAPI,
	Figma,
	Zeplin,
	Storybook,
	Git,
	GitHub,
	Docker,
	Heroku,
	Jira,
	ESLint,
	Linux,
} from "../../../assets";

export interface Skill {
	name: string;
	icon: string;
}

export interface SkillCategory {
	title: string;
	skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
	{
		title: "Frontend",
		skills: [
			{ name: "CSS3", icon: CSS3 },
			{ name: "HTML5", icon: HTML5 },
			{ name: "JavaScript", icon: JavaScript },
			{ name: "ReactJS", icon: Reactjs },
			{ name: "TypeScript", icon: TypeScript },
			{ name: "Tailwind CSS", icon: TailwindCSS },
			{ name: "Redux", icon: Redux },
		],
	},
	{
		title: "Backend",
		skills: [
			{ name: "MySQL", icon: MySQL },
			{ name: "Python", icon: Python },
			{ name: "Java", icon: Java },
			{ name: "Fast API", icon: FastAPI },
			{ name: "Postman", icon: Postman },
		],
	},
	{
		title: "Design",
		skills: [
			{ name: "Figma", icon: Figma },
			{ name: "Zeplin", icon: Zeplin },
			{ name: "Storybook", icon: Storybook },
		],
	},
	{
		title: "Version Control",
		skills: [
			{ name: "Git", icon: Git },
			{ name: "GitHub", icon: GitHub },
		],
	},
	{
		title: "Software & Tools",
		skills: [
			{ name: "Linux", icon: Linux },
			{ name: "Docker", icon: Docker },
			{ name: "Heroku", icon: Heroku },
			{ name: "ESLint", icon: ESLint },
			{ name: "Jira", icon: Jira },
		],
	},
];
