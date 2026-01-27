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
              <h5 className='resume_experience_detail_item_title'>Full-stack Software Engineer</h5>
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
              <h5 className='resume_experience_detail_item_title'>Full-stack Software Developer</h5>
              <h5 className="resume_experience_detail_item_subtitle">Bloomintek</h5>
              <span>Oct 2023 - Aug 2024</span>
              <ul className='.resume_experience_detail_item_bullet'>
                <li className='resume_experience_detail_item_bullet_point'>Developed React,  Spring Boot cross-platform applications,  reducing feature delivery time by 20–25%.</li>
                <li className='resume_experience_detail_item_bullet_point'>Implemented microservices architecture with Postgres, modular service layers and comprehensive testing, improving modularity and enabling parallel development.</li>    
                <li className='resume_experience_detail_item_bullet_point'>Collaborated with stakeholders and design team and seamlessly translating Figma designs to responsive React components.</li>
                <li className='resume_experience_detail_item_bullet_point'>Reviewed code for proper structure, compatibility, and adherence to standards, enhancing performance.</li>
                <li className='resume_experience_detail_item_bullet_point'>Mentored frontend engineer intern working on a website based on ReactJS.</li>
                <li className='resume_experience_detail_item_bullet_point'>Developed a dynamic web application using ReactJS, CSS, HTML, JavaScript, and Material UI which utilized REST API.</li>
                <li className='resume_experience_detail_item_bullet_point'>Worked in a fast paced start-up environment meeting tight deadlines with high quality deliverables and utilizing current technological trends.</li>
                <li className='resume_experience_detail_item_bullet_point'>Implemented Zod for server side data validation, TypeScript for client side validation and Cypress and Jest for testing the UI.</li>
                <li className='resume_experience_detail_item_bullet_point'>Translated Figma design into user friendly modern UI and built and tested each UI component in isolation using StoryBook.</li>
                <li className='resume_experience_detail_item_bullet_point'>Designed secure schemas and APIs with role-based access controls, reducing security findings by 40%.</li>
                <li className='resume_experience_detail_item_bullet_point'>Automated backend jobs with bash, crontab, and Autosys, cutting manual maintenance effort by 50%.</li>
                <li className='resume_experience_detail_item_bullet_point'>Converted Figma designs into reusable ServiceNow components, reducing UI build time by 30%.</li>
                <li className='resume_experience_detail_item_bullet_point'>Tested features in isolation using StoryBook and with unit tests using Cypress, decreasing UI defect rate by 15%.</li>
                <li className='resume_experience_detail_item_bullet_point'>Mentored engineers and resolved blockers, scheduled a call weekly for updates, improving team velocity and knowledge sharing.</li>
              </ul>
            </li>
            <li className="resume_experience_detail_item">
              <h5 className='resume_experience_detail_item_title'>FullStack Developer</h5>
              <h5 className="resume_experience_detail_item_subtitle">Illinois Institute of Technology, Chicago</h5>
              <span>June 2021 - Jan 2022</span>
              <ul className='.resume_experience_detail_item_bullet'>
                <li className='resume_experience_detail_item_bullet_point'>Managed and maintained three high-traffic websites, maintaining 99.9% uptime.</li>
                <li className='resume_experience_detail_item_bullet_point'>Improved development efficiency and team collaboration with Bitbucket for version control.</li>
                <li className='resume_experience_detail_item_bullet_point'>Implemented proactive monthly data backups across on-premise and cloud platforms, bolstering data security and ensuring uninterrupted operations for a diverse dataset of 5TB.</li>
                <li className='resume_experience_detail_item_bullet_point'>Maintained visually appealing and interactive high-performing websites with a strong focus on optimizing user experience, site speed, data accrual, and lead generation strategies.</li>    
                <li className='resume_experience_detail_item_bullet_point'>Implementing agile/scrum methodology for code development in order to meet tight deadlines.</li>
                <li className='resume_experience_detail_item_bullet_point'>Led collaboration with external organization managing Drupal technology, successfully guiding the team to resolve login path issues through innovative solutions.</li>
                <li className='resume_experience_detail_item_bullet_point'>Collaborated closely with the supervisor to resolve login errors by rigorously troubleshooting and analyzing server files, leveraging RSA and AES encryption algorithms, resulting in prompt issue resolution and improved access control.</li>    
                <li className='resume_experience_detail_item_bullet_point'>Redesigned the web UI resulting in an 11% increase in web traffic and clicks.</li>
                <li className='resume_experience_detail_item_bullet_point'>Improved user retention and satisfaction through intuitive design and enhanced navigation.</li>
                <li className='resume_experience_detail_item_bullet_point'>Resolved encrypted external login issues, eliminating authentication defects and improving security.</li>
                <li className='resume_experience_detail_item_bullet_point'>Implemented hybrid backup strategies supporting 5TB, reducing recovery time and risk.</li>
                <li className='resume_experience_detail_item_bullet_point'>Revamped UI, resulting in an 11% increase in traffic, page views, and engagement.</li>
              </ul>
            </li>
            <li className="resume_experience_detail_item">
              <h5 className='resume_experience_detail_item_title'>Software Developer Lead</h5>
              <h5 className="resume_experience_detail_item_subtitle">TechR Bussiness Solutions</h5>
              <span>May 2019 - Nov 2020</span>
              <ul className='.resume_experience_detail_item_bullet'>
                <li className='resume_experience_detail_item_bullet_point'>Designed and delivered a native Android app, communicated with real-end users and stakeholders to get insights, increasing active engagement by 25%.</li>
                <li className='resume_experience_detail_item_bullet_point'>Implemented Google Maps proximity search, enabling nearby searches within 5 - 10km radius improving location-based recommendation accuracy by ≈20%.</li>    
                <li className='resume_experience_detail_item_bullet_point'>Integrated Firebase Analytics for failure analysis, application insights and statistics and metrics, increasing event visibility and enabling data-driven feature decisions.</li>
                <li className='resume_experience_detail_item_bullet_point'>Used MongoDB for secure storage  to securely store user real-time data, reducing data-related issues and improving reliability.</li>
                <li className='resume_experience_detail_item_bullet_point'>Consumed REST APIs with optimized JSON processing, reducing network latency impact by 10–15%.</li>    
                <li className='resume_experience_detail_item_bullet_point'>Built social features (chat, groups, forums) building a collaborative and engaging community within, increasing session duration by ≈12%.</li>
                <li className='resume_experience_detail_item_bullet_point'>Designed modular UI components, improving UX consistency and reducing UI bugs by 18%.</li>
                <li className='resume_experience_detail_item_bullet_point'>Led a team of 4 engineers, improving delivery predictability and reducing integration issues by 25%.</li>
                <li className='resume_experience_detail_item_bullet_point'>Implemented notification workflows and real-time filters, increasing feature engagement.</li>
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
                <h5 className='resume_experience_detail_item_title'>Technical Graduate Assistant</h5>
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
