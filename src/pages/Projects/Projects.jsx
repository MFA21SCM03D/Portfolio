import React from 'react'
import './Projects.css'
import { Reactjs, TypeScript, Postman, Python, Java, FastAPI, Flutter, AndroidStudio, Firebase, MongoDB} from '../../assets'

function Projects() {
  return (
    <main className="projects">
      <h1>Projects</h1>
      <hr />
      <div className="projects_grid">
        <div className="projects_grid_card">
            <a href='https://github.com/MFA21SCM03D/AnimeRecommendation' target='_blank' rel='noopener noreferrer'>
              <div className="projects_grid_card_figure">
                <h3>Anime Recommendation</h3>
                <p className='projects_grid_card_title'>Recommendation System</p>
                <p>Built a Python-based recommendation system for anime, enhancing user experience and content discovery.</p>
                <div className="projects_grid_card_figure_techstack">
                  <div className="projects_grid_card_figure_techstack_details">
                    <img src={Python} alt="" className='projects_grid_card_figure_techstack_img'/>
                    <h5>Python</h5>
                  </div>
                </div>              
              </div>
            </a>
          </div>
        <div className="projects_grid_card">
            <a href='https://github.com/MFA21SCM03D/AnimeRecommendationAPI' target='_blank' rel='noopener noreferrer'>
              <div className="projects_grid_card_figure">
                <h3>Anime Database API</h3>
                <p className='projects_grid_card_title'>API Development</p>
                <p>Developed and deployed a powerful Anime API using FastAPI and MongoDB, with comprehensive testing through Postman.</p>
                <div className="projects_grid_card_figure_techstack">
                  <div className="projects_grid_card_figure_techstack_details">
                    <img src={Python} alt="" className='projects_grid_card_figure_techstack_img'/>
                    <h5>Python</h5>
                  </div>
                  <div className="projects_grid_card_figure_techstack_details">
                    <img src={FastAPI} alt="" className='projects_grid_card_figure_techstack_img'/>
                    <h5>FastAPI</h5>
                  </div>
                  <div className="projects_grid_card_figure_techstack_details">
                    <img src={MongoDB} alt="" className='projects_grid_card_figure_techstack_img'/>
                    <h5>MongoDB</h5>
                  </div>
                  <div className="projects_grid_card_figure_techstack_details">
                    <img src={Postman} alt="" className='projects_grid_card_figure_techstack_img'/>
                    <h5>Postman</h5>
                  </div>
                </div>              
              </div>
            </a>
          </div>
        <div className="projects_grid_card">
            <a href='https://github.com/MFA21SCM03D/AnimeRecommendationWebApp' target='_blank' rel='noopener noreferrer'>
              <div className="projects_grid_card_figure">
                <h3>AnimeSuggest</h3>
                <p className='projects_grid_card_title'>Web Application</p>
                <p>ReactJS web app, optimizing user satisfaction through responsive UI, API integration, and MongoDB for enhanced functionality.</p>
                <div className="projects_grid_card_figure_techstack">
                  <div className="projects_grid_card_figure_techstack_details">
                    <img src={Reactjs} alt="" className='projects_grid_card_figure_techstack_img'/>
                    <h5>React</h5>
                  </div>
                  <div className="projects_grid_card_figure_techstack_details">
                    <img src={TypeScript} alt="" className='projects_grid_card_figure_techstack_img'/>
                    <h5>TypeScript</h5>
                  </div>
                  <div className="projects_grid_card_figure_techstack_details">
                    <img src={MongoDB} alt="" className='projects_grid_card_figure_techstack_img'/>
                    <h5>MongoDB</h5>
                  </div>
                </div>              
              </div>
            </a>
          </div>
        <div className="projects_grid_card">
            <a href='https://github.com/MFA21SCM03D/Punekar' target='_blank' rel='noopener noreferrer'>
              <div className="projects_grid_card_figure">
                <h3>Punekar</h3>
                <p className='projects_grid_card_title'>Mobile Application</p>
                <p>Led agile Android app development, implemented UX, integrated Firebase, and MongoDB for analytics and secure data storage.</p>
                <div className="projects_grid_card_figure_techstack">
                  <div className="projects_grid_card_figure_techstack_details">
                    <img src={AndroidStudio} alt="" className='projects_grid_card_figure_techstack_img'/>
                    <h5>Android</h5>
                  </div>
                  <div className="projects_grid_card_figure_techstack_details">
                    <img src={Firebase} alt="" className='projects_grid_card_figure_techstack_img'/>
                    <h5>Firebase</h5>
                  </div>
                  <div className="projects_grid_card_figure_techstack_details">
                    <img src={Java} alt="" className='projects_grid_card_figure_techstack_img'/>
                    <h5>Java</h5>
                  </div>
                  <div className="projects_grid_card_figure_techstack_details">
                    <img src={MongoDB} alt="" className='projects_grid_card_figure_techstack_img'/>
                    <h5>MongoDB</h5>
                  </div>
                </div>              
              </div>
            </a>
        </div>
        <div className="projects_grid_card">
            <a href='https://github.com/MFA21SCM03D/HealthCare' target='_blank' rel='noopener noreferrer'>
              <div className="projects_grid_card_figure">
                <h3>Health Monitoring App</h3>
                <p className='projects_grid_card_title'>Mobile Application</p>
                <p>Enabled location-based hospital suggestions, secured sensitive user data with Firebase, and implemented medication alerts for enhanced health app functionality.</p>
                <div className="projects_grid_card_figure_techstack">
                  <div className="projects_grid_card_figure_techstack_details">
                    <img src={AndroidStudio} alt="" className='projects_grid_card_figure_techstack_img'/>
                    <h5>Android</h5>
                  </div>
                  <div className="projects_grid_card_figure_techstack_details">
                    <img src={Firebase} alt="" className='projects_grid_card_figure_techstack_img'/>
                    <h5>Firebase</h5>
                  </div>
                  <div className="projects_grid_card_figure_techstack_details">
                    <img src={Java} alt="" className='projects_grid_card_figure_techstack_img'/>
                    <h5>Java</h5>
                  </div>
                </div>              
              </div>
            </a>
        </div>
        <div className="projects_grid_card">
            <a href='https://github.com/MFA21SCM03D/HealthCare' target='_blank' rel='noopener noreferrer'>
              <div className="projects_grid_card_figure">
                <h3> The Ultimate Pokedex </h3>
                <p className='projects_grid_card_title'>Mobile Application</p>
                <p>Developed an efficient Pokedex Flutter app utilizing the Pokemon API, providing a user-friendly grid and detailed card views for seamless exploration of Pokemon data.</p>
                <div className="projects_grid_card_figure_techstack">
                  <div className="projects_grid_card_figure_techstack_details">
                    <img src={Flutter} alt="" className='projects_grid_card_figure_techstack_img'/>
                    <h5>Flutter</h5>
                  </div>
                </div>              
              </div>
            </a>
        </div>        
      </div>
    </main>
  )
}

export default Projects