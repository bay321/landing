import React, { useState, useEffect } from "react";
import Axios from 'axios'
// import { Link } from 'react-router-dom'
// const items=[
//     {title:"안녕하세요",name:3},
//     {title:"반갑습니다",name:5},
//     {title:"인사드려요",name:7}]

function BoardWrite() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const Submit = () => {
        Axios.post('https://makeup-home.com/BoardWrite', {
            // Axios.post('http://localhost:3001/BoardWrite', {
            // Axios.post('https://makeup-home.com/api/insert',{
            author: localStorage.getItem('name'),
            title: title,
            description: description
        }).then(window.location.href = '/Board')
        // {console.log(response.data[0].id)})

    }

    return (
        <nav>
            <h3>글을 써볼까요?</h3>
            <div>
                제목: <input type="textarea" name="title" onChange={(e) => {
                    setTitle(e.target.value)
                }}></input>
            </div>
            <div>
                내용: <input type="textarea" name="description" onChange={(e) => {
                    setDescription(e.target.value)
                }}></input>
            </div>
            <button onClick={Submit}>
                글 작성하기
            </button>
        </nav>
    )
}


export default BoardWrite;