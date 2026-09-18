export interface EducationItem {
	institution: string;
	period: string;
	degree: string;
	gpa: string;
}

export interface ExperienceItem {
	title: string;
	company: string;
	period: string;
	bullets: string[];
}

export const education: EducationItem[] = [
	{
		institution: "Illinois Institute of Technology, Chicago",
		period: "2021 - 2022",
		degree: "Master of Science, Computer Science",
		gpa: "3.90 / 4.0 GPA",
	},
	{
		institution: "SavitriBai Phule University, Pune",
		period: "2016 - 2020",
		degree: "Bachelor of Engineering, Computer Science",
		gpa: "3.56 / 4.0 GPA",
	},
];

export const experience: ExperienceItem[] = [
	{
		title: "Full-stack Software Engineer",
		company: "Capgemini (Client: Discover)",
		period: "Aug 2024 - Jan 2026",
		bullets: [
			"Led modernization and migration of legacy applications from Java 8 to Java 21, with zero downtime, improving reliability and enabling faster delivery cycles by completing a project estimated at 6 months in only 2 weeks (≈600% acceleration).",
			"Improved API performance by 3% - 5% by eliminating bottlenecks and optimizing legacy code paths.",
			"Reduced deployment failures by 20% through automated CI/CD pipelines and validation gates.",
			"Built and deployed scalable, cloud-ready OpenShift services using Helm and CI/CD pipelines, reducing deployment failures by 20% and increasing delivery frequency.",
			"Implemented an automation framework with 400+ test suites, increasing regression coverage to 90% and cutting manual testing effort by 30%.",
			"Led RCAs for high-severity incidents, reducing MTTR by 30% via logging standards, metrics, dashboards, and proactive issue detection.",
			"Stabilized Autosys batch jobs, reducing job failure rates by 25%.",
			"Collaborated with cross-functional teams and business stakeholders to integrate downstream services, decrease release friction, and reduce dependencies by 15%, ensuring consistent delivery and business alignment.",
			"Mentored teammates and removed blockers, improving sprint throughput and reducing cycle time by 10–12%.",
			"Resolved security vulnerabilities and code hotspots, reducing risk exposure and improving application health scores.",
			"Participated actively in sprint planning, backlog refinement, daily stand-ups, and sprint retrospectives.",
		],
	},
	{
		title: "Full-stack Software Developer",
		company: "Bloomintek",
		period: "Oct 2023 - Aug 2024",
		bullets: [
			"Developed React and Spring Boot cross-platform applications, reducing feature delivery time by 20–25%.",
			"Implemented microservices architecture with Postgres, modular service layers, and comprehensive testing, improving modularity and enabling parallel development.",
			"Collaborated with stakeholders and design teams to translate Figma designs into responsive React components.",
			"Reviewed code for proper structure, compatibility, and adherence to standards, enhancing application performance.",
			"Mentored a frontend engineer intern working on a ReactJS-based website.",
			"Developed dynamic web applications using ReactJS, CSS, HTML, JavaScript, and Material UI with REST API integration.",
			"Worked in a fast-paced startup environment, meeting tight deadlines while maintaining high-quality deliverables and adopting current technologies.",
			"Implemented Zod for server-side data validation, TypeScript for client-side validation, and Cypress and Jest for UI testing.",
			"Translated Figma designs into modern, user-friendly interfaces and built and tested UI components in isolation using Storybook.",
			"Designed secure schemas and APIs with role-based access controls, reducing security findings by 40%.",
			"Automated backend jobs with Bash, crontab, and Autosys, cutting manual maintenance effort by 50%.",
			"Converted Figma designs into reusable ServiceNow components, reducing UI build time by 30%.",
			"Tested features in isolation using Storybook and unit tests with Cypress, decreasing UI defect rates by 15%.",
			"Mentored engineers and resolved blockers through weekly knowledge-sharing and progress sessions, improving team velocity.",
		],
	},
	{
		title: "Full-stack Developer",
		company: "Illinois Institute of Technology, Chicago",
		period: "June 2021 - Jan 2022",
		bullets: [
			"Managed and maintained three high-traffic websites, maintaining 99.9% uptime.",
			"Improved development efficiency and team collaboration with Bitbucket for version control.",
			"Implemented proactive monthly data backups across on-premise and cloud platforms, bolstering data security and supporting uninterrupted operations for a 5TB dataset.",
			"Maintained visually appealing and high-performing websites with a focus on user experience, site speed, data acquisition, and lead generation.",
			"Implemented Agile/Scrum methodologies for code development to meet tight deadlines.",
			"Led collaboration with an external organization managing Drupal technology, guiding the team in resolving login path issues through technical solutions.",
			"Collaborated closely with the supervisor to resolve login errors by troubleshooting server files and leveraging RSA and AES encryption algorithms.",
			"Redesigned the web UI, resulting in an 11% increase in web traffic and clicks.",
			"Improved user retention and satisfaction through intuitive design and enhanced navigation.",
			"Resolved encrypted external login issues, eliminating authentication defects and improving security.",
		],
	},
	{
		title: "Software Developer Lead",
		company: "TechR Business Solutions",
		period: "May 2019 - Nov 2020",
		bullets: [
			"Designed and delivered a native Android app, communicating with real users and stakeholders to gather insights and increasing active engagement by 25%.",
			"Implemented Google Maps proximity search, enabling nearby searches within a 5–10 km radius and improving location-based recommendation accuracy by ≈20%.",
			"Integrated Firebase Analytics for failure analysis, application insights, statistics, and metrics, enabling data-driven feature decisions.",
			"Used MongoDB for secure storage of real-time user data, reducing data-related issues and improving reliability.",
			"Consumed REST APIs with optimized JSON processing, reducing network latency impact by 10–15%.",
			"Built social features including chat, groups, and forums, increasing session duration by ≈12%.",
			"Designed modular UI components, improving UX consistency and reducing UI bugs by 18%.",
			"Led a team of 4 engineers, improving delivery predictability and reducing integration issues by 25%.",
			"Implemented notification workflows and real-time filters, increasing feature engagement.",
		],
	},
];

export const leadership: ExperienceItem[] = [
	{
		title: "Technical Graduate Assistant",
		company: "Illinois Institute of Technology, Chicago",
		period: "Jan 2022 - Dec 2022",
		bullets: [
			"Mentored 50+ students per semester through structured office hours and individual sessions, resolving technical queries and issues.",
			"Conducted bi-weekly office hours and one-on-one sessions, improving student completion rates and reducing doubt cycles.",
			"Supervised exams and co-coordinated with faculty, ensuring fair and consistent assessment execution.",
			"Supported international students across multiple time zones, increasing accessibility and engagement.",
			"Provided hands-on debugging and concept guidance, improving average student performance.",
		],
	},
];
