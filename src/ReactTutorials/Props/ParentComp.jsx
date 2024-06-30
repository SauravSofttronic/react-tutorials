import React from 'react'
import CompCDefultValue from './CompCDefultValue'

function ParentComp() {

    const a = 20
    const b = 30
    const name = `saurav`
    const img = ``
    const age = 20
    const courses = ['c', 'c++', 'java', `python`, `c#`, `javascript`]
    const info = {
        city: `NGP`,
        state: `MH`
    }
    const address = {
        city: `NGP`,
        state: `MH`
    }


    return (
        <div>
            {/* props passing / sending */}
           
           <CompCDefultValue
            num1={a}
                b={b}
                name={null}
                img={img}
                age={age}
                courses={courses}
                info={info}
                address={address}
            />
       
    </div>
  )
}

export default ParentComp


// props  only read a data