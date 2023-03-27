import React, { useState, useEffect } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperianceItem from "../components/ExperianceItem";
const baseUrl = process.env.React_App_API_BASE_URL;

function Experiance(props) {
  const [experianceList, setexperianceList] = useState(null);

  useEffect(() => {
    fetch(`${baseUrl}/experiance`)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setexperianceList(resp);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="experiance">
      {experianceList && (
        <VerticalTimeline lineColor="#3e497a">
          {experianceList &&
            experianceList.map((item) => {
              return (
                <ExperianceItem
                key={item.id}
                  organization={item.organization}
                  expertise={item.expertise}
                  experiance={item.experiance}
                  typeOfOrg={item.typeOfOrg}
                />
              );
            })}
        </VerticalTimeline>
      )}
    </div>
  );
}
export default Experiance;
