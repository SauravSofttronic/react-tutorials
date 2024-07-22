import React, { useContext } from 'react'
import { LANGUAGE_CONTEXT } from './LanguageComp'
import CompC from './CompC'

function CompB() {
    const { setlanguage } = useContext(LANGUAGE_CONTEXT)
    return (
        <div>
            <CompC />
            <button onClick={() => setlanguage('Hindi')}>Change Language from Hindi </button>
        </div>
    )
}

export default CompB