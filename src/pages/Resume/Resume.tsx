import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

import "./Resume.css";
import SectionHeader from "./components/SectionHeader";
import { education, experience, leadership } from "./data/ResumeData";
import TimeLine from "./components/TimeLine";

const Resume = () => {
	return (
		<main className='resume'>
			<header className='resume_header'>
				<h1>Resume</h1>
				<hr />
			</header>
			<section
				className='resume_section'
				aria-labelledby='education-title'>
				<div id='education-title'>
					<SectionHeader
						icon={SchoolOutlinedIcon}
						title='Education'
					/>
				</div>
				<ol className='resume_timeline'>
					{education.map((item) => (
						<li
							className='resume_timeline_item'
							key={item.institution}>
							<div
								className='resume_timeline_item_marker'
								aria-hidden='true'
							/>
							<article className='resume_timeline_item_content'>
								<h3 className='resume_timeline_item_title'>
									{item.institution}
								</h3>
								<time className='resume_timeline_item_period'>
									{item.period}
								</time>
								<p>{item.degree}</p>
								<p>{item.gpa}</p>
							</article>
						</li>
					))}
				</ol>
			</section>
			<section
				className='resume_section'
				aria-labelledby='experience-title'>
				<div id='experience-title'>
					<SectionHeader
						icon={WorkOutlineOutlinedIcon}
						title='Experience'
					/>
				</div>
				<TimeLine items={experience} />
			</section>
			<section
				className='resume_section'
				aria-labelledby='leadership-title'>
				<div id='leadership-title'>
					<SectionHeader
						icon={MilitaryTechIcon}
						title='Leadership & Mentorship'
					/>
				</div>
				<TimeLine items={leadership} />
			</section>
		</main>
	);
};

export default Resume;
