import React from "react";
import './App.css';
import {Link} from 'react-router-dom'
import mafin from './assets/mafin.png';
function Nav(){
    const value=localStorage.getItem('name')
    return(
        <div>
            <Link to='/'>
                <img class="logo" src={mafin} />
            </Link>
            {/* <nav class="nav-links"> */}
                {value==="null"?(
                <div class="nav-links">
                <Link to='/Interview'>
                    <h3>결재자인터뷰</h3>
                </Link>
                <Link to='/Service'>
                    <h3>서비스소개</h3>
                </Link>
                <Link to='/Introduction'>
                    <h3>회사소개</h3>
                </Link>
                <Link to='/Contact'>
                    <h3>Contact Us</h3>
                </Link>
                <Link to='/SignUp'>
                    <h4>회원가입</h4>
                </Link>
                <Link to='/Login'>
                    <h4>로그인</h4>
                </Link>
                {/* <Link to='/Board'>
                    <h3>게시판</h3>
                </Link> */}
                </div>):
                (<div class="nav-links">
                <Link to='/Board'>
                    <h3>Giver 게시판</h3>
                </Link>
                <Link to='/Search'>
                    <h3>결재자찾기</h3>
                </Link>
                <Link to='/Recommendation'>
                    <h3>오늘의 추천</h3>
                </Link>
                <Link to='/Meet'>
                    <h3>만나고 싶습니다</h3>
                </Link>
                <Link to='/Message'>
                    <h3>메시지</h3>
                </Link>
                <Link to='/Notice'>
                    <h3>공지사항</h3>
                </Link>
                </div>)}
            {/* </nav> */}
        </div>
    )
}


export default Nav;