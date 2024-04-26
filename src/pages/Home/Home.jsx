import React from 'react';
import './Home.css'
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import { CameraEnhanceOutlined} from '@mui/icons-material';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';

function Home() {
  return (
    <main className="home">
      <h1>About me</h1>
      <hr />
      <div className="home_aboutme_desc">
        <h3>Hi there,</h3>
        <br/>
        I am a Software Developer, graduated from the Illinois Institute of Technology, Chicago, achieving a stellar 3.90 GPA. 
        Currently seeking opportunities as a Software Engineer, I bring over 3 years of experience.
        <br /><br />
        Passionate about staying ahead of industry trends, I have contributed to diverse projects and demonstrate a commitment to continuous learning. 
        My tech repertoire includes proficiency in React, Nextjs, MySQL, Python, Java, HTML5, CSS3, JavaScript, TypeScript, Figma, Zeplin, GatsbyJS, Jira, and Git. 
        My professional journey has seen me delve into various aspects of software engineering, including a personal project—an Anime recommendation web app showcasing 
        my skills in Reactjs, Python, FastAPI, and MongoDB. While my preference leans towards Frontend Developer roles, I am open to exploring opportunities that align 
        with my skills and passion for crafting interactive and visually appealing applications.
        <br /><br />
        Currently I am working as a Software Engineer at Bloomintek where I led 3 projects and mentored a junior developer and led development of cross-platform Mobile 
        Application using React Native and also led the development of a crucial backend API using Java and Spring Boot. I performed testing and also managed version control for each of the applications.
        <br /><br />
        Beyond technology, I am an avid sports enthusiast, particularly in football, enjoy engaging in video games like Valorant, and proudly identify as a devoted anime fan and geek.
        I invite you to explore my portfolio and look forward to connecting with like-minded professionals and potential collaborators.
      </div>
      <div className="home_work_overview">
        <h3>What I'm Doing</h3>
        <div className="home_work_overview_grid">
          <div className="home_work_overview_grid_card">
            <IntegrationInstructionsOutlinedIcon className='home_work_overview_grid_card_icons'/>
            <div className="home_work_overview_grid_card_details">
              <h3>Web Development</h3>
              <p>High-quality development of sites at professional level.</p>
            </div>
          </div>
          <div className="home_work_overview_grid_card">
            <SmartphoneIcon className='home_work_overview_grid_card_icons'/>
            <div className="home_work_overview_grid_card_details">
              <h3>Mobile Development</h3>
              <p>High-quality development of applications for both iOS & Android.</p>
            </div>
          </div>
          <div className="home_work_overview_grid_card">
            <PaletteOutlinedIcon className="home_work_overview_grid_card_icons"/>
            <div className="home_work_overview_grid_card_details">
              <h3>Web Design</h3>
              <p>High-quality web design of sites and applications.</p>
            </div>
          </div>
          <div className="home_work_overview_grid_card">
            <CameraEnhanceOutlined className='home_work_overview_grid_card_icons'/>
            <div className="home_work_overview_grid_card_details">
              <h3>Photography</h3>
              <p>High-quality photos of any category at a professional level.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
