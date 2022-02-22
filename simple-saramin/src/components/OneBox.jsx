import { useEffect, useState,useContext } from "react";
import {salary} from "../data/object1.js"
import {positionJobType} from "../data/object1";
import {requiredEducationLevel} from "../data/object1";
import styled from "styled-components";
import {UserContext} from "../App.js"

const ListItem = styled.li`
    width: 100px;
    height: 40px;
    margin-bottom: 5px;
    border-radius: 25px;
    background-color: #CAD4EE;
    text-align: center;
    display: inline;
`;

export default function OneBox({value, index, setsearchData, props}) {
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
         setMoneySearch 
        } = useContext(UserContext)
    const [test, setTest] = useState([]);


    return (
        <ListItem>
            <li onClick = {()=>{
            if(typeof value[1] === "object"){
                setsearchData(value[0]);
            }
            else {
                console.log(value[1] + "  " + props);
                setsearchData("");
            }
            }}
            key={index}>{value[0]}</li>
        </ListItem>
        
    );
}

// 객체 구조 분해 힐딩 (for of문을 이용한 example)
// for(let [key, val] of Object.entries(user)){
// console.log(`${key} : ${val}`);
//}