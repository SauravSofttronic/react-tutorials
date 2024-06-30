import React from 'react'

function UseStateString() {
  return (//state variable
    const[name, setname] = useState('saurav')

    function changeName() {
        //setter function call
        //updates the state of name variableb to 'abc'
        setname('abc');
        console.log(name);
} 

    console.log(name);
    
  return (
      <div>
          <h1>{name}</h1>
          <button onClick={changeName}>Change Name</button>
    </div>
  )
  )
}

export default UseStateString