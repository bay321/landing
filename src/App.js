import React, { useState, useEffect } from 'react';
// import awsconfig from './aws-exports';
import mainpic1 from './assets/mainpic1.jpg';
import logo from './assets/logo.png';
import community from './assets/community.png';
import number from './assets/number.png';
import './App.css';
import Axios from 'axios'

function App() {


  const [name, setName] = useState('')
  const [birthday, setBirthday] = useState('')
  const spec = () => {
    Axios.get('http://node-env.eba-y8awnjvb.ap-northeast-2.elasticbeanstalk.com/data').then((response) => {
      alert(response.data[0].name)
    })
  }
  const spec2 = () => {
    // Axios.get(`http://localhost:3001/name/${name}`
    // ).then((response) => {
    //   setList([{ name: response.data[0].name, profile: response.data[0].id }])
    // })
    // .then(window.location.href = '/${name}')

    Axios.get('http://node-env.eba-y8awnjvb.ap-northeast-2.elasticbeanstalk.com/data').then((response) => {
      alert(response.data[1].name)
    })
  }
  const submit = () => {
    Axios.post('http://node-env.eba-y8awnjvb.ap-northeast-2.elasticbeanstalk.com/api/insert',{
      name:name,
      birthday:birthday
    })
  }

  return (
    <div>
      <img class="logo" src={logo} />
      <div 
      // class="background"
      style={{
        backgroundImage: `url(${mainpic1})`, 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition:"center", 
        width: "100%", 
        height: "100vh"
      }}
      >
        <div class="title">
          원하시는 장소에서
          <br></br>
          편하게 메이크업을 받고 싶으신가요?
        </div>
        <div class="title1">
          전문적인 메이크업 아티스트들이
          <br></br>
          원하시는 장소로 찾아갑니다.
        </div>
      </div>
      <div class="desc">
        메이크업 홈은 다음과 같은 방식으로<br></br>서비스를 제공해드립니다.
      </div>
      <div class="process">
        <div class="process-container">
          <div>
            <img class="process-number" src={number}></img>
          </div>
          <img class="process-img" src={community}></img>
          <div>
            원하시는 장소에서 편하게<br></br> 예약을 합니다
          </div>
        </div>
        <div class="process-container">
          <div>
            <img class="process-number" src={number}></img>
          </div>
          <img class="process-img" src={community}></img>
          <div>
            메이크업 홈이 찾아갑니다.
          </div>
        </div>
        <div class="process-container">
          <div>
            <img class="process-number" src={number}></img>
          </div>
          <img class="process-img" src={community}></img>
          <div>
            수년간의 경험이 있는 전문가들로만 구성을 하였습니다.
          </div>
        </div>
      </div>
        <label>이름:</label>
        <input type="text" name="name" onChange={(e) => {
          setName(e.target.value)
        }}></input>
        <label>생일:</label>
        <input type="text" name="birthday" onChange={(e) => {
          setBirthday(e.target.value)
        }}></input>
        <button onClick={submit}>Submit</button>
      {/* ${Axios.get('http://node-env.eba-y8awnjvb.ap-northeast-2.elasticbeanstalk.com/').then((response) => {
      console.log(response.data)
    })} */}
    {/* ${Axios.get('http://node-env.eba-y8awnjvb.ap-northeast-2.elasticbeanstalk.com/data').then((response) => {
      console.log(response.data[0].id)
    })} */}
    <h1 onClick={()=>{spec()}} class="App">홍길동씨 이름</h1>
    <h1 onClick={()=>{spec2()}} class="App">김갑수씨 이름</h1>
      <div class="process-container">
        <div>
          지금 바로 예약하세요
        </div>
        <div>
          이름 <input type="text" name="name" />
        </div>
        <div>
          전화번호 <input type="text" name="number" />
        </div>
        <div>
          날짜 <input type="text" name="date" />
        </div>
        <div>
          행사종류 <input type="text" name="event" />
        </div>
        <button>
          예약하기
        </button>
        <hr></hr>
        <div>
          아티스트 등록 문의 010-2250-4120
        </div>
      </div>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        인스타 링크
      </a>

    </div>
  );
}

export default App;
