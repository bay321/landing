import React, { useState, useEffect } from "react";
import Axios from 'axios'

function BoardDetail({match}){
    useEffect(()=>{
        fetchItem()
      },[])

      const [author, setAuthor] = useState("")
      const [title, setTitle] = useState("")
      const [description, setDescription] = useState("")

      const fetchItem = ()=>{
        Axios.get(`https://makeup-home.com/Board/${match.params.id}`
        // Axios.get(`http://localhost:3001/Board/${match.params.id}`
        // Axios.post('https://makeup-home.com/api/insert',{
        ).then((response) => {
            // console.log(response.data[0])
            setAuthor(response.data[0].author)
            setTitle(response.data[0].title)
            setDescription(response.data[0].description)})
      }
    
    return(
        <nav>
            <h1>제목: {title}</h1>
            <h1> 작성자: {author}</h1>
            <h1>게시판 내용: {description}</h1>
        </nav>
    )
}


export default BoardDetail;