import React from 'react'

function JSX3() {
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
          <h1>{obj.name}</h1>
          <h1>{obj.age}</h1>
          <h1>{obj.info.city}</h1>
          <h1>{obj.info.state}</h1>
          <h1>{obj.info.courses}</h1>
          <h1>{obj.info.courses[0]}</h1>
          <h1>{obj.info.courses[1]}</h1>
          <h1>{obj.info.courses[2]}</h1>
          <h1>{obj.info.courses[3]}</h1>
          
      </div>
  )
}

export default JSX3