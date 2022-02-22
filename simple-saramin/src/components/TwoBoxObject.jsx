import { useEffect, useState } from "react";
import {salary} from "../data/object1.js"
import {positionJobType} from "../data/object1";
import {requiredEducationLevel} from "../data/object1";

export default function TwoBoxObject({value, props}) {
    // console.log(value)
    const [test, setTest] = useState([]);


    return (
        <li onClick={()=>{console.log(props + "  " + value[0])}}>{value[1]}</li>
    );
}