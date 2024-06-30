import React, { useState} from 'react'

function UseStateNumber() {

    console.log('component rendered');

    const [age, setage] = useState('saurav')

  function changeage() {
    // setage(prevState => prevState + 100)
    // setage(prevState => prevState + 70)
    // setage(prevState => prevState + 30)

     setage(prevState => prevState + 'something')


    // setage(age + 10)
  
  
    // =================
  }
    
    return (
        <div>
            <h1>{age}</h1>
<button onClick={changeage}>ChangeAge</button>

          </div>
      )
}

export default UseStateNumber