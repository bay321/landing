import React, { useState, useEffect } from "react";
import Axios from 'axios'
import { Link } from 'react-router-dom'
import InterviewMonth from "./InterviewMonth";
import InterviewRelatedList from "./InterviewRelatedList";

function InterviewDetail({ match }) {

    useEffect(() => {
        fetchItem()
    }, [match.params.id])

    const [array, setArray] = useState([])
    const [title, setTitle] = useState("")
    const [subTitle, setSubTitle] = useState("")
    const [content, setContent] = useState("")
    const [company, setCompany] = useState("")
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [date, setDate] = useState("")
    const [employee, setEmployee] = useState("")
    const [line, setLine] = useState("")
    const [years, setYears] = useState("")
    const [age, setAge] = useState("")
    const [type, setType] = useState("")
    const [image, setImage] = useState("")

    useEffect(() => {
        fetchRelated()
    }, [age])

    const fetchItem = () => {
        Axios.post(`https://makeup-home.com/Interview/${match.params.id}`
        // Axios.post(`http://localhost:3001/Interview/${match.params.id}`
            // Axios.post('https://makeup-home.com/api/insert',{
        ).then((response) => {
            // console.log(response.data[0])
            setTitle(response.data[0].title)
            setSubTitle(response.data[0].subTitle)
            setContent(response.data[0].content)
            setCompany(response.data[0].company)
            setName(response.data[0].name)
            setPosition(response.data[0].position)
            setDate(response.data[0].date)
            setEmployee(response.data[0].employee)
            setLine(response.data[0].line)
            setYears(response.data[0].years)
            setAge(response.data[0].age)
            setType(response.data[0].type)
            setImage(response.data[0].image)

        })
    }

    const fetchRelated = () => {
        Axios.post(`https://makeup-home.com/InterviewRelated`, {
        // Axios.post(`http://localhost:3001/InterviewRelated`, {
            line: line,
            age: age
        }
            // Axios.post('https://makeup-home.com/api/insert',{
        ).then((response) => {
            // console.log(response.data[0])
            // setTitle(response.data[0].title)
            // setSubTitle(response.data[0].subTitle)
            // console.log(response.data)
            setArray(response.data)
        })
    }

    return (
        <div style={{ display: "flex" }}>
            <div>
                <h1>{title}</h1>
                <h3>{subTitle}</h3>
                <img src={image} />
                <hr></hr>
                <div>{company}</div>
                <div>{name} {position}</div>
                <div>{date}</div>
                <div style={{ display: "flex" }}>
                    <div>TAG</div>
                    <div class="interview-detail-tag">?????????:{employee}</div>
                    <div class="interview-detail-tag">??????:{line}</div>
                    <div class="interview-detail-tag">??????:{years}</div>
                    <div class="interview-detail-tag">???????????????:{age}</div>
                    <div class="interview-detail-tag">????????????:{type}</div>
                </div>
                <hr></hr>
                <div>{content}</div>
                <Link to={"/Interview"}><button>??????</button></Link>
                <h3>??????????????? - ?????? : {line}, ????????? : {age}</h3>
                <div>????????? ???????????? ????????? ??????????????? ????????? ?????? ????????? ?????? ??????</div>
                <InterviewRelatedList lists={array} />
            </div>
            <div>
                <InterviewMonth />
                <Link to={{ pathname: `/Interview`, status: "??????" }}><div>?????? TOP 20 ????????????</div></Link>
            </div>

        </div>
    )
}


export default InterviewDetail;