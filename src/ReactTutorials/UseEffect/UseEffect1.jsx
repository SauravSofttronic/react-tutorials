import React, { useEffect, useState } from 'react'

function UseEffect1() {

    const [count, setcount] = useState(0)
    const [count1, setcount1] = useState(0)
    const [count2, setcount2] = useState(0)

    console.log('called');
    
    useEffect(() => {
        console.log('useEffect called on every re-render');
    })  //web site  componant re-render hongi tab exicute
        //  will be called/ exucted on every componant re-render
    
    
    useEffect(() => {
        console.log('useEffect called on every first render');
    }, [])//  will be called/ exucted only first componant render


    useEffect(() => {
        console.log('useEffect called on every count render');
        //depend on count
    }, [count])//  will be called/ exucted only on  count value change
    // []  -->dependency array / list

    useEffect(() => {
        console.log('useEffect called on every count1 render');
    }, [count1])//  will be called/ exucted only on  count1 value change
  
    useEffect(() => {
        console.log('useEffect called on every count2 render');
    }, [count2])//  will be called/ exucted only on  count1 value change
  

    useEffect(() => {
        console.log('useEffect called on every count1 or Count2 render');
    }, [count1,count2])//  will be called/ exucted only on  count1 or count2 value change
  


    console.log('state changed to', count);
    
  return (
      <div>
          <h1>count - {count}</h1>
          <button onClick={() => setcount(count + 1)}>Click</button>
          
          <h1>count1 - 1{count1}</h1>
          <button onClick={() => setcount(count1 +1)}>Click1</button>
          
          <h1>count - 2{count2}</h1>
          <button onClick={() => setcount(count2 +1)}>Click2</button>
      </div>
  )
}

export default UseEffect1