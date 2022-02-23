import { useEffect, useState,useContext } from "react";
import {salary} from "../data/object1.js"
import {positionJobType} from "../data/object1";
import {requiredEducationLevel} from "../data/object1";
import styled from "styled-components";
import {UserContext} from "../App.js"

const ListItem = styled.li`
    width: 140px;
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

export default function TwoBoxObject({value, props}) {
    // console.log(value)
    const [test, setTest] = useState([]);

     const { schoolSearch,
         setSchoolSearch,
         sectorSearch, 
         setSectorSearch,
         locationSearch,
         setLocationSearch,
         jobSearch,
         setJobSearch,
         moneySearch,
         setMoneySearch,
         
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


    return (
        <ListItem onClick={()=>{
            var temp = []
            var temp2 = []
            console.log(props + "  " + value[0])
            if(props ==="location"){
                    if( !(locationSearch.includes(value[0])) && locationSearch.length<4 ){
                        temp = locationSearch;
                        temp[temp.length] = value[0]
                        setLocationSearch(temp)
                    
                        temp2 = locationSearch2;
                        temp2[temp2.length] = value[1]
                        setLocationSearch2(temp2)
                    
                    }
                    console.log(locationSearch2);
                }

            else if(props ==="sector"){
                    if( !(sectorSearch.includes(value[0])) && sectorSearch.length<4 ){
                        temp = sectorSearch;
                        temp[temp.length] = value[0]
                        setSectorSearch(temp)

                        temp2 = sectorSearch2;
                        temp2[temp2.length] = value[1]
                        setSectorSearch2(temp2)
                    }
                    console.log(sectorSearch2);
                }
        }}
        >{value[1]}</ListItem>
    );
}