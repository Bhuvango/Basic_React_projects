import React from 'react'

export default function Home(props) {
    return (
        <div>
            <h1>Home  Component</h1>
            <h1>Welcome {props.name}  
                {props.age}
            </h1>
        </div>
    )
}