import React  from 'react'
import Counter from './Counter';
import { useState } from 'react';
export default function App() {
  //let name =''
  const [name, setName] = useState('Neha')   //state
  const handleclick = () =>{
   /* name ='Akash';
    alert(name);*/
    setName("Akash");
  }
  return (
    <div>
{/*<h1>Hello {name}</h1>
      <button onClick={handleclick}>Click</button>*/}
      <Counter />
    </div>
  ) 
}
