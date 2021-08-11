import React from "react";

export default function Explanation(props){
    const { explanation } = props;

    return (
        <div>
            <p>{explanation}</p>
        </div>
    )
}
