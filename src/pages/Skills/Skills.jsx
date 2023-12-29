import React from 'react'
import './Skills.css'
import {CSS3, HTML5, JavaScript, Reactjs, TypeScript, 
        TailwindCSS, Gatsby, Redux, Storybook, Nextjs, 
        MySQL, Postman, Python, Java, FastAPI, 
        Figma, Zeplin, Git, GitHub, Docker, Heroku, 
        Jira, ESLint, Linux} from '../../assets'

function Skills() {
  return (
    <main className="skills">
      <h1>Tech Stack</h1>
      <hr/>
      <section className="skills_frontend">
        <h2>
          Frontend
        </h2>
        <div className="skills_frontend_set">
          <figure className="skills_frontend_set_figure">
            <img src={CSS3} alt=""/>
            <figcaption>CSS3</figcaption>
          </figure>
          <figure className="skills_frontend_set_figure">
            <img src={HTML5} alt="" />
            <figcaption>HTML5</figcaption>
          </figure>
          <figure className="skills_frontend_set_figure">
            <img src={JavaScript} alt="" />
            <figcaption>JavaScript</figcaption>
          </figure>
          <figure className="skills_frontend_set_figure">
            <img src={Reactjs} alt="" />
            <figcaption>ReactJS</figcaption>
          </figure>
          <figure className="skills_frontend_set_figure">
            <img src={TypeScript} alt="" />
            <figcaption>TypeScript</figcaption>
          </figure>
          <figure className="skills_frontend_set_figure">
            <img src={TailwindCSS} alt="" />
            <figcaption>Tailwind CSS</figcaption>
          </figure>
          <figure className="skills_frontend_set_figure">
            <img src={Gatsby} alt="" />
            <figcaption>GatsbyJS</figcaption>
          </figure>
          <figure className="skills_frontend_set_figure">
            <img src={Redux} alt="" />
            <figcaption>Redux</figcaption>
          </figure>
        </div>
      </section>
      <section className="skills_backend">
        <h2>Backend</h2>
        <div className="skills_backend_set">
          <figure className="skills_backend_set_figure">
            <img src={Nextjs} alt=""/>
            <figcaption>NextJS</figcaption>
          </figure>
          <figure className="skills_backend_set_figure">
            <img src={MySQL} alt="" />
            <figcaption>MySQL</figcaption>
          </figure>
          <figure className="skills_backend_set_figure">
            <img src={Python} alt="" />
            <figcaption>Python</figcaption>
          </figure>
          <figure className="skills_backend_set_figure">
            <img src={Java} alt="" />
            <figcaption>Java</figcaption>
          </figure>
          <figure className="skills_backend_set_figure">
            <img src={FastAPI} alt="" />
            <figcaption>Fast API</figcaption>
          </figure>
          <figure className="skills_backend_set_figure">
            <img src={Postman} alt="" />
            <figcaption>Postman</figcaption>
          </figure>
        </div>
      </section>
      <section className="skills_design">
        <h2>Design</h2>
        <div className="skills_design_set">
          <figure className="skills_design_set_figure">
            <img src={Figma} alt=""/>
            <figcaption>Figma</figcaption>
          </figure>
          <figure className="skills_design_set_figure">
            <img src={Zeplin} alt="" />
            <figcaption>Zeplin</figcaption>
          </figure>
          <figure className="skills_design_set_figure">
            <img src={Storybook} alt="" />
            <figcaption>Story Book</figcaption>
          </figure>
        </div>
      </section>
      <section className="skills_versioncontrol">
        <h2>Version Control</h2>
        <div className="skills_versioncontrol_set">
          <figure className="skills_versioncontrol_set_figure">
            <img src={Git} alt=""/>
            <figcaption>Git</figcaption>
          </figure>
          <figure className="skills_versioncontrol_set_figure">
            <img src={GitHub} alt="" />
            <figcaption>GitHub</figcaption>
          </figure>
        </div>
      </section>
      <section className="skills_software_tool">
        <h2>Softwares and Tools</h2>
        <div className="skills_software_tool_set">
          <figure className="skills_software_tool_set_figure">
            <img src={Linux} alt=""/>
            <figcaption>Linux</figcaption>
          </figure>
          <figure className="skills_software_tool_set_figure">
            <img src={Docker} alt="" />
            <figcaption>Docker</figcaption>
          </figure>
          <figure className="skills_software_tool_set_figure">
            <img src={Heroku} alt="" />
            <figcaption>Heroku</figcaption>
          </figure>
          <figure className="skills_software_tool_set_figure">
            <img src={ESLint} alt="" />
            <figcaption>ESLint</figcaption>
          </figure>
          <figure className="skills_software_tool_set_figure">
            <img src={Jira} alt="" />
            <figcaption>Jira</figcaption>
          </figure>
        </div>
      </section>
    </main>
  )
}

export default Skills