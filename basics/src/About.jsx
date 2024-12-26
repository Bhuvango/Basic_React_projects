import React from 'react'

export default function About(props) {
    return (
        <div>About Component
            {props.name}   {props.age}
        </div>
    )
}