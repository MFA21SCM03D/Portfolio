import React from 'react'
import './Resume.css'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

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
              <h5 className='resume_experience_detail_item_title'>FullStack Software Engineer</h5>
              <h5 className="resume_experience_detail_item_subtitle">Discover</h5>
              <span>Aug 2024 - Jan 2026</span>
              <ul className='.resume_experience_detail_item_bullet'>
                <li className='resume_experience_detail_item_bullet_point'>Led modernization and migration of legacy applications from Java 8 to Java 21, with zero downtime, improving reliability and enabling faster delivery cycles by completing a project estimated at 6 months in only 2 weeks (≈600% acceleration).</li>
                <li className='resume_experience_detail_item_bullet_point'>Improved API performance by 3% - 5% by eliminating bottlenecks and optimizing legacy code paths.</li>    
                <li className='resume_experience_detail_item_bullet_point'>Reduced deployment failures by 20% through automated CI/CD pipelines and validation gates.</li>
                <li className='resume_experience_detail_item_bullet_point'>Built and deployed scalable, cloud ready OpenShift services  using Helm and CI/CD pipeline,  reducing deployment failures by 20% and increasing delivery frequency.</li>
                <li className='resume_experience_detail_item_bullet_point'>Implemented automation framework with 400+ test suites, increasing regression coverage to 90% and cutting manual testing effort by 30%.</li>
                <li className='resume_experience_detail_item_bullet_point'>Led RCAs for high-severity incidents, reducing MTTR by 30% via logging standards, metrics, dashboards, and proactive issue detection.</li>
                <li className='resume_experience_detail_item_bullet_point'>Stabilized Autosys batch jobs, reducing job failure rates by 25%.</li>
                <li className='resume_experience_detail_item_bullet_point'>Collaborated with cross-functional teams and business stakeholders to integrate downstream services, decrease release friction, reduce dependency by 15% , ensuring consistent delivery and business alignment.</li>
                <li className='resume_experience_detail_item_bullet_point'>Mentored teammates removed blockers, improving sprint throughput and reducing cycle time by 10–12% and increasing engagement by 25%.</li>
                <li className='resume_experience_detail_item_bullet_point'>Resolved security vulnerabilities and code hotspots, reducing risk exposure and improving application health scores.</li>
                <li className='resume_experience_detail_item_bullet_point'>Participated actively in sprint planning, backlog refinement, daily stand-ups, and sprint retrospectives.</li>
              </ul>
            </li>
            <li className="resume_experience_detail_item">
              <h5 className='resume_experience_detail_item_title'>FullStack Software Developer</h5>
              <h5 className="resume_experience_detail_item_subtitle">Bloomintek</h5>
              <span>Oct 2023 - Aug 2024</span>
              <ul className='.resume_experience_detail_item_bullet'>
                <li className='resume_experience_detail_item_bullet_point'>Developed acomplete cross-platform mobile application using React Native, TypeScript and Material UI which utilized REST API requests and responses.</li>
                <li className='resume_experience_detail_item_bullet_point'>Implemented JWT for secure authentication, ensuring robust frontend security and validation.</li>    
                <li className='resume_experience_detail_item_bullet_point'>Collaborated with stakeholders and design team and seamlessly translating Figma designs to responsive React components.</li>
                <li className='resume_experience_detail_item_bullet_point'>Reviewed code for proper structure, compatibility, and adherence to standards, enhancing performance.</li>
                <li className='resume_experience_detail_item_bullet_point'>Mentored frontend engineer intern working on a website based on ReactJS.</li>
                <li className='resume_experience_detail_item_bullet_point'>Developed a dynamic web application using ReactJS, CSS, HTML, JavaScript, and Material UI which utilized REST API.</li>
                <li className='resume_experience_detail_item_bullet_point'>Worked in a fast paced start-up environment meeting tight deadlines with high quality deliverables and utilizing current technological trends.</li>
                <li className='resume_experience_detail_item_bullet_point'>Implemented Zod for server side data validation, TypeScript for client side validation and Cypress and Jest for testing the UI.</li>
                <li className='resume_experience_detail_item_bullet_point'>Translated Figma design into user friendly modern UI and built and tested each UI component in isolation using StoryBook.</li>
              </ul>
            </li>
            <li className="resume_experience_detail_item">
              <h5 className='resume_experience_detail_item_title'>FrontEnd Developer</h5>
              <h5 className="resume_experience_detail_item_subtitle">Illinois Institute of Technology, Chicago</h5>
              <span>June 2021 - Jan 2022</span>
              <ul className='.resume_experience_detail_item_bullet'>
                <li className='resume_experience_detail_item_bullet_point'>
                  Utilized React.js, TypeScript, HTML, and CSS to create responsive, user-friendly interfaces.
                </li>
                <li className='resume_experience_detail_item_bullet_point'>
                  Improved development efficiency and team collaboration with Bitbucket for version control.
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
                  Redesigned the web UI resulting in an 11% increase in web traffic and clicks.
                </li>
                <li className='resume_experience_detail_item_bullet_point'>
                  Improveduser retention and satisfaction through intuitive design and enhanced navigation.
                </li>
              </ul>
            </li>
            <li className="resume_experience_detail_item">
              <h5 className='resume_experience_detail_item_title'>Software Developer Lead</h5>
              <h5 className="resume_experience_detail_item_subtitle">TechR Bussiness Solutions</h5>
              <span>June 2019 - Nov 2020</span>
              <ul className='.resume_experience_detail_item_bullet'>
                <li className='resume_experience_detail_item_bullet_point'>
                  Developed a native android app that allowed its users to be well versed with essential aspects of their neighborhood 
                  - Hospitals, Parks, Public Transport Options, etc using Android Studio.
                </li>
                <li className='resume_experience_detail_item_bullet_point'>
                  Collaborated with the design team to build interfaces that were high performing and aesthetic.
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
                  Itegrated REST API and HTTPS requests to extract vital data from JSON responses, facilitating streamlined information retrieval and enhancing data processing.
                </li>
                <li className='resume_experience_detail_item_bullet_point'>
                  Integrated Tableau for analytics and MongoDB for secure user data storage and authentication.
                </li>
              </ul>
            </li>
          </ul>
      </div>
      <div className="resume_experience">
        <div className="resume_experience_indicator">
          <button><MilitaryTechIcon/></button>
          <h3>Leadership & Mentorship</h3>
        </div>
        <ul className="resume_experience_detail">
           <li className="resume_experience_detail_item">
                <h5 className='resume_experience_detail_item_title'>Graduate Teaching Assistance</h5>
                <h5 className="resume_experience_detail_item_subtitle">Illinois Institute of Technology, Chicago</h5>
                <span>Jan 2022 - Dec 2022</span>
            <ul className='.resume_experience_detail_item_bullet'>
              <li className='resume_experience_detail_item_bullet_point'>Mentored 50+ students per semester through structured office hours and individual sessions resolving queries and issues.</li>
              <li className='resume_experience_detail_item_bullet_point'>Conducted bi-weekly office hours, engaging with students one on one, improving student completion rates and reducing doubt cycles.</li>
              <li className='resume_experience_detail_item_bullet_point'>Supervised exams and co-coordinated with faculty, ensuring fairness and consistent assessment execution.</li>
              <li className='resume_experience_detail_item_bullet_point'>Supported international students across multiple time zones, increasing accessibility and engagement.</li>
              <li className='resume_experience_detail_item_bullet_point'>Provided hands-on debugging and concept guidance, improving average student performance.</li>
            </ul>
           </li>
        </ul>
      </div>
    </main>
  )
}

export default Resume
