import React, { useState } from "react";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Button,
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
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

function AddExperiance() {
  const [organization, setOrganization] = useState("");
  const [expertise, setExpertise] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [typeofExperiance, setTypeofExperiance] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  const addExperiance = (e) => {
    e.preventDefault();
    console.log({ organization, expertise, fromDate, toDate });
    const experiance = {
      id: guidGenerator(),
      organization,
      expertise,
      fromDate,
      toDate,
      typeofExperiance,
    };
    const errorList = validateForm();
    if (errorList.length > 0) {
      setValidationErrors(errorList);
      alert(validationErrors.join("\n"));
      return;
    } else {
      fetch("http://localhost:8000/experiance", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(experiance),
      })
        .then((res) => {
          alert("Experiance updated Successfully...");
          setOrganization("");
          setExpertise("");
          setToDate("");
          setFromDate("");
          setTypeofExperiance("");
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  const validateForm = () => {
    const errors = [];
    if (organization === "" || organization === undefined) {
      errors.push("Organization field is required");
    }
    if (expertise === "" || expertise === undefined) {
      errors.push("Expertise field is required");
    }
    if (fromDate === "" || fromDate === undefined) {
      errors.push("From Date field is required");
    }
    if (toDate === "" || toDate === undefined) {
      errors.push("Todate field is required");
    }
    if (typeofExperiance === "" || typeofExperiance === undefined) {
      errors.push("Type of experiance is required");
    }
    return errors;
  };
  return (
    <>
      <Box style={{ marginRight: "20%", marginTop: "20px", marginLeft: "20%" }}>
        <Card>
          <CardHeader title="Add Experiance" />
          <CardContent>
            <form onSubmit={addExperiance}>
              <div>
                <FormControl size="small" style={{ marginLeft: "10px" }}>
                  <TextField
                    label="Organization"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    style={{ width: "500px" }}
                    // required
                  />
                </FormControl>
                <FormControl size="small" style={{ marginLeft: "10px" }}>
                  <TextField
                    label="Expertise"
                    value={expertise}
                    onChange={(e) => setExpertise(e.target.value)}
                    style={{ width: "500px" }}
                    // required
                  />
                </FormControl>
              </div>
              <div style={{ marginTop: "20px" }}>
                <FormControl size="small" style={{ marginLeft: "10px" }}>
                  <TextField
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    style={{ width: "250px" }}
                    //required
                  />
                </FormControl>
                <FormControl size="small" style={{ marginLeft: "10px" }}>
                  <TextField
                    type="date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    style={{ width: "250px" }}
                    // required
                  />
                </FormControl>
              </div>
              <div style={{ marginTop: "20px" }}>
                <FormControl size="small" style={{ marginLeft: "10px" }}>
                  <RadioGroup
                    name="typeofExperiance"
                    value={typeofExperiance}
                    row
                  >
                    <FormControlLabel
                      value={"Work"}
                      control={
                        <Radio
                          required
                          onChange={(e) => {
                            setTypeofExperiance(e.target.value);
                          }}
                        />
                      }
                      label={"Work"}
                    />
                    <FormControlLabel
                      value={"School"}
                      control={
                        <Radio
                          required
                          onChange={(e) => {
                            setTypeofExperiance(e.target.value);
                          }}
                        />
                      }
                      label={"Education"}
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <Button type="submit">Submit</Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default AddExperiance;
