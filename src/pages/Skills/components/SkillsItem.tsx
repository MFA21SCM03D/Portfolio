import type { Skill } from "../data/SkillsData";

interface SkillItemProps {
	skill: Skill;
}

const SkillItem = ({ skill }: SkillItemProps) => {
	return (
		<figure className='skills_item'>
			<img
				src={skill.icon}
				alt=''
				aria-hidden='true'
			/>
			<figcaption>{skill.name}</figcaption>
		</figure>
	);
};

export default SkillItem;
