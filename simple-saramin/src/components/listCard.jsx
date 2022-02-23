import { useEffect, useState,useContext } from "react";
import {salary} from "../data/object1.js"
import {positionJobType} from "../data/object1";
import {requiredEducationLevel} from "../data/object1";
import styled from "styled-components";
import {UserContext} from "../App.js"

const ListItem = styled.li`

`;

const Card = styled.li`
    height: 120px;
    background-color:#F0F0F0;
    margin-bottom:20px
`;
export default function ListCard({index}) {
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
         setMoneySearch2,
         listData,
         setListData

        } = useContext(UserContext)
    const [test, setTest] = useState([]);


    return (<Card onClick={()=>{console.log(listData)}}>
         ddddddddddddddddddd
         {listData.company.name !== undefined ? listData.company.name : ""} 
          {listData.position.title !== undefined? listData.position.title: ""}
           {listData.postingAt !== undefined? listData.postingAt: ""}
            {listData.salary.name !== undefined? listData.salary.name : ""} 
            {listData.position.location.name !== undefined? listData.position.location.name: ""}
         </Card>
    );
}

// 객체 구조 분해 힐딩 (for of문을 이용한 example)
// for(let [key, val] of Object.entries(user)){
// console.log(`${key} : ${val}`);
//}