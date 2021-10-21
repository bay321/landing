import React, { useState, useContext } from "react";
import Axios from 'axios'
import { UserContext } from "./UserContext";
function SignUp() {
  const { user, setUser } = useContext(UserContext);
  const [userId, setUserId] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState("");

  const signUpBtn = () => {
    Axios.post('https://makeup-home.com/IdCheck', {
    // Axios.post('http://localhost:3001/IdCheck', {
      userId: userId
    })
      .then((response) => {
        if (response.data[0]) {
          alert("이미 존재하는 아이디입니다.")
        } else {
          if (userPassword === passwordCheck) {
            Axios.post('https://makeup-home.com/SignUp', {
            // Axios.post('http://localhost:3001/SignUp', {
              // Axios.post('https://makeup-home.com/api/insert',{
              userId: userId,
              userPassword: userPassword
            }).then(window.location.href = '/Login')
              .then(alert("회원가입이 성공적으로 되었습니다. 가입요청 후 심사를 거치면 회원가입이 완료됩니다."))
          }
          else {
            alert("패스워드를 다시 확인해주세요")
          }
        }
        // console.log(response.data[0])
      })
  }


  // Axios.get('http://localhost:3001/data').then((response) => {
  //   alert(response.data[1].name)
  // })


  // const idCheckBtn = async () => {
  //   await Axios.post('http://localhost:3001/IdCheck',{
  //   }).then(alert(response))
  // }


  //   const signUpBtn = async () => {
  //     if( userPassword===passwordCheck){
  //       await Axios.post('http://localhost:3001/SignUp',{
  //         // Axios.post('https://makeup-home.com/api/insert',{
  //           userId:userId,
  //           userPassword:userPassword
  //     }).then(window.location.href = '/Login')
  //     .then(alert("회원가입이 성공적으로 되었습니다"))  
  //     }
  //     else{
  //         alert("패스워드를 다시 확인해주세요")
  //     }

  // }

  return (
    <div class="signup-page">
      <div class="signup-content">
        <h3>매치드 서비스 소개</h3>
        <h3>컨텐츠 영역</h3>
        <h3>컨텐츠 수령 후 작성</h3>
      </div>
      <div class="signup-container">
        <h3>회원가입 요청</h3>
        <div>가입요청 후 심사를 거쳐야 회원가입이 완료됩니다.</div>
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
        <div>
          비밀번호 확인<input type="password" name="passwordCheck" onChange={(e) => {
            setPasswordCheck(e.target.value)
          }}></input>
        </div>
        <button onClick={signUpBtn}>
          회원가입 요청
        </button>
      </div>
    </div>
  )
}


export default SignUp;