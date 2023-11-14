import React from 'react';
import './AboutMe.css';
import "react-dom"
// import {useNavigate} from "react-router-dom";
// import Card from "../../components/Card/Card";
import MyPage from "../../page-style/PageStyle";

function AboutMe() {
    // const navigate = useNavigate();
    const content = [
        <div className="">
            <div className="">

            </div>
            <div className="">

            </div>
        </div>,
        <div className="">
            <button className="">

            </button>
            <button className="">

            </button>
            <button className="">

            </button>
        </div>
    ]
    return (
        <MyPage content={content}/>
    )
}
//
//
// export default AboutMe;

// import React from 'react';
//
// function AboutMe() {
//     return (<span>qwertyuiopqwertyuioy</span>);
// }

export default AboutMe;