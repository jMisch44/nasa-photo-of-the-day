import React from "react";

export default function Copyright(props) {
    const { copyright } = props;

    return (
        <p className='copyright'>{copyright}</p>
    )
}