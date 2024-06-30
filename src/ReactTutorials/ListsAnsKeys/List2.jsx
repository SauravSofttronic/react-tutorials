import React from 'react'

function List2() {

    const user = [
        {userName: 'Saurav', userId: 1},
        {userName: 'Ayush', userId: 2},
        {userName: 'manthan', userId: 3},
        {userName: 'vedant', userId: 4},
        {userName: 'nikhil', userId: 5},
        {userName: 'sajal', userId: 6},
        {userName: 'Tejswini', userId: 7},
    ]

  return (
      <div>
   {
              user.map((val, i) => (
                  <div>
                      <h1>{ val.userName}</h1>
                      <h1>{ val.useeId}</h1>
              </div>
              ))
          }
            <h1>------------------------------------</h1>

 {
        user.map((val, i) =>(
          <>
              <h1>{val.userName}</h1>
              <h1>{val.useeId}</h1>
          </>
          ))
      } 
      
      
            <h1>------------------------------------------</h1>          

          
  {
        user.map((val, i) => (
        <React.Fragment key={i}>
              <h1>{val.userName}</h1>
              <h1>{val.useeId}</h1>
        <React.Fragment/>
          ))
    } 

    </div>
  )
}

export default List2































// // ek se jyada element ho n ge to raffer use karna honga
// <div>
//           {
//     user.map(() => (
//         <h1>1</h1>=============element
//         <h1>1</h1>=======element
//         <h1>1</h1>=====element
//     ))
//          }
//     </div>

// =====================================

// div Element jab use karte hai tab sale raffer hote hai
// dom me jitne notes homge apka utna website slow honga

// reffer 2 types div and fragment


      // empty me keys mention nahi kar sakhte  and fregment me key mension kar sakhte
      // empty      ==========            miltiple time use 

      // div eneccary exise karta hai