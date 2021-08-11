import React from "react";

export default function Title(props) {

    const { title } = props;

    return (
        <div className='title'>
            <h1>{title}</h1>
        </div> 
    )

}