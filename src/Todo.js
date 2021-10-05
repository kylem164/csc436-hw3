import React from 'react'
export default function Todo ({ title, description, dateCreated, complete, dateCompleted }) {
    const style = {
        fontSize: 11
    }
    return (
        <div>
            <b>{title}</b> - <i>{description}</i>
            <input type="checkbox" checked={complete} />
            <br/>
            <text style={style}> dateCreated: {dateCreated} </text>
            :
            <text style ={style}> dateCompleted: {dateCompleted} </text>
            <br/>
            <br/>
        </div>  
    )
}