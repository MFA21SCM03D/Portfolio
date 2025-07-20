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
        I am Mayuresh Deshmukh a seasoned Software Developer, with close to half a decade of experience.
        <br /><br />
        I’m a versatile developer with proven expertise in frontend and backend development for web and mobile applications. I combine strong technical skills with clear communication, ownership, and a commitment to delivering high-quality, well-coordinated projects within set timelines. My experience includes building an Anime recommendation web app with ReactJS, Python, FastAPI, and MongoDB, and a cross-platform mobile app using React Native and TypeScript. Passionate about modern frontend development and staying ahead of industry trends, I focus on creating seamless user experiences while continuously learning and growing.
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
