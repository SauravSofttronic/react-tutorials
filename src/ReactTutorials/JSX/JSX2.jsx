import React from 'react'

function JSX2() {
//non premitive data types
const arr = [100,200,300,400,500]

    const obj = {
        name: 'Saurav',
        age: 2000,
        info: {
            city: 'nagpur',
            state: "MH",
            courses: ['c','c++','java','python']
        }
    }
    
  return (
      <div>
          <h1>{arr}</h1>
          <h1>{
              arr.map((val, i) =>
                  
                //  (`${val}, `)                                       //main logic ", " print
                //  (`${i} - ${val}, `  )                             //index print logic
                (`${val}${i === arr.length - 1 ? '.' : ','} `)       // last me " . "  print           
              )}
          </h1>
          <hr/>
          {
              arr.map((val, i) =>
              (
                <h1 key={i}>
                      {val}
                      {i === arr.length - 1 ? '.' : ','}
                </h1>
              )
              )
          }          
      </div>
  )
}

export default JSX2