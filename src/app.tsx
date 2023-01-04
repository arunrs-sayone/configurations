import React from "react";

interface User {
  name: string;
  id: number;
}


function App() {

  const user: User = {
    name: "Hayes",
    id: 123
  };

  return (
    <div className="App">
      <h1>Hello World..{user.name}!</h1>
    </div>
  );
}

export default App;