import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function ParentComp() {
    const [username, setusername] = useState('')
    return (
        <div>
            <h1>{username}</h1>
            <Child1
                username={username}
                setusername={setusername}
            />
            <br /><br /><br />
            <Child2
                username={username}
            />
        </div>
    )
}

export default ParentComp