import SmartphoneIcon from "@mui/icons-material/Smartphone";
import CameraEnhanceOutlinedIcon from "@mui/icons-material/CameraEnhanceOutlined";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import "./Home.css";

interface WorkItem {
	title: string;
	description: string;
	icon: typeof SmartphoneIcon;
}

const workItems: WorkItem[] = [
	{
		title: "Web Development",
		description: "High-performance web applications.",
		icon: IntegrationInstructionsOutlinedIcon,
	},
	{
		title: "Mobile Development",
		description: "High-quality cross-platform applications.",
		icon: SmartphoneIcon,
	},
	{
		title: "Anime and Manga",
		description: "Recommendations are always welcomed.",
		icon: PaletteOutlinedIcon,
	},
	{
		title: "Photography",
		description: "Trying to graduate from novice to expert.",
		icon: CameraEnhanceOutlinedIcon,
	},
];

function Home() {
	return (
		<main className='home'>
			<header className='home_header'>
				<h1>About me</h1>
				<hr />
			</header>
			<section
				className='home_aboutme'
				aria-labelledby='about-me-title'>
				<h2
					id='about-me-title'
					className='sr-only'>
					About me
				</h2>
				<p>Hi there,</p>
				<p>
					I am Mayuresh Deshmukh, a seasoned Software Developer with close to
					half a decade of experience.
				</p>
				<p>
					I’m a versatile developer with proven expertise in frontend and
					backend development for web and mobile applications. I combine strong
					technical skills with clear communication, ownership, and a commitment
					to delivering high-quality, well-coordinated projects within set
					timelines.
				</p>
				<p>
					My experience includes building an Anime recommendation web app with
					ReactJS, Python, FastAPI, and MongoDB, as well as a cross-platform
					mobile app using React Native and TypeScript. Passionate about modern
					frontend development and staying ahead of industry trends, I focus on
					creating seamless user experiences while continuously learning and
					growing.
				</p>
				<p>
					Beyond technology, I am an avid sports enthusiast, particularly in
					football. I also enjoy video games like Valorant and proudly identify
					as a devoted anime fan and geek.
				</p>
				<p>
					I invite you to explore my portfolio and look forward to connecting
					with like-minded professionals and potential collaborators.
				</p>
			</section>
			<section
				className='home_work_overview'
				aria-labelledby='what-im-doing-title'>
				<div className='home_section_header'>
					<h2 id='what-im-doing-title'>What I'm Doing</h2>
				</div>
				<div className='home_work_overview_grid'>
					{workItems.map(({ title, description, icon: Icon }) => (
						<article
							className='home_work_overview_grid_card'
							key={title}>
							<Icon
								className='home_work_overview_grid_card_icon'
								aria-hidden='true'
							/>
							<div className='home_work_overview_grid_card_details'>
								<h3>{title}</h3>
								<p>{description}</p>
							</div>
						</article>
					))}
				</div>
			</section>
		</main>
	);
}

export default Home;
