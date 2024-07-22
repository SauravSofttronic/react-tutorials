import React, { useContext } from 'react'
import { LANGUAGE_CONTEXT } from './LanguageComp'

function CompC() {
    const { setlanguage, language } = useContext(LANGUAGE_CONTEXT)
    return (
        <div>
            <h1>"{language}"from CompC</h1>
            <button onClick={() => setlanguage('Marathi')}>Change Language</button>
        </div>
    )
}

export default CompC