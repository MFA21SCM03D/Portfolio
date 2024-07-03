import React, { useEffect, useState } from 'react'
import {Profile} from "../../assets"
import './SidePanel.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutLine from '@mui/icons-material/MailOutline';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

function SidePanel() {
    const [isSidepanelVisible, setIsSidepanelVisibile] = useState(false)
    const toggleSidepanel = () => {
        setIsSidepanelVisibile(!isSidepanelVisible)
    }

    useEffect(() => {
      if(window.innerWidth >= 1025){
        setIsSidepanelVisibile(true)
      }
}, [])
    

  return (
        <div className="sidepanel">
            <button className="sidepanel_updownkey" onClick={toggleSidepanel}>
                {
                    isSidepanelVisible ? <KeyboardArrowUpOutlinedIcon/> : <KeyboardArrowDownOutlinedIcon/>
                }
            </button>
            <div className="sidepanel_profile">
                <figure className="sidepanel_profile_img">
                    <img src={Profile} alt="Mayuresh Deshmukh" width= "80" />
                </figure>
                <div>
                    <h2 className="sidepanel_profile_title">Mayuresh Deshmukh</h2>
                    <h5 className="sidepanel_profile_job">Software Developer</h5>
                </div>
            </div>                    
            
            {isSidepanelVisible && (
                <>
                    <hr/>
                    <div className="sidepanel_info">
                        <div className="sidepanel_info_email">
                            <a href="mailto:mdeshmukh1@hawk.iit.edu">
                                <button className="sidepanel_info_email_btn"><MailOutLine/></button>
                            </a>
                            <div className="sidepanel_info_email_details">
                                <p className='sidepanel_info_email_details_label'>EMAIL</p>
                                <a href='mailto:mdeshmukh1@hawk.iit.edu'>mdeshmukh1@hawk.iit.edu</a>
                            </div>
                        </div>
                        <div className="sidepanel_info_phone">
                            <a href='tel:+13127312752'>
                                <button className="sidepanel_info_phone_btn"><SmartphoneIcon/></button>
                            </a>
                            <div className="sidepanel_info_phone_details">
                                <p className='sidepanel_info_phone_details_label'>PHONE</p>
                                <a href='tel:+13127312752'>+1 (312) 731-2752</a>
                            </div>
                        </div>
                        <div className="sidepanel_info_socials">
                            <a href="https://www.linkedin.com/in/mayureshdeshmukh24" target='_blank' rel='noopener noreferrer'><LinkedInIcon className="sidepanel_info_socials_icon"/></a>
                            <a href="https://www.instagram.com/mayurdeshmukh2442" target='_blank' rel='noopener noreferrer'><InstagramIcon className="sidepanel_info_socials_icon"/></a>                  
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default SidePanel
