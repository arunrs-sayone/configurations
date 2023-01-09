import React, { Suspense, useState } from "react"

const Home = React.lazy(() => import('pages/home'));


const App = () => {

  const [state,setstate] = useState('')

  const user = {
    name: "Hayes",
    id: 123
  };

  const Author= {
    name:'Arun'
  }

  const messsage  = (name) => {
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
    </div>
  );
}

export default App;