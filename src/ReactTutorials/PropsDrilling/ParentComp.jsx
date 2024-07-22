import React, { useState } from 'react'
import Child1 from './Child1'

function ParentComp() {

    const username = ('Softtronix')
    return (
        <div>
            <Child1
                item={username}
            />
        </div>
    )
}

export default ParentComp