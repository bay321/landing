import React, { useState, useEffect } from "react";
import Axios from 'axios'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import ServiceList from "./ServiceList";
import InterviewMonth from "./InterviewMonth";
import InterviewSearch from "./InterviewSearch"

function Service() {
    useEffect(() => {
        fetchItems()
    }, [])
    useEffect(() => {
        fetchLists()
    }, [])

    const [text, setText] = useState("")
    const [array, setArray] = useState([])
    const [items, setItems] = useState([])
    const [lists, setLists] = useState([])
    const [monthLists, setMonthLists] = useState([])
    const [status, setStatus] = useState("결재자매칭")
    const [category, setCategory] = useState("")
    const [line, setLine] = useState("")

    const categoryBtn = (value) => {
        if (value == "도입사례") {
            setArray(lists)
        }
        setStatus(value)
    }


    const fetchLists = () => {
        Axios.post(`https://makeup-home.com/Interview`
        // Axios.post(`http://localhost:3001/Interview`
            // Axios.post('https://makeup-home.com/api/insert',{
        ).then((response) => {
            setLists(response.data)
            setArray(response.data)
        })
    }

    const fetchItems = () => {
        Axios.get(`https://makeup-home.com/Board`
        // Axios.get(`http://localhost:3001/Board`
            // Axios.post('https://makeup-home.com/api/insert',{
        ).then((response) => {
            setItems(response.data)
        })
    }

    return (
        <nav>
            <h3>서비스소개{line}</h3>{status}
            <hr></hr>
            <div class="interview-nav-wrapper">
                <div onClick={e => categoryBtn("결재자매칭")} class="interview-nav">결재자매칭</div>
                <div onClick={e => categoryBtn("피치이벤트")} class="interview-nav">피치이벤트</div>
                <div onClick={e => categoryBtn("도입사례")} class="interview-nav">도입사례</div>
            </div>
            {/* <button onClick={searchFilter}/> */}
            <h3>인터뷰 목록</h3>
            {status === "도입사례" ? (
                <div>
                    <div style={{ display: "flex" }}>
                        <div style={{ width: "80%" }}>
                            <ServiceList lists={array} />
                        </div>
                        <div style={{ width: "20%" }}>
                            <InterviewMonth />
                            <Link to={{pathname:`/Board`,status:"월간"}}><div>월간 TOP 20 전체보기</div></Link>
                            {/* <div onClick={e => categoryBtn("월간")}>월간 TOP 20 전체보기</div> */}
                        </div>
                    </div>
                </div>
            ) : (
                status === "결재자매칭" ? (
                    <div>
                        결재자매칭
                        <div class="matching-box">
                            매치드는 결재자 매칭을 통해 경영과제를 해결해 드리는 서비스입니다.
                        </div>
                        <div class="matching-box">
                            계속 비결재 담당자만 만나실 건가요?
                        </div>
                        <div class="matching-box">
                            결재를 하는 사람을 만나기 힘드시지 않나요?
                        </div>
                        <div class="matching-box">
                            매지드는 핵심인물(결재자)를 다이렉트로 연결 시켜 드리고 있습니다.
                        </div>
                        <div class="matching-box">
                            기업일반사항(규모,창업년수,지역 등)을 검색하여 매칭을 하실 수 있습니다.
                        </div>
                        <div class="matching-box">
                            결재자의 니즈를 검색하여 매칭을 하실 수 있습니다.
                        </div>
                        <div class="matching-box">
                            또한 매일 매치드가 회원님의 니즈와 기업정보를 기준으로 경영과제 해결을 위한 기업을 추천 드립니다.
                        </div>
                        < button onClick={e => categoryBtn("피치이벤트")}>피치이벤트 바로가기</button>
                    </div>
                ) : (
                    <div>
                        피치이벤트
                        <div class="matching-box">
                            다양한 주제로 기업핵심인물(결재자)의 생각을 들을 수 있는 피치이벤트를 제공 하고 있습니다.
                        </div>
                        <div class="matching-box">
                            이벤트 참여를 통해 여러 기업의 결재자와 친목/상담/소통 하실 수 있습니다.
                        </div>
                        <div class="matching-box">
                            이벤트는 종류에 따라 매월, 매주 진행하고 있습니다.
                        </div>
                        <div class="matching-box">
                            이벤트를 통해 귀사의 경영과제를 해결할 방법을 찾으실 수 있습니다.
                        </div>
                        <div class="matching-box">
                            이벤트를 통해 귀사의 경영과제를 해결할 카운셀러를 찾으실 수 있습니다.
                        </div>
                    </div>
                )

            )}

        </nav>
    )
}


export default Service;