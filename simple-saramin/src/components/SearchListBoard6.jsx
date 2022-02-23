import { useEffect, useState,useContext } from "react";
import {salary} from "../data/object1.js"
import {positionJobType} from "../data/object1";
import {requiredEducationLevel} from "../data/object1";
import styled from "styled-components";
import {UserContext} from "../App.js"

const ListItem = styled.div`
    width: 14vw;
    height: 80%;
    font-size:28px;
    color:black;
    background-color:#CAD4EE;
    display:flex;
    justif-content:center;
    align-items:center;
    box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, .3);
    border-radius: 13px;
    padding: 0 66px;
`;

const SearchSpan = styled.span`
  font-size: 25px;
  text-align: center;
`;

export default function SearchListBoard4({value, index, setsearchData, props, category}) {
    // console.log(value)
    const { 
         schoolSearch,
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
         setMoneySearch2,
          listData,
          setListData
        } = useContext(UserContext)
    const [test, setTest] = useState([]);

  const [status, setStatus] = useState("");
  const [url, setUrl] = useState("");
  const [api, setApi] = useState([]);

  const [loading, setLoading] = useState(true);
  
  let ApiUrl = `http://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=42395046&utm_source=job-search-api&utm_medium=api&utm_campaign=saramin-job-search-api`;
  
  function getAPI() {
    fetch(ApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }).then(res=>res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
  }
    // const getAPI = async () => {
    // setStatus("loading");
    // try {
    //   // await delay();
    //   const response = await fetch(
    //     `http://175.210.85.145:8080/api/job/search?industryCode=703`
    //   );
    //   const data = await response.json();
    //   await setListData(data.data);
    //   await console.log(data.data)
    //   setStatus("succeeded");
    // } catch (error) {
    //     console.log(error)
    //   setStatus("failed");
    // }
    // };



    return (<ListItem onClick={()=>{getAPI()}}>
      <SearchSpan>검색하기</SearchSpan>
    </ListItem>);
}

// 객체 구조 분해 힐딩 (for of문을 이용한 example)
// for(let [key, val] of Object.entries(user)){
// console.log(`${key} : ${val}`);
//}