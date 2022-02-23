import { useEffect, useState,useContext } from "react";
import {salary} from "../data/object1.js"
import {positionJobType} from "../data/object1";
import {requiredEducationLevel} from "../data/object1";
import styled from "styled-components";
import {UserContext} from "../App.js"

const ListItem = styled.li`
    width: 130px;
    height: 55px;
    margin-bottom: 7px;
    margin-right: 8px;
    border-radius: 25px;
    background-color: #9AB9FF;
    text-align: center;
    padding-top: 15px;
    float: left;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, .3);
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


    return (
            <ListItem onClick = {()=>{
                var temp = []
                var temp2 = []
                
                    console.log(jobSearch + "    " + typeof jobSearch)
            if(typeof value[1] === "object"){
                setsearchData(value[0]);
            }
            else {
                if(props ==="job"){
                    if( !(jobSearch.includes(value[1])) && jobSearch.length<4 ){
                        temp = jobSearch;
                        temp[temp.length] = value[1]
                        setJobSearch(temp)

                        temp2 = jobSearch2;
                        temp2[temp2.length] = value[0]
                        setJobSearch2(temp2)
                    }
                    console.log(jobSearch2);
                }
                else if(props ==="money"){
                    if( !(moneySearch.includes(value[1])) && moneySearch.length<4 ){
                        temp = moneySearch;
                        temp[temp.length] = value[1]
                        setMoneySearch(temp)

                        temp2 = moneySearch2;
                        temp2[temp2.length] = value[0]
                        setMoneySearch2(temp2)
                    }
                    console.log(moneySearch2);
                }
                else if(props ==="school"){
                    if( !(schoolSearch.includes(value[1])) && schoolSearch.length<4 ){
                        temp = schoolSearch;
                        temp[temp.length] = value[1]
                        setSchoolSearch(temp)

                        temp2 = schoolSearch2;
                        temp2[temp2.length] = value[0]
                        setSchoolSearch2(temp2)
                    }
                    console.log(schoolSearch2);
                }
                console.log(value[1] + "  " + props);
                setsearchData("");
            }   
            }}
            key={index}>{value[0]}</ListItem>
        
    );
}

// 객체 구조 분해 힐딩 (for of문을 이용한 example)
// for(let [key, val] of Object.entries(user)){
// console.log(`${key} : ${val}`);
//}