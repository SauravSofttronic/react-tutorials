import React from 'react'

function JSX5() {
    const something = 'saurav'
    const a = 10, b = 20;
    const someFunction = () =>{
       if (a>b) {
        return (
        <h1>saurav from if statement</h1>
           )
       } else {
           return (
       <h1>saurav from else statement</h1>
           )
       }
    }
    
    const today = new Date();                                 //from 1/1/1979 TO current timing

  return (
      <div>
          
          <h1>{something}</h1>
          {
              someFunction()
          }
          <h1>{today.toString()}</h1>
          <h1>{ Date.now()}</h1>
    </div>
  )
}

export default JSX5