import location from "../img/location.svg";
import job from "../img/job.svg";
import sector from "../img/sector.svg";
import money from "../img/money.svg";
import school from "../img/school.svg";
import styled from "styled-components";
import { useState } from "react";
import Detail from "./Detail";
import SearchButtonArea from "../pages/SearchButtonArea.jsx";

const CategoryWrap = styled.div`
    padding:20px 10px 10px 20px;
    background-color: #D2E1FF;
    height: 350px;
    
`;
const SelectBox = styled.div`
    display:flex;
    position:relative;
    width: 220px;
    align-items:center;
    margin-bottom:20px;
    img{
        margin-right:15px
    }
    span{
        position:absolute;
        left:90px;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 33px;


    color: #000000;

    }

`;

const KeyWordsBox = styled.div`
    width: calc(100vw - 270px);
    height: 350px;
    overflow-y: scroll;
    background-color: pink;
`;

const SecondSection = styled.section`
  display:flex;
  position: absolute;
  top: 370px;
  left: 0;
`;


function Categories() {
    const [click, setClick] = useState("location");
    const [searchData, setsearchData] = useState("서울")


    return (
        <SecondSection>
        <CategoryWrap>
            <SelectBox
            
            onClick={()=>{
                setClick("location")
                setsearchData("")
            }
            }
            >
                <img src={location} alt="location" />
                <span>지역별</span>
            </SelectBox>
            <SelectBox
            onClick={()=>{                
                setClick("sector")
                setsearchData("")
            }
            }
            >
                <img src={sector} alt="sector" />
                <span>직업·직무별</span>
            </SelectBox>
            <SelectBox
            onClick={()=>{
                setClick("job")
                setsearchData("")
            }
            }
            >
                <img src={job} alt="job" />
                <span>근무 형태</span>
            </SelectBox>
            <SelectBox onClick={()=>{
                setClick("money")
                setsearchData("")
                }
            }>
                <img src={money} alt="money" />
                <span>평균 연봉</span>
            </SelectBox>
            <SelectBox onClick={()=>{
                setClick("school")
                setsearchData("")
            }
            }>
                <img src={school} alt="school" />
                <span>학력</span>
            </SelectBox>
        </CategoryWrap>
        <Detail searchData={searchData} setsearchData={setsearchData} props={click} bool="true">
        </Detail>
        
      {/* <SearchButtonArea>이거인데 왜이래</SearchButtonArea> */}

        </SecondSection>
    );
}

export default Categories;