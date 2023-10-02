import React, { useEffect, useState } from "react";




function Card(props){
    const [title, setTitle] = useState("")
    return(
        <div> 
            <p>{props.info.title}</p>
        </div>
    )
}
export default Card;