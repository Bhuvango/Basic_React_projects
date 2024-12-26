import React from 'react'

export default function About(props) {
    return (
        <div>Welcome 
            {props.name}   {props.age}
        </div>
    )
}