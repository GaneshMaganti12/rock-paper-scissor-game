import React from "react"


function Game(props){
    const {data, clickItem} = props

    const itemClick = () =>{
        clickItem(data)   
    }

    return(
        <li style={{marginRight: "20px"}}>
            <button onClick={itemClick}>{data}</button>
        </li>
    )
}

export default Game