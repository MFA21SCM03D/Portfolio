import { useState } from "react";
import { Profile } from "../../assets";
import "./SidePanel.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

function SidePanel() {
	const [isSidePanelVisible, setIsSidePanelVisible] = useState(false);

	const toggleSidePanel = () => {
		setIsSidePanelVisible((previous) => !previous);
	};

	return (
		<aside className='sidepanel'>
			<button
				type='button'
				className='sidepanel_toggle'
				onClick={toggleSidePanel}
				aria-expanded={isSidePanelVisible}
				aria-controls='sidepanel-contact-info'
				aria-label={
					isSidePanelVisible
						? "Collapse contact information"
						: "Expand contact information"
				}>
				{isSidePanelVisible ? (
					<KeyboardArrowUpOutlinedIcon aria-hidden='true' />
				) : (
					<KeyboardArrowDownOutlinedIcon aria-hidden='true' />
				)}
			</button>
			<header className='sidepanel_profile'>
				<figure className='sidepanel_profile_image'>
					<img
						src={Profile}
						alt='Mayuresh Deshmukh'
						width='128'
						height='128'
						loading='eager'
						decoding='async'
					/>
				</figure>
				<div className='sidepanel_profile_content'>
					<h1 className='sidepanel_profile_title'>Mayuresh Deshmukh</h1>
					<p className='sidepanel_profile_job'>Software Developer</p>
				</div>
			</header>
			<div
				id='sidepanel-contact-info'
				className={`sidepanel_contact_wrapper ${
					isSidePanelVisible ? "is-visible" : ""
				}`}>
				<div className='sidepanel_divider' />
				<div className='sidepanel_info'>
					<div className='sidepanel_contact_item'>
						<a
							href='mailto:mayurdeshmukh2442@gmail.com'
							className='sidepanel_contact_icon'
							aria-label='Send email to Mayuresh Deshmukh'>
							<MailOutlineIcon aria-hidden='true' />
						</a>
						<div className='sidepanel_contact_details'>
							<span className='sidepanel_contact_label'>EMAIL</span>
							<a
								href='mailto:mayurdeshmukh2442@gmail.com'
								className='sidepanel_contact_value'>
								mayurdeshmukh2442@gmail.com
							</a>
						</div>
					</div>
					<div className='sidepanel_contact_item'>
						<a
							href='tel:+13127312752'
							className='sidepanel_contact_icon'
							aria-label='Call Mayuresh Deshmukh'>
							<SmartphoneIcon aria-hidden='true' />
						</a>
						<div className='sidepanel_contact_details'>
							<span className='sidepanel_contact_label'>PHONE</span>
							<a
								href='tel:+13127312752'
								className='sidepanel_contact_value'>
								+1 (312) 731-2752
							</a>
						</div>
					</div>
				</div>
				<nav
					className='sidepanel_socials'
					aria-label='Social media links'>
					<a
						href='https://www.linkedin.com/in/mayureshdeshmukh24'
						target='_blank'
						rel='noopener noreferrer'
						className='sidepanel_social_link'
						aria-label='LinkedIn profile'>
						<LinkedInIcon aria-hidden='true' />
					</a>
					<a
						href='https://www.instagram.com/mayurdeshmukh2442'
						target='_blank'
						rel='noopener noreferrer'
						className='sidepanel_social_link'
						aria-label='Instagram profile'>
						<InstagramIcon aria-hidden='true' />
					</a>
				</nav>
			</div>
		</aside>
	);
}

export default SidePanel;
