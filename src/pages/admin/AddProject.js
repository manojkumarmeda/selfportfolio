import React, { useState } from "react";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  TextField,
} from "@mui/material";

function guidGenerator() {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}

const baseUrl= process.env.API_BASE_URL;

const AddProject = () => {
  const [projectName, setProjectName] = useState("");
  const [clientName, setClient] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [description, setDescription] = useState("");
  const [projectImage, setProjectImage] = useState(null);
  const [validationErrors, setValidationErrors] = useState([]);

  const addNewProject = (e) => {
    e.preventDefault();
    const experiance = {
      id: guidGenerator(),
      name:projectName,
      clientName,
      teamSize,
      skills:technologies,
      description,
      image:projectImage
    };
    const errorList = validateForm();
    if (errorList.length > 0) {
      setValidationErrors(errorList);
      alert(validationErrors.join("\n"));
      return;
    } else {
      fetch(`${baseUrl}/projects`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(experiance),
      })
        .then((res) => {
          alert("Projects updated Successfully...");
          setProjectName("");
          setClient("");
          setTeamSize(0);
          setTechnologies("");
          setDescription("");
          setProjectImage("");
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  const validateForm = () => {
    const errors = [];
    if (projectName === "" || projectName === undefined) {
      errors.push("Project name field is required");
    }
    if (clientName === "" || clientName === undefined) {
      errors.push("Expertise field is required");
    }
    if (teamSize === "" || teamSize === undefined) {
      errors.push("From Date field is required");
    }
    if (technologies === "" || technologies === undefined) {
      errors.push("Technologies field is required");
    }
    if (description === "" || description === undefined) {
      errors.push("Type of experiance is required");
    }
    return errors;
  };
  const handleFileUpload = (e) => {
    e.preventDefault();
    let files = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = (e) => {
      setProjectImage( e.target.result);
    };
  };
  return (
    <>
      <Box style={{ marginRight: "20%", marginTop: "20px", marginLeft: "20%" }}>
        <Card>
          <CardHeader title="Add Project" />
          <form onSubmit={addNewProject}>
            <CardContent>
              <div>
                <TextField
                  label="Project name"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  style={{ marginLeft: "10px" }}
                  required
                  fullWidth
                />
              </div>
              <div>
                <TextField
                  label="Client"
                  value={clientName}
                  onChange={(e) => setClient(e.target.value)}
                  style={{ width: "70%", marginLeft: "10px" }}
                  required
                />
                <TextField
                  type="number"
                  label="Team size"
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  style={{ width: "20%", marginLeft: "10px" }}
                  required
                />
              </div>
              <div style={{ marginTop: "20px" }}>
                <TextField
                  label="Technologies"
                  multiline
                  value={technologies}
                  onChange={(e) => setTechnologies(e.target.value)}
                  style={{ width: "50%", marginLeft: "10px" }}
                  required
                />
              </div>
              <div style={{ marginTop: "20px" }}>
                <TextField
                  label="Description"
                  multiline
                  fullWidth
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  style={{ marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "20px" }}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                />
              </div>
            </CardContent>
            <CardActions>
              <Button
                style={{ backgroundColor: "green", color: "white" }}
                type="submit"
              >
                Submit
              </Button>
            </CardActions>
          </form>
        </Card>
      </Box>
    </>
  );
};

export default AddProject;
