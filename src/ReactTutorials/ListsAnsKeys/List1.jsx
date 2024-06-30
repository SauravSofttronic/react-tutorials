import React from 'react'

function List1() {


    const arr = ['c', 'c++', 'java', 'pyton']


    return (
        <div>
            {/* type 1 */}
            {/* rendering single HTML Element */}
            {
                arr.map((val, i) => (
                    <h1>{val}</h1>
                ))
            }
            {/* <h1>=======================================</h1>

          <h1>{arr.map((val, i) => (`${val}, `))}</h1>*/}
        </div>

    )
}

export default List1