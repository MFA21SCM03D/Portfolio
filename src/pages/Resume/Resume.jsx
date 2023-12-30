import React from 'react'
import './Resume.css'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

function Resume() {
  return (
    <main className="resume">
      <h1>Resume</h1>
      <hr/>
      <div className="resume_education">
        <div className="resume_education_indicator">
          <button><SchoolOutlinedIcon/></button>
          <h3>Education</h3>
        </div>
        <ul className="resume_education_detail">
          <li className="resume_education_detail_item">
            <h5 className='resume_education_detail_item_title'>Illinois Institute of Technology, Chicago</h5>
            <span>2021 - 2022</span>
            <p>Master of Science, Computer Science</p>
            <p>3.90 / 4.0 GPA</p>
          </li>
          <li className="resume_education_detail_item">
            <h5 className='resume_education_detail_item_title'>SavitriBai Phule University, Pune</h5>
            <span>2016 - 2020</span>
            <p>Bachelor of Engineering, Computer Science</p>
            <p>3.56 / 4.0 GPA</p>
          </li>
        </ul>
      </div>
      <div className="resume_experience">
        <div className="resume_experience_indicator">
          <button><WorkOutlineOutlinedIcon/></button>
          <h3>Experience</h3>
        </div>
          <ul className="resume_experience_detail">
            <li className="resume_experience_detail_item">
              <h5 className='resume_experience_detail_item_title'>Graduate Teaching Assistance</h5>
              <h5 className="resume_experience_detail_item_subtitle">Illinois Institute of Technology, Chicago</h5>
              <span>Jan 2021 - Dec 2022</span>
              <ul className='.resume_experience_detail_item_bullet'>
                <li className='resume_experience_detail_item_bullet_point'>Held 2 office hours a week to coach and guide students to fathom coursework and certain topic content. </li>
                <li className='resume_experience_detail_item_bullet_point'>Addressed student’s doubts, aided professors with 2 exam monitoring.</li>    
                <li className='resume_experience_detail_item_bullet_point'>Supervised 56 student Github repositories and conducted code reviews.</li>
              </ul>
            </li>
            <li className="resume_experience_detail_item">
              <h5 className='resume_experience_detail_item_title'>Frontend Developer</h5>
              <h5 className="resume_experience_detail_item_subtitle">Illinois Institute of Technology, Chicago</h5>
              <span>June 2020 - Jan 2021</span>
              <ul className='.resume_experience_detail_item_bullet'>
                <li className='resume_experience_detail_item_bullet_point'>
                  Managed and optimized three websites, implementing Bitbucket for version control, 
                  resulting in a 20% improvement in development efficiency and fostering enhanced collaboration among team members.
                </li>
                <li className='resume_experience_detail_item_bullet_point'>
                  Implemented proactive monthly data backups across on-premise and cloud platforms, 
                  bolstering data security and ensuring uninterrupted operations for a diverse dataset of 5TB.
                </li>
                <li className='resume_experience_detail_item_bullet_point'>
                  Maintained visually appealing and interactive high-performing websites with a strong focus 
                  on optimizing user experience, site speed, data accrual, and lead generation strategies.
                </li>    
                <li className='resume_experience_detail_item_bullet_point'>
                  Implementing agile/scrum methodology for code development in order to meet tight deadlines.
                </li>
                <li className='resume_experience_detail_item_bullet_point'>
                  Led collaboration with external organization managing Drupal technology, successfully guiding the team to resolve login path issues through innovative solutions.
                </li>
                <li className='resume_experience_detail_item_bullet_point'>
                  Collaborated closely with the supervisor to resolve login errors by rigorously troubleshooting and analyzing server files, 
                  leveraging RSA and AES encryption algorithms, resulting in prompt issue resolution and improved access control.
                </li>    
                <li className='resume_experience_detail_item_bullet_point'>
                  Revamped web UI interface, introducing innovative features, resulting in an 11% surge in web traffic and clicks for enhanced user engagement.
                </li>
              </ul>
            </li>
            <li className="resume_experience_detail_item">
              <h5 className='resume_experience_detail_item_title'>Frontend Developer</h5>
              <h5 className="resume_experience_detail_item_subtitle">TechR Bussiness Solutions, Pune</h5>
              <span>June 2019 - Nov 2020</span>
              <ul className='.resume_experience_detail_item_bullet'>
                <li className='resume_experience_detail_item_bullet_point'>
                  Designed and Developed an intuitive app in Java using Android Studio.
                </li>
                <li className='resume_experience_detail_item_bullet_point'>
                  Translated design requirements into interactive user friendly experience, resulting in a 25% surge in active user engagement.
                </li>    
                <li className='resume_experience_detail_item_bullet_point'>
                  Managed visually engaging and interactive high-performance mobile applications using Java, 
                  emphasizing the optimization of user experience, app speed, data accumulation, and lead generation strategies.
                </li>
                <li className='resume_experience_detail_item_bullet_point'>
                  Evaluated code to ensure that it is valid is properly structured, meets industry standards, and is compatible with browsers, devices, or operating systems.
                </li>
                <li className='resume_experience_detail_item_bullet_point'>
                  Implementing agile/scrum methodology for code development in order to meet tight deadlines.
                </li>    
                <li className='resume_experience_detail_item_bullet_point'>
                  Utilized REST API and HTTPS requests to extract vital data from JSON responses, facilitating streamlined information retrieval and enhancing data processing.
                </li>
                <li className='resume_experience_detail_item_bullet_point'>
                  Integrated Google Firebase for analytics and MongoDB for secure user data storage and authentication.
                </li>
              </ul>
            </li>
          </ul>
      </div>
    </main>
  )
}

export default Resume