
import styled from "styled-components";
import { useState,useEffect } from "react";
import {
    positionIndustry,
    positionLocation,
    positionLocation2
    ,positionJobType,
    requiredEducationLevel,
    positionJobMidCode,
    positionJobCode,
    positionJobCode2,
    salary } from "../data/object2.js";
import OneBox from "../components/OneBox.jsx";
import TwoBoxObject from "../components/TwoBoxObject.jsx";
import TwoBoxNumber from "../components/TwoBoxNumber";


const KeywordWrap = styled.div`
    display:flex;
    width: calc(100vw - 250px);
    height: 350px;
`;

const  MainKeyword= styled.ul`
    background-color: #D2E1FF;
    padding: 20px 39px;
    width: 30%;
    overflow-y: scroll;
`;
const  DetailedKeyword= styled.ul`
    background-color:#D2E1FF;
    padding: 20px 45px;
    width: 70%;
    overflow-y: scroll;
`;


function Detail({props, searchData, setsearchData}) {
    const [flag, setFlag] = useState(0)
    const [array1box, setArray1box] = useState([])
    const [array2box, setArray2box] = useState(positionLocation2)

    var temp = []
    var temp2 = []
    // console.log(props)

    useEffect(()=>{
        if(props==="location"){
            setArray1box(Object.entries(positionLocation2))
            setArray2box(positionLocation2)
        }
        else if(props==="sector"){
            setArray1box(Object.entries(positionJobCode2))
            setArray2box(positionJobCode2)
        }
        else if(props==="job"){
            setArray1box(Object.entries(positionJobType))
            setArray2box({})

        }
        else if(props==="school"){
            setArray1box(Object.entries(requiredEducationLevel))
            setArray2box({})

        }
        else if(props==="money"){
            setArray1box(Object.entries(salary))
            setArray2box({})

        }
        if(typeof array2box[searchData] === "object")
        console.log(Object.entries(array2box[searchData]))
    },[props])

    // props를 받음 => 정해진 props값에 따른 참조하는 데이터 결정
    // 예: location이 들어왔다고 하면
    // 키값으로만 이루어진 배열을 만듬[서울, 경남, 뭐시기저시기]
    // onClick 현재 Detail의 state값이 변하고
    // DetatiledKeyword 모체객체에서 받은 배열 값 안의 객체를 받음
    // location2, job2와
    // 나머지는 다르므로 2개의 컴포넌트를 만들면 될듯?

    // 1box에 줘야하는 것 -> 적혀야하는 정보, 정보의 ID
    // 정보를 누르면 State가 올라감

    // 경우 1과
    // locationid  => value[1]이 객체 => 2box로 넘김 => 2box에서 해당 원하는 정보의 ID 를 갱신
    // sectorid  =>

    // 경우 2가
    // moneyid  => value[1] ID 
    // schoolid  => value[1] ID 
    // jobid  => value[1] ID
    // useContext{moneyid:[], jobid:[], schoolid:[]}
    // 이렇게 정보 처리 가능 바로 OneBox에서

    return (
    <KeywordWrap>
        <MainKeyword>
            {array1box.map((value,index) => (
                <OneBox  props={props} value={value} index={index} setsearchData={setsearchData} />
            ) )}
        </MainKeyword>
        <DetailedKeyword onClick={()=>{console.log(array2box)}}>
            { typeof array2box[searchData] === "object" ? 
            Object.entries(array2box[searchData]).map((value,index)=>(
                <TwoBoxObject value={value} props={props} />
            )) : <div></div>}
        </DetailedKeyword>
    </KeywordWrap>);
}
export default Detail;