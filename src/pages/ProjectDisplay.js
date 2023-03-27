import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
// import { projectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";
const baseUrl = process.env.React_App_API_BASE_URL;

function ProjectDisplay() {
  const[projectList,setProjectList]= useState(null);
  const { id } = useParams();

  useEffect(()=>{
    fetch(`${baseUrl}/projects`).then(res=>{
      return res.json();
    }).then((resp)=>{
      setProjectList(resp);
    }).catch((error)=>{
      console.log(error.message);
    })
  },[])
  console.log(projectList);
  const project = projectList
    .filter((a) => a.id === id)
    .map((b) => {
      return b;
    })[0];
  return (
    <div className="project">
      <h1>{project&&project.name}</h1>
      <img src={project && project.image} alt="" />
      <p>
        <b>Skills:</b> {project && project.skills}
      </p>
      <GitHubIcon />
    </div>
  );
}

export default ProjectDisplay;
