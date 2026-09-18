import "./Projects.css";
import { projects } from "../Projects/data/ProjectData";
import ProjectCard from "../Projects/components/ProjectCard";

const Projects = () => {
	return (
		<main className='projects'>
			<header className='projects_header'>
				<h1>Projects</h1>
				<hr />
			</header>
			<section
				className='projects_grid'
				aria-label='Projects portfolio'>
				{projects.map((project) => (
					<ProjectCard
						key={project.title}
						project={project}
					/>
				))}
			</section>
		</main>
	);
};

export default Projects;
