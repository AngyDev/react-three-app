import React from 'react'

export default function Button(props) {
    return (
        <button className="button" type={props.type}>{props.text}</button>
    )
}
