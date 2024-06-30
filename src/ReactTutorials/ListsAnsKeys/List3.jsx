import React from 'react'
import ComponantA from './ComponantA'
import ComponantB from './ComponantB';

function List3() {

  const arr = [1, 2, 3, 4, 5];

  return (
    <div>
          <div>{
              arr.map((val, i) => (
                <ComponantA key={i} />
              ))
            }
            </div> 
            
            <div>
            {
              arr.map((val, i) => (
                <React.Fragment key={i}>
                  <ComponantA />
                  <ComponantB  />
              </React.Fragment>
              ))
              }
              </div>
    </div>
  )
}

export default List3