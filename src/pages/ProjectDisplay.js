import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  console.log(projectList);
  const project = projectList
    .filter((a) => a.id === id)
    .map((b) => {
      return b;
    })[0];
     //projectList[id];
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
