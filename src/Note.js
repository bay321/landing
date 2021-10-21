import React, { useState, useEffect } from "react";
import Axios from 'axios'
import {Link} from 'react-router-dom'
import './App.css';
// const items=[
//     {title:"안녕하세요",name:3},
//     {title:"반갑습니다",name:5},
//     {title:"인사드려요",name:7}]

function Note(){
    useEffect(()=>{
        fetchItems()
      },[])

      const [items, setItems] = useState([])

      const fetchItems = ()=>{
        Axios.get(`https://makeup-home.com/Note`
        // Axios.get(`http://localhost:3001/Note`
        // Axios.post('https://makeup-home.com/api/insert',{
        ).then((response) => {
            setItems(response.data) })
      }
    
    return(
        <nav>
            <h3>인명부입니다</h3>
            <div class="company-box">
                {items.map(item=>(    
                    <div class="company-note" key={item.id}>
                        <div>회사명: {item.id} 이름: {item.userId}</div>
                        <Link to={`/Note/${item.id}`}>
                            상세프로필 확인   
                        </Link>
                    </div>
                ))}
            </div>
        </nav>
    )
}


export default Note;