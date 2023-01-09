import React, { Suspense, useState } from "react";
import {User} from './model'
import AddList from './components/AddList'


const Home = React.lazy(() => import('./pages/home'));


type Person = {
  name:String,
  age?:Number
}


const  App:React.FC = () => {

  const [state,setstate] = useState<String | number[]>('')

  const user: User = {
    name: "Hayes",
    id: 123
  };

  const Author:Person = {
    name:'Arun'
  }

  const messsage = (name:String) => {
    return (`hello ${name}`)
  }


  return (
    <div className="App">
      <h1>Hello World..{user.name}!</h1>
      <h2 onClick={() => setstate('show')}>Click</h2>
      {state && (
         <Suspense fallback={<div>Loading...</div>}>
            <Home/>
        </Suspense>
       
      )}
      <AddList/>
    </div>
  );
}

export default App;