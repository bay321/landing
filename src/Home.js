import React from "react";

function Home(){
    const value=localStorage.getItem('name')
    const LogoutBtn = () => {
        localStorage.setItem("name", null)
        window.location.href = '/'
    }
    return(
        <nav>
            <h3>홈페이지</h3>
            {value==="null"?
            (<div>
                <h3>안녕하세요</h3>
            </div>)
            :
            (<div>
                <h3>반갑습니다 {value}님</h3>
                <button onClick={LogoutBtn}>
                로그아웃 버튼
                </button>
            </div>)}
            
        </nav>
    )
}


export default Home;