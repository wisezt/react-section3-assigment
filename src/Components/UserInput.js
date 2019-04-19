import React from 'react';

const userInput = (props) =>{
    const myStyle ={
        border: '2px solid red'  
    };

    return (
    <div>
   <input
       style={myStyle}
       type="text" onChange={props.changed}
   value={props.currentName}/>

    </div>



    )

};




export default userInput;