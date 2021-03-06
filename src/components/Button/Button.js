import React from 'react'

export default function Button(props) {
    return (
        <button className="button" type={props.type} onClick={props.onClick}>{props.text}</button>
    )
}
