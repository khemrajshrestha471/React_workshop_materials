import React, { useState } from 'react'



const App = () => {


  const [counter, setCount] = useState(1);

  // counter holds resent values where as setCount holds updated value


const IncNum = () => {
  setCount(counter * 2);
}

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={IncNum}>*2</button>
    </div>
  )
}

export default App 