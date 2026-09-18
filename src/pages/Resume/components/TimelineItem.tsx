import type { ExperienceItem } from "../data/ResumeData";

interface ResumeTimelineItemProps {
	item: ExperienceItem;
}

const TimelineItem = ({ item }: ResumeTimelineItemProps) => {
	return (
		<li className='resume_timeline_item'>
			<div
				className='resume_timeline_item_marker'
				aria-hidden='true'
			/>
			<article className='resume_timeline_item_content'>
				<h3 className='resume_timeline_item_title'>{item.title}</h3>
				<p className='resume_timeline_item_company'>{item.company}</p>
				<time className='resume_timeline_item_period'>{item.period}</time>
				<ul className='resume_timeline_item_bullets'>
					{item.bullets.map((bullet, index) => (
						<li key={`${item.title}-${index}`}>{bullet}</li>
					))}
				</ul>
			</article>
		</li>
	);
};

export default TimelineItem;
