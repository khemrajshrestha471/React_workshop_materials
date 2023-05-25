import React, { useState } from 'react'



const App = () => {


  const [counter, setCount] = useState(1);


  // setcounter holds updated value and throught counter it render in the web page


const IncNum = () => {
  // setCount(5);
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
