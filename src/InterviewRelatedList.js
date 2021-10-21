import React from "react";
import { Link } from 'react-router-dom'

function InterviewRelatedList(props) {
    // console.log(items)
    return (
        <div class="interview-list-box">{props.lists.map(list => (
            <div class="interview-list-note">
                <div><img src={list.image}/></div>
                <Link to={`/Interview/${list.id}`}>{list.title}</Link>
                <div class="interview-list-font">{list.company} {list.name}</div>
            </div>
        ))
        }
        </div>
    )
}
export default InterviewRelatedList;