import location from "../img/location.svg";
import job from "../img/job.svg";
import sector from "../img/sector.svg";
import money from "../img/money.svg";
import school from "../img/school.svg";
import styled from "styled-components";
import { useState } from "react";
import Detail from "./Detail";



const Area = styled.div`
position:fixed
background-color: red;

width:500px
height:500px
position:apsolute
top :0px
z-index:100
`;



function SearchButtonArea() {
    
  const [pageView, setPageView] = useState("ListView");
  const [status, setStatus] = useState("");
  const [api, setApi] = useState([]);
  const [apiKids, setApiKids] = useState([]);

    const getAPI = async () => {
    setStatus("loading");
    try {
      const response = await fetch(
          'http://175.210.85.145:8080/api/job/search?industryCode=703').then(function(response) {return response.json();
  }).then(function(myJson) {console.log(JSON.stringify(myJson));});

          
      const data = await response.json();
      await setApi(data);
      await console.log(data);
      setStatus("succeeded");
    } catch (error) {
      setStatus("failed");
      console.log(error)
    }
  };

    return (
    <Area onClick={() =>{getAPI()}}>
        테스트중입니다.
    </Area>
    );
}

export default SearchButtonArea;