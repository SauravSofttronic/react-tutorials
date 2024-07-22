import React, { createContext, useState } from 'react'
import CompA from './CompA'

export const LANGUAGE_CONTEXT = createContext()
export const THEME_CONTEXT = createContext()

function LanguageComp() {

    const [language, setlanguage] = useState('English')

    return (
        <div>
            <h1>{language} from LanguageComp</h1>

            <LANGUAGE_CONTEXT.Provider value={{ language, setlanguage }}>
                <CompA />
            </LANGUAGE_CONTEXT.Provider>
        </div>
    )
}

export default LanguageComp