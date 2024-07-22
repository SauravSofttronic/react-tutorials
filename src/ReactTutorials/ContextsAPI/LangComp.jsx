import React, { createContext, useState } from 'react'
import Comp2 from './Comp2'
export const THEME_CONTEXT = createContext()
function LangComp() {
    const [theme, settheme] = useState('red')
    return (
        <div>
            <h1>{theme} from Theme Context</h1>
            <THEME_CONTEXT.Provider value={{ theme, settheme }} >
                <Comp2 />
            </THEME_CONTEXT.Provider>
        </div>
    )
}
export default LangComp