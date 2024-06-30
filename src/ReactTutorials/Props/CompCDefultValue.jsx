import React from 'react'

function CompCDefultValue(props) {
const {num1, b, name='something', img, age, courses, info:{city: infocity, state: infostate }, address: {city,state}} = props

   return (
      <div>
          {/* prop consuming  */}
          <h1>{num1}</h1>
          <h1>{b}</h1>
          <h1>{name}</h1>
          <h1>{img}</h1>
          <h1>{age}</h1>
          <h1>{courses}</h1>
          <h1>{city}</h1>
          <h1>{state}</h1>
          <h1>{infocity}</h1>
          <h1>{infostate}</h1>

        
    </div>
  )
}

export default CompCDefultValue