import React from "react";
import { Link } from 'react-router-dom'

function InterviewList(props) {
    // console.log(items)
    return (
        <div class="interview-list-box">{props.lists.map(list => (
            <div class="interview-list-note">
                <div class="interview-list-owner">
                    <div class="interview-list-font">{list.category}</div>
                    <div class="interview-list-font">카테고리</div>
                </div>
                <div><img src={list.image}/></div>
                <Link to={`/Interview/${list.id}`}>{list.title}</Link>
                <div class="interview-list-font">직원수:{list.employee}</div>
                <div class="interview-list-font">업종:{list.line}</div>
                <div class="interview-list-font">창립:{list.years}</div>
                <div class="interview-list-font">결재자연령:{list.age}</div>
                <div class="interview-list-font">사업유형:{list.type}</div>
            </div>
        ))
        }
        </div>
    )
}
export default InterviewList;