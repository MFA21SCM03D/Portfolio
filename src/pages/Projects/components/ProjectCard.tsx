import type { Project } from "../data/ProjectData";
import ProjectTechnology from "./ProjectTechnology";

interface ProjectCardProps {
	project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<article className='projects_card'>
			<a
				href={project.githubUrl}
				target='_blank'
				rel='noopener noreferrer'
				className='projects_card_link'
				aria-label={`${project.title} on GitHub`}>
				<div className='projects_card_content'>
					<div className='projects_card_info'>
						<h2>{project.title}</h2>
						<p className='projects_card_category'>{project.category}</p>
						<p className='projects_card_description'>{project.description}</p>
					</div>
					<div className='projects_card_technologies'>
						{project.technologies.map((technology) => (
							<ProjectTechnology
								key={technology.name}
								technology={technology}
							/>
						))}
					</div>
				</div>
			</a>
		</article>
	);
};

export default ProjectCard;
