import React, { useContext } from 'react'
import { THEME_CONTEXT } from './LangComp'
import Comp4 from './Comp4'

function Comp3() {
    const { settheme } = useContext(THEME_CONTEXT)
    return (
        <div>
            <Comp4 />
            <button onClick={() => settheme('black')}>Change the Theme</button>
        </div>
    )
}

export default Comp3