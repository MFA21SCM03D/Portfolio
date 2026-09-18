import type { SvgIconComponent } from "@mui/icons-material";

interface ResumeSectionHeaderProps {
	icon: SvgIconComponent;
	title: string;
}

const SectionHeader = ({ icon: Icon, title }: ResumeSectionHeaderProps) => {
	return (
		<div className='resume_section_header'>
			<div
				className='resume_section_icon'
				aria-hidden='true'>
				<Icon />
			</div>
			<h2>{title}</h2>
		</div>
	);
};

export default SectionHeader;
