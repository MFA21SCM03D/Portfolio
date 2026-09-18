import type { ExperienceItem } from "../data/ResumeData";
import TimelineItem from "./TimelineItem";

interface ResumeTimelineProps {
	items: ExperienceItem[];
}

const ResumeTimeline = ({ items }: ResumeTimelineProps) => {
	return (
		<ol className='resume_timeline'>
			{items.map((item) => (
				<TimelineItem
					key={`${item.title}-${item.company}`}
					item={item}
				/>
			))}
		</ol>
	);
};

export default ResumeTimeline;
