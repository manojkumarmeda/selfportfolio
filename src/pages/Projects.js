import React, { useEffect,useState } from 'react'
import '../styles/Projects.css';
import ProjectItem from '../components/ProjectItem';
//import { projectList } from '../helpers/ProjectList';

function Projects() {
  const[projectList,setProjectList]= useState(null);

  useEffect(()=>{
    fetch("http://localhost:8000/projects").then(res=>{
      return res.json();
    }).then((resp)=>{
      setProjectList(resp);
    }).catch((error)=>{
      console.log(error.message);
    })
  },[]);

  return (
    <>
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
         {projectList && projectList.map((project,index)=>{
            return <ProjectItem key={index} id={project.id} name={project.name} image={project.image}  />
          })}
      </div>
    </div>
    </>
  )
}
export default Projects;
