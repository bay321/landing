import React, { useState, useEffect } from "react";
import Select from 'react-select'
import { Link } from 'react-router-dom'
const options = [
    { value: 'all', label: '전체' },
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

function InterviewSearch(props) {
    // console.log(items)
    const [status, setStatus] = useState("")

    return (
        <div>
            <div class="interview-nav-wrapper">
                <div onClick={e => setStatus("전체")} class="interview-nav">전체</div>
                <div onClick={e => setStatus("사장이야기")} class="interview-nav">사장이야기</div>
                <div onClick={e => setStatus("사업")} class="interview-nav">사업이야기</div>
                <div onClick={e => setStatus("월간")} class="interview-nav">월간 TOP 20</div>
                <div onClick={e => setStatus("특집인터뷰")} class="interview-nav">특집 인터뷰</div>
            </div>
            <div class="interview-search-wrapper">
                <div class="interview-row-wrapper">
                    <div class="interview-search">
                        키워드<input type="text" placeholder="기업명, 내용, 키워드"></input>
                    </div>
                    <div class="interview-select-wrapper">
                        <div class="interview-font">인터뷰</div>
                        <div class="interview-selcet">
                            <Select
                                defaultValue={options[0]}
                                options={options} />
                        </div>
                    </div>
                </div>
                <div class="interview-row-wrapper">
                    <div class="interview-select-wrapper">
                        <div class="interview-font">업종</div>
                        <div class="interview-selcet">
                            <Select
                                defaultValue={options[0]}
                                options={options} />
                        </div>
                    </div>
                    <div class="interview-select-wrapper">
                        <div class="interview-font">사업유형</div>
                        <div class="interview-selcet">
                            <Select
                                defaultValue={options[0]}
                                options={options} />
                        </div>
                    </div>
                    <div class="interview-select-wrapper">
                        <div class="interview-font">창립년수</div>
                        <div class="interview-selcet">
                            <Select
                                defaultValue={options[0]}
                                options={options} />
                        </div>
                    </div>
                </div>
                <div class="interview-row-wrapper">
                    <div class="interview-select-wrapper">
                        <div class="interview-font">직원수</div>
                        <div class="interview-selcet">
                            <Select
                                defaultValue={options[0]}
                                options={options} />
                        </div>
                    </div>
                    <div class="interview-select-wrapper">
                        <div class="interview-font">연령</div>
                        <div class="interview-selcet">
                            <Select
                                defaultValue={options[0]}
                                options={options} />
                        </div>
                    </div>
                    <div class="interview-select-wrapper">
                        <div class="interview-font">지역</div>
                        <div class="interview-selcet">
                            <Select
                                defaultValue={options[0]}
                                options={options} />
                        </div>
                    </div>
                </div>
                <button>검색</button>
            </div>
        </div>
    )
}
export default InterviewSearch;