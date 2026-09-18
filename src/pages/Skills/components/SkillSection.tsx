import type { SkillCategory } from "../data/SkillsData";
import SkillItem from "../components/SkillsItem";

interface SkillSectionProps {
	category: SkillCategory;
}

const SkillSection = ({ category }: SkillSectionProps) => {
	return (
		<section className='skills_section'>
			<h2>{category.title}</h2>
			<div className='skills_grid'>
				{category.skills.map((skill) => (
					<SkillItem
						key={skill.name}
						skill={skill}
					/>
				))}
			</div>
		</section>
	);
};

export default SkillSection;
