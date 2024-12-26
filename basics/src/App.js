import Header from "./Header";

import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Greeting from './Greeting'

function App() {
  let name = 'Bhuvan';
  return (
    <div>
    <h1>Hello {name}</h1>
    <Header />
    <Home name = {name} age = {24}/>
    <Contact />
    <About />
    <Greeting name='Bhuvan'/>
    <Greeting name='Charan'/>
    </div>
    
   
    /*<div>
   {/*<h1>Hello from ReactJS</h1>
   <Greeting name = {'Akash'}/>
   <Greeting name = {'Akash'}/>
   {/*<Home name = {Bhuvan}  age = {22}/>
   <Contact/>
   <About/>
   </div>*/
  );
}

export default App;

