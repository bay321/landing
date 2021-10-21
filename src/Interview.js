import React, { useState, useEffect } from "react";
import Axios from 'axios'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import InterviewList from "./InterviewList";
import InterviewMonth from "./InterviewMonth";
const interviewOptions = [
    { value: '', label: '전체' },
    { value: '사장이야기', label: '사장이야기' },
    { value: '사업이야기', label: '사업이야기' },
    { value: '월간', label: '월간 TOP 20' },
    { value: '특집인터뷰', label: '특집 인터뷰' }
]
const lineOptions = [
    { value: '', label: '전체' },
    { value: '인사', label: '인사' },
    { value: '마케팅', label: '마케팅' },
]
const typeOptions = [
    { value: '', label: '전체' },
    { value: 'BtoB', label: 'BtoB' },
    { value: 'BtoC', label: 'BtoC' }
]
const yearsOptions = [
    { value: '', label: '전체' },
    { value: '12', label: '12' },
    { value: '14', label: '14' },
    { value: '15', label: '15' }
]
const employeeOptions = [
    { value: '', label: '전체' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '13', label: '13' },
    { value: '14', label: '14' },
    { value: '35', label: '35' }
]
const ageOptions = [
    { value: '', label: '전체' },
    { value: '22', label: '22' },
    { value: '25', label: '25' },
    { value: '30', label: '30' }
]
const locationOptions = [
    { value: '', label: '작동안합니다' },
    { value: '경기', label: '경기' },
    { value: '수도권', label: '수도권' },
    { value: '지방', label: '지방' }
]
function Interview(props) {
    
    // useEffect(() => {
    //     fetchItems()
    // },[])
    useEffect(() => {
        fetchLists()
    }, [])
    // useEffect(() => {
    //     month()
    // })

    const [text, setText] = useState("")
    const [array, setArray] = useState([])
    const [items, setItems] = useState([])
    const [lists, setLists] = useState([])
    // const [monthLists, setMonthLists] = useState([])
    const [status, setStatus] = useState("전체")
    const [category, setCategory] = useState("")
    const [line, setLine] = useState("")
    const [type, setType] = useState("")
    const [years, setYears] = useState("")
    const [employee, setEmployee] = useState("")
    const [age, setAge] = useState("")
    const [location, setLocation] = useState("")
    
    // const month=()=>{
    //     if(props.location.status=== undefined){
    //         return
    //     }else{
    //         setStatus(props.location.status)
    //     }
    // } 
    const categoryBtn=(value)=>{
        if(value==="전체"){
            setArray(lists)
        }else{
            setArray(lists.filter(list=>list.category===value))
        // alert(array[0].data)
        // console.log(array)
        }
        setStatus(value)
    }

    
    const searchFilter=()=>{
        if(text!==""){
            setArray(lists.filter(list=>list.company.includes(text)))
        }else{
            setArray(lists.filter(
            list=>list.category.includes(category)
            &&list.line.includes(line)            
            &&list.type.includes(type)
            &&list.years.includes(years)
            &&list.employee.includes(employee)
            &&list.age.includes(age)
            &&list.location.includes(location)
            ))
        }
            
        console.log(array)
    }
    const fetchLists = () => {
        Axios.post(`https://makeup-home.com/Interview`
        // Axios.post(`http://localhost:3001/Interview`
            // Axios.post('https://makeup-home.com/api/insert',{
        ).then((response) => {
            setLists(response.data)
            setArray(response.data)
        })
        // console.log("hi")
    }

    // const statusFiletr = ()=> {
    //     setArray(lists.filter(list=>list.category==value))
    // }

    // const fetchItems = () => {
    //     Axios.get(`http://localhost:3001/Board`
    //         // Axios.post('https://makeup-home.com/api/insert',{
    //     ).then((response) => {
    //         setItems(response.data)
    //     })
    // }

    return (
        <nav>
            <h3>결재자인터뷰{line}</h3>{status}
            <hr></hr>
            <div class="interview-nav-wrapper">
                <div onClick={e => categoryBtn("전체")} class="interview-nav">전체</div>
                <div onClick={e => categoryBtn("사장이야기")} class="interview-nav">사장이야기</div>
                <div onClick={e => categoryBtn("사업이야기")} class="interview-nav">사업이야기</div>
                <div onClick={e => categoryBtn("월간")} class="interview-nav">월간 TOP 20</div>
                <div onClick={e => categoryBtn("특집인터뷰")} class="interview-nav">특집 인터뷰</div>
            </div>
            {status==="전체"?(
                <div class="interview-search-wrapper">
                <div class="interview-row-wrapper">
                    <div class="interview-search">
                        키워드<input type="text" onChange={(e) => {setText(e.target.value)}} placeholder="기업명"></input>
                    </div>
                    <div class="interview-select-wrapper">
                        <div class="interview-font">인터뷰</div>
                        <div class="interview-selcet">
                            <Select
                                onChange={(e) => {setCategory(e.value)}}
                                defaultValue={interviewOptions[0]}
                                options={interviewOptions} />
                        </div>
                    </div>
                </div>
                <div class="interview-row-wrapper">
                    <div class="interview-select-wrapper">
                        <div class="interview-font">업종</div>
                        <div class="interview-selcet">
                            <Select
                                onChange={(e) => {setLine(e.value)}}
                                defaultValue={lineOptions[0]}
                                options={lineOptions} />
                        </div>
                    </div>
                    <div class="interview-select-wrapper">
                        <div class="interview-font">사업유형</div>
                        <div class="interview-selcet">
                            <Select
                                onChange={(e) => {setType(e.value)}}
                                defaultValue={typeOptions[0]}
                                options={typeOptions} />
                        </div>
                    </div>
                    <div class="interview-select-wrapper">
                        <div class="interview-font">창립년수</div>
                        <div class="interview-selcet">
                            <Select
                                onChange={(e) => {setYears(e.value)}}
                                defaultValue={yearsOptions[0]}
                                options={yearsOptions} />
                        </div>
                    </div>
                </div>
                <div class="interview-row-wrapper">
                    <div class="interview-select-wrapper">
                        <div class="interview-font">직원수</div>
                        <div class="interview-selcet">
                            <Select
                                onChange={(e) => {setEmployee(e.value)}}
                                defaultValue={employeeOptions[0]}
                                options={employeeOptions} />
                        </div>
                    </div>
                    <div class="interview-select-wrapper">
                        <div class="interview-font">연령</div>
                        <div class="interview-selcet">
                            <Select
                                onChange={(e) => {setAge(e.value)}}
                                defaultValue={ageOptions[0]}
                                options={ageOptions} />
                        </div>
                    </div>
                    <div class="interview-select-wrapper">
                        <div class="interview-font">지역(X)</div>
                        <div class="interview-selcet">
                            <Select
                                onChange={(e) => {setLocation(e.value)}}
                                defaultValue={locationOptions[0]}
                                options={locationOptions} />
                        </div>
                    </div>
                </div>
                <button onClick={searchFilter}>검색</button>
            </div>
            ):(
                <div>
                    
                </div>
            )}
            
            <button onClick={searchFilter}/>
            <h3>인터뷰 목록</h3>
            {status==="월간"?(
                <div style={{ width: "20%" }}>
                    <InterviewMonth/>
                </div>
            ):
            (<div style={{ display: "flex" }}>
                <div style={{ width: "80%" }}>
                    <InterviewList lists={array} />
                </div>
                <div style={{ width: "20%" }}>
                    <InterviewMonth/>
                    <div onClick={e => categoryBtn("월간")}>월간 TOP 20 전체보기</div>
                </div>

            </div>
            )}
            

            <Link to={`/BoardWrite`}><div>글쓰기</div></Link>
            {items.map(item => (
                <h1 key={item.id}><Link to={`/Board/${item.id}`}>아이디: {item.id} 제목: {item.title}</Link></h1>
            ))}
        </nav>
    )
}


export default Interview;