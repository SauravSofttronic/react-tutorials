import React, { useState } from 'react'

function UseStateArrays() {

  const [arr, setarr] = useState([])
  // ________________________________________
  const arr1 = [10, 20, 30]                              //  type  =  3
  const changeArr = () => {

    // setarr([...arr, 10])                //spread oprater => ...arr  ( new array creatte karta haii)
    //  out put :   state -> 10   1010    101010       

    // setarr(prevState => [...prevState, 10, 20])       //output   10- 10 20 10 20

    // __________________________________________
    // setarr(prevState => [...prevState, ...arr1])    //        output  10  1020  102030      //  type  =  3.1

    setarr(prevState => [...arr1, 'someting', ...prevState])    //  output 102030someting  102030someting       //  type  =  3.2


  }

  console.log(arr);
  return (
    <div>
      <h1>{arr}</h1>
      <button onClick={changeArr}>Change Array</button>
    </div>
  )
}

export default UseStateArrays
