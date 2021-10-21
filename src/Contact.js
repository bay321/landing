import React, { useState, useEffect } from "react";
import Axios from 'axios'

function Contact() {

    const [name, setName] = useState("")
    const [company, setCompany] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const signUpBtn = () => {
        Axios.post('https://makeup-home.com/Contact', {
            // Axios.post('http://localhost:3001/Contact', {
            // Axios.post('https://makeup-home.com/api/insert',{
            name: name,
            company: company,
            email: email,
            phone: phone,
            title: title,
            description:description
        }).then(window.location.href = '/Contact')
            .then(alert("문의주셔서 감사합니다. 빠른 시간 내 연락드리겠습니다. 감사합니다."))
    }

    return (
        <div>
            <h3>Contact Us</h3>
            <hr></hr>
            <div>
                성명 <input type="text" name="name"
                    onChange={(e) => {
                        setName(e.target.value)
                    }}></input>
            </div>
            <div>
                회사명 <input type="text" name="company"
                    onChange={(e) => {
                        setCompany(e.target.value)
                    }}></input>
            </div>
            <div>
                이메일 <input type="text" name="email"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}></input>
            </div>
            <div>
                휴대폰(숫자만) <input type="text" name="phone"
                    onChange={(e) => {
                        setPhone(e.target.value)
                    }}></input>
            </div>
            <div>
                제목 <input type="text" name="title"
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}></input>
            </div>
            <div style={{ textAlign: "center" }}>
            <input type="textarea" name="title"
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }} style={{width:"80%",height:"40vh"}}></input>
            </div>
            <div style={{ textAlign: "center" }}>
                <button onClick={signUpBtn}>
                    문의등록
                </button>
            </div>

        </div>
    )
}


export default Contact;