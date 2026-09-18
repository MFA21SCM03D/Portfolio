import "./Skills.css";
import { skillCategories } from "../Skills/data/SkillsData";
import SkillSection from "../Skills/components/SkillSection";

const Skills = () => {
	return (
		<main className='skills'>
			<header className='skills_header'>
				<h1>Tech Stack</h1>
				<hr />
			</header>
			{skillCategories.map((category) => (
				<SkillSection
					key={category.title}
					category={category}
				/>
			))}
		</main>
	);
};

export default Skills;
