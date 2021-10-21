import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Axios from 'axios'


function InterviewMonth() {
    // console.log(items)
    useEffect(() => {
        fetchLists()
    }, [])
    const [lists, setLists] = useState([])

    const fetchLists = () => {
        Axios.post(`https://makeup-home.com/InterviewMonth`
        // Axios.post(`http://localhost:3001/InterviewMonth`
            // Axios.post('https://makeup-home.com/api/insert',{
        ).then((response) => {
            setLists(response.data)
        })
    }
    return (
        <div>
            <div class="interview-month-header">
                <div>매치드 가입으로 경영과제를 해결하세요</div>
                <Link to={"/Signup"}><button>회원가입 요청</button></Link>
            </div>
            <div>월간 페이지 뷰 TOP!</div>
            {lists.map(list => (
            <div class="interview-month-box">
                <div class="interview-month-image">
                    <div>사장이야기</div>
                    {/* <div>{list.category}</div> */}
                    <img src={list.image}/></div>
                <Link to={`/Interview/${list.id}`}>{list.title}</Link>
            </div>
        ))
        }
        </div>
        
    )
}
export default InterviewMonth;