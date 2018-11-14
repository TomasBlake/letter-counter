import React from 'react';

const userOutput = (props) => {
    return(
        <div style = {props.style}>
            <p>{props.userName}</p>
            <input type= 'text' onChange = {props.changed} value = {props.userName} />
            <p>{props.par1}</p>
            <p>{props.par2}</p>
        </div>
    )
};

export default userOutput;