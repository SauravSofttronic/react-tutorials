import React from 'react'

function CompB(props) {   //props recesiveing

    // props will be an object
    // props destructuring
const {num1, b, name, img, age, courses, info, city, state } = props

   return (
      <div>
          {/* prop consuming  */}
          <h1>{num1}</h1>
          <h1>{b}</h1>
          <h1>{name}</h1>
          <h1>{img}</h1>
          <h1>{age}</h1>
          <h1>{courses}</h1>
          <h1>{info.city}</h1>
          <h1>{info.state}</h1>
          <h1>{city}</h1>
          <h1>{state}</h1>

          <input
              type="text"
              placeholder={props.state}
                
          />
    </div>
  )
}

export default CompB