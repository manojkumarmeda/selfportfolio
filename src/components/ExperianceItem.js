import React from "react";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

function ExperianceItem({ organization,expertise, experiance, typeOfOrg }) {
  const renderIcon = (iconType) => {
    if (iconType === "School") {
      return <SchoolIcon />;
    } else if (iconType === "Work") {
      return <WorkIcon />;
    }
  };
  const getIconStyle = (iconType) => {
    if (iconType === "School") {
      return {
        background: "#e9d35b",
        color: "#ffffff",
      };
    } else if (iconType === "Work") {
      return {
        background: "#3e497a",
        color: "#ffffff",
      };
    }
  };
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date={experiance}
      iconStyle={getIconStyle(typeOfOrg)}
      icon={renderIcon(typeOfOrg)}
    >
      <h3>{organization}</h3>
      <p>{expertise}</p>
    </VerticalTimelineElement>
  );
}

export default ExperianceItem;
