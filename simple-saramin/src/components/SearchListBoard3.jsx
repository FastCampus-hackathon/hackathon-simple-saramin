import { useEffect, useState,useContext } from "react";
import {salary} from "../data/object1.js"
import {positionJobType} from "../data/object1";
import {requiredEducationLevel} from "../data/object1";
import styled from "styled-components";
import {UserContext} from "../App.js"

const ListItem = styled.div`
    width: 14vw;
    height: 80%;
    background-color:#CAD4EE;
    display:flex;
    flex-direction:column;
    align-items:center;
    box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, .3);
    border-radius: 13px;
    padding-top: 10px;
`;

const SelectItems = styled.div`
  margin-top: 7px;
`;

export default function SearchListBoard3({value, index, setsearchData, props, category}) {
    // console.log(value)
    const { schoolSearch,
         setSchoolSearch,
         sectorSearch, 
         setSectorSearch,
         locationSearch,
         setLocationSearch,
         jobSearch,
         setJobSearch,
         moneySearch,
         setMoneySearch ,
         schoolSearch2,
         setSchoolSearch2,
         sectorSearch2, 
         setSectorSearch2,
         locationSearch2,
         setLocationSearch2,
         jobSearch2,
         setJobSearch2,
         moneySearch2,
         setMoneySearch2 
        } = useContext(UserContext)
    const [test, setTest] = useState([]);

  const [status, setStatus] = useState("");
  const [url, setUrl] = useState("");
  const [api, setApi] = useState([]);


    const getAPI = async () => {
    setStatus("loading");
    try {
      // await delay();
      const response = await fetch(
        `http://175.210.85.145:8080/api/job/search?industryCode=703`
      );
      const data = await response.json();
      await setApi(data);
      await console.log(data)
      setStatus("succeeded");
    } catch (error) {
        console.log(error)
      setStatus("failed");
    }
  };


    return (<ListItem onClick={()=>{}}>내가 원하는 근무 형태
    {jobSearch2.map((item, index)=>(<SelectItems key={index }
    onClick={()=>{jobSearch2.splice(index,1); jobSearch.splice(index,1)}}
    >{index+1} {item} </SelectItems>))}
    </ListItem>);
}

// 객체 구조 분해 힐딩 (for of문을 이용한 example)
// for(let [key, val] of Object.entries(user)){
// console.log(`${key} : ${val}`);
//}