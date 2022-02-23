import { createContext, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import {ReactComponent as Tiger} from "./img/tiger.svg"
import {ReactComponent as Scope} from "./img/scope.svg"
import logo from "./img/saraminlogo.gif"
import Categories from "./pages/Categories";
import TypeAnimation from 'react-type-animation';
import Typist from "react-typist";
import SearchButtonArea from "./pages/SearchButtonArea.jsx"
import SearchListBoard from "./components/SearchListBoard.jsx"
import SearchListBoard2 from "./components/SearchListBoard2.jsx"
import SearchListBoard3 from "./components/SearchListBoard3.jsx"
import SearchListBoard4 from "./components/SearchListBoard4.jsx"
import SearchListBoard5 from "./components/SearchListBoard5.jsx"
import SearchListBoard6 from "./components/SearchListBoard6.jsx"
import ListCard from "./components/listCard.jsx"
// import Salary from "./components/Salary.jsx"
// MenuSet

const MenuSet = styled.div`
  position: absolute;
  top:700px;
  left: 0;
  width: 100%;
  height: 200px;
  background-color: #E3ECF5;
  display:flex;
  justify-content:space-around;
  align-items:center
`;

const Section = styled.section`
  position: absolute;
  top:70px;
  left: 0;
  width: 100%;
  height: 300px;
  background-color: #78C6FF;
  display:flex;
`;

const ContainerBoxWrap = styled.div`
  margin-right:30px;
  display: flex;
  justify-content:right;
  width: 60%;
`;
const ContainerBox = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  color: ${props => props.color}

`;

const Sample = styled(ContainerBox)`
  width: 40%;
  display: flex;
  flex-direction:row;
  align-items:center;
  justify-content: left;
`;

const SearchBox = styled.div`
  max-width: 570px;
  width:100%;
  color:black;
  height: 40px;
  background: #FFFFFF;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding-left: 5px;
  display:flex;
  align-items:center;
`;

const TigerSvg = styled(Tiger)`
  height:85%;


`;


const SpanSmallLogo = styled.span`
color:white;
font-family: Noto Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 33px;
color: #FFFFFF;
`;

const H3logo = styled.span`
color:white;
font-family: 'Poor Story', cursive;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 33px;
color: #FFFFFF;
font-size:32px;
margin: 12.5px 0px 16px 0px;
`;




const ScopeSvg = styled(Scope)`
 height:70%;
`;



const FinalList = styled.ul`
background-color:red;
position:absolute;
width:100%;
min-height:200px;
top: 900px
`;


export const UserContext = createContext();


function App() {

  const [count, setCount] = useState(1);
  const [sectorSearch,setSectorSearch] = useState([])
  const [locationSearch,setLocationSearch]= useState([])
  const [jobSearch,setJobSearch]= useState([])
  const [moneySearch,setMoneySearch]= useState([])
  const [schoolSearch,setSchoolSearch]= useState([])
  const [sectorSearch2,setSectorSearch2] = useState([])
  const [locationSearch2,setLocationSearch2]= useState([])
  const [jobSearch2,setJobSearch2]= useState([])
  const [moneySearch2,setMoneySearch2]= useState([])
  const [schoolSearch2,setSchoolSearch2]= useState([])
  const [listData,setListData]= useState([])

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    // console.log("Count: " + count);
    setCount(1);
  }, [count]);

  return (
    <div className="main-page">
      <UserContext.Provider value={{
        schoolSearch, setSchoolSearch,sectorSearch, setSectorSearch,locationSearch,setLocationSearch,jobSearch,setJobSearch,moneySearch,setMoneySearch 
        ,schoolSearch2, setSchoolSearch2,sectorSearch2, setSectorSearch2,locationSearch2,setLocationSearch2,jobSearch2,setJobSearch2,moneySearch2,setMoneySearch2 
        ,listData,setListData
        }}>
       
      <img src={logo} alt="logo" />
      <Section onClick={()=>{console.log(jobSearch )}}>
        <ContainerBoxWrap>
          <ContainerBox color="#E8E8E8">
            <SpanSmallLogo>#청춘을_사람인이_응원합니다 #2022년 #호랑이_기운_받아가세요</SpanSmallLogo>
            <H3logo>가고 싶은 직장을 손쉽게 검색해봐요!</H3logo>
            <SearchBox>
              <ScopeSvg/>
      {count ? (
        <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>
          <span> 당신이 원하는 직업은?</span>
          <Typist.Backspace count={80} delay={600} />
        </Typist>
      ) : (
        ""
      )}
            </SearchBox>
          </ContainerBox>
        
        </ContainerBoxWrap>
        <Sample>
            <TigerSvg/>  
        </Sample>
      </Section>

      <Categories />

      <MenuSet> 
        <SearchListBoard/>        
        <SearchListBoard2/>        
        <SearchListBoard3/>        
        <SearchListBoard4/>        
        <SearchListBoard5/>        
        
        <SearchListBoard6/>        
      </MenuSet>
      
        <FinalList>
          {listData.length > 0 ? listData.map((item, index)=>(<ListCard index={index}/>)) :<div></div>}
        </FinalList>
      </UserContext.Provider>
    </div>
    
  );
}

export default App;
