import React, { useState, useMemo } from 'react';
import Nav from './Nav';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import Interview from './Interview';
import BoardWrite from './BoardWrite';
import BoardDetail from './BoardDetail';
import InterviewDetail from './InterviewDetail';
import Service from './Service';
import Introduction from './Introduction';
import Contact from './Contact';
import Note from './Note';
import NoteDetail from './NoteDetail';
import Board from "./components/screens/board/Board"
import Meet from "./components/screens/meet/Meet"
import Message from "./components/screens/message/Message"
import Notice from "./components/screens/notice/Notice"
import Recommendation from "./components/screens/recommendation/Recommendation"
import Search from "./components/screens/search/Search"
import './App.css';
// import Axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import { UserContext } from "./UserContext";
function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  // const [name, setName] = useState('')
  // const [birthday, setBirthday] = useState('')

  // const spec2 = () => {
    // Axios.get(`http://localhost:3001/name/${name}`
    // ).then((response) => {
    //   setList([{ name: response.data[0].name, profile: response.data[0].id }])
    // })
    // .then(window.location.href = '/${name}')

    // Axios.get('http://localhost:3001/data').then((response) => {
    //   alert(response.data[1].name)
    // })
    
    // Axios.get('https://makeup-home.com/data').then((response) => {
    //   alert(response.data[1].name)
    // })
  // }
  // const submit = () => {
  //   Axios.post('https://makeup-home.com/api/insert',{
  //     name:name,
  //     birthday:birthday
  //   })
  // }

  return (
    <Router>
    <div>
      {/* <div 
      style={{
        backgroundImage: `url(${mainpic1})`, 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition:"center", 
        width: "100%", 
        height: "100vh"
      }}
      >
      </div> */}
      <Nav/>
      <UserContext.Provider value={value}>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/SignUp" component={SignUp}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Interview" exact component={Interview}/>
          <Route path="/Board/:id" component={BoardDetail}/>
          <Route path="/Service" exact component={Service}/>
          <Route path="/Introduction" exact component={Introduction}/>
          <Route path="/Contact" exact component={Contact}/>
          <Route path="/Interview/:id" component={InterviewDetail}/>
          <Route path="/Note" exact component={Note}/>
          <Route path="/Note/:id" exact component={NoteDetail}/>
          <Route path="/BoardWrite" exact component={BoardWrite}/>
          <Route path="/Board" exact component={Board}/>
          <Route path="/Search" exact component={Search}/>
          <Route path="/Recommendation" exact component={Recommendation}/>
          <Route path="/Meet" exact component={Meet}/>
          <Route path="/Message" exact component={Message}/>
          <Route path="/Notice" exact component={Notice}/>
        </Switch>
      </UserContext.Provider>
    {/* <h1 onClick={()=>{spec2()}} class="App">김갑수씨 이름</h1>
      <div class="process-container">
        <div>
          지금 바로 예약하세요
        </div>
        <div>
          이름 <input type="text" name="name" onChange={(e) => {
          setName(e.target.value)
        }}></input>
        </div>
        <div>
          생일 <input type="text" name="birthday" onChange={(e) => {
          setBirthday(e.target.value)
        }}></input>
        </div>
        <button onClick={submit}>
          예약하기
        </button>
      </div> */}

    </div>
    </Router>
  );
}

export default App;
