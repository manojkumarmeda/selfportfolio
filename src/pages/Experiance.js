import React,{useState,useEffect} from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import ExperianceItem from '../components/ExperianceItem';

function Experiance(props) {
  const[experianceList,setexperianceList]= useState(null);

  useEffect(()=>{
    fetch("http://localhost:8000/experiance").then(res=>{
      return res.json();
    }).then((resp)=>{
      setexperianceList(resp);
    }).catch((error)=>{
      console.log(error.message);
    })
  },[]);

  return (
    <div className='experiance'>
      <VerticalTimeline lineColor='#3e497a'>
        {
          experianceList && experianceList.map((item)=>{
            return <ExperianceItem organization={item.organization} expertise={item.expertise} experiance={item.experiance} typeOfOrg={item.typeOfOrg} />
          })
        }
      </VerticalTimeline>
    </div>
  )
}
export default Experiance;