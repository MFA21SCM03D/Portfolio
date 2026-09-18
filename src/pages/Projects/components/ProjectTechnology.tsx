import type { Technology } from "../data/ProjectData";

interface ProjectTechnologyProps {
	technology: Technology;
}

const ProjectTechnology = ({ technology }: ProjectTechnologyProps) => {
	return (
		<div className='projects_card_technology'>
			<img
				src={technology.icon}
				alt=''
				aria-hidden='true'
			/>
			<span>{technology.name}</span>
		</div>
	);
};

export default ProjectTechnology;
