import React, {useState} from 'react'

function USeStateObject() {

    const [obj, setObj] = useState({
        name: 'saurav',
        age: 100,
        courses: ['html','css'],
        info: {
            city: 'pune',
            state: 'MH',
            arr1: [1000,2000],
            contact: {
                phNumber: 1234567890,
                email: 'something@email.com',
                arr2: ['A','B','C'],
            }
        }
    })


    //multiple Object change  //Direct obj change nah kar sakhte
//     const handleChangeObject = () => {
//         setObj(prevState => {
//             return {
//             ...prevState,
//             name: ' saurav_somthing',
//             age: 2000,
//             info: {
//                 ...prevState.info,
//                 city: 'ngp',
//                 contact: {
//                  phNumber: 9874563210,
//                 email:  'Everything@email.com',
//                 }
//             }
//         }
//     })
// }
    

// Only one Object Change  //Obj ki value ko exicses kar ke change kar na padta hai 
    const handleChangeObject = () => {
        setObj(prevState => {
            return {
            ...prevState,
            courses:[...prevState.courses,'js'],
            info: {
                ...prevState.info,
                arr1: [...prevState.info.arr1,3000],
                city: 'ngp',
                contact: {
                    ...prevState.info.contact,
                    arr2: [...prevState.info.contact.arr2,'D'],
                    email: 'Everything@email.com',
                
                }
            }
        }
    })
}
        
    console.log(obj);
  return (
      <div>
          <h1>{ obj.name}</h1>
          <h1>{obj.age}</h1>
          <h1>{obj.info.city}</h1>
          <h1>{obj.info.state}</h1>
          <h1>{obj.info.contact.phNumber}</h1>
          <h1>{obj.info.contact.email}</h1>

          <h1>{obj.courses}</h1>
          <h1>{obj.info.arr1}</h1>
          <h1>{obj.info.contact.arr2}</h1>
          <button onClick={handleChangeObject}>Change Object</button>
    </div>
  )
}

export default USeStateObject