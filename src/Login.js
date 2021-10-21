import React, { useState, useContext } from "react";
import Axios from 'axios'
import { UserContext } from "./UserContext";

function Login() {
    const [name, setName] = useState("");
    const { user, setUser } = useContext(UserContext);
    const [userId, setUserId] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const value = localStorage.getItem('name')
    // const some=localStorage.getItem('some')
    // const getBtn=()=>{
    //     console.log(localStorage.getItem('some'))
    // }

    // const LocalBtn = () => {
    //         localStorage.setItem("name", JSON.stringify(name));
    //     }
    const LoginBtn = () => {
        Axios.post('https://makeup-home.com/Login', {
        // Axios.post('http://localhost:3001/Login', {
            // Axios.post('https://makeup-home.com/api/insert',{
            userId: userId,
            userPassword: userPassword
        })
            .then((response) => {
                if (response.data[0]) {
                    if(response.data[0].authorization==="true"){
                        localStorage.setItem("name", response.data[0].userId)
                    window.location.href = '/'
                    }else{
                        alert("회원인증이 완료되어야 로그인이 가능합니다")
                    }
                    
                    // setUser([response.data[0].id, response.data[0].userId])
                } else {
                    alert("아이디 또는 비밀번호가 틀립니다")
                }
            })
        // {console.log(response.data[0].id)})

    }
    const LogoutBtn = () => {
        localStorage.setItem("name", null)
        window.location.href = '/'
    }
    return (
        <div class="signup-page">
            <div class="signup-content">
                <h3>매치드 서비스 소개</h3>
                <h3>컨텐츠 영역</h3>
                <h3>컨텐츠 수령 후 작성</h3>
            </div>
            {value === "null" ?
                (<div>
                    <div class="signup-container">
                    <h3>로그인</h3>
                        <div>
                            아이디 <input type="text" name="userId" onChange={(e) => {
                                setUserId(e.target.value)
                            }}></input>
                        </div>
                        <div>
                            비밀번호 <input type="password" name="userPassword" onChange={(e) => {
                                setUserPassword(e.target.value)
                            }}></input>
                        </div>
                        <button onClick={LoginBtn}>
                            로그인하기
                        </button>
                        {/* <button onClick={getBtn}>
                            겟 버튼
                        </button> */}
                        {/* <button onClick={LogoutBtn}>
                            로그아웃 버튼
                        </button> */}
                    </div>
                </div>)
                :
                (<div>
                    이미 로그인 되었습니다
                </div>)}

        </div>
    )
}


export default Login;