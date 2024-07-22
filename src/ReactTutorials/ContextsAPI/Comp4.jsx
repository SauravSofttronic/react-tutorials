import React, { useState } from 'react'
import { THEME_CONTEXT } from './LangComp'

function Comp4() {
    const { settheme, theme } = useState(THEME_CONTEXT)
    return (
        <div>
            <h1>{theme}Blue from Theme Comp4</h1>
            <button onClick={() => settheme('Blue')}></button>
        </div>
    )
}

export default Comp4