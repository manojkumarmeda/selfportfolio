import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Manoj</h2>
        <div className='prompt'>
          <p>A Sotware develper with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon/>
          <GithubIcon/>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, NPM, Bootstrap, MaterialUI
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
              .Net, NodeJS, MySQL, MS SQL
            </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>
              Javascript, C#, TypeScript
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}
export default Home;
