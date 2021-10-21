import React, { useState, useEffect } from "react";
import Axios from 'axios'
import {Link} from 'react-router-dom'

function NoteDetail({match}){
    useEffect(()=>{
        fetchItem()
      },[])
      const contact=()=>{
          alert(userId)
      }
      const [id, setId] = useState("")
      const [userId, setUserId] = useState("")

      const fetchItem = ()=>{
        Axios.get(`https://makeup-home.com/Note/${match.params.id}`
        // Axios.get(`http://localhost:3001/Note/${match.params.id}`
        // Axios.post('https://makeup-home.com/api/insert',{
        ).then((response) => {
            // console.log(response.data[0])
            setId(response.data[0].id)
            setUserId(response.data[0].userId)})
      }
    
    return(
        <nav>
            <h1>아이디: {id}</h1>
            <h1>유저이름: {userId}</h1>
            <button onClick={contact}>메시지보내기</button>
        </nav>
    )
}


export default NoteDetail;