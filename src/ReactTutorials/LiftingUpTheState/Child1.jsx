import React from 'react'

function Child1({ username, setusername }) {

    return (
        <div>
            <input type="text"
                value={username}
                onChange={(e) => setusername(e.target.value)}      //<---anonomus function inline code
            />
            <h1>From Child 1</h1>
        </div>
    )
}

export default Child1