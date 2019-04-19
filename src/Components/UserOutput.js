import React from 'react';
import './UserOutput.css';

const userOutput = (props) =>{
    return (
        <div className="UserOutput">
            <p>User Name: {props.userName}</p>
            <p>Some random text! 2</p>
        </div>



    )

};




export default userOutput;