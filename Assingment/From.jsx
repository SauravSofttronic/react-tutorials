import React, { useState } from "react"

function From() {
    const [First, setFirst] = useState({
        inpEmail: '',
        inpPassword: '',
    }
    )
    console.log(First);

    const handleEvent = (event) => {
        setEvent(prev => {
            return {
                ...prev,
                [event.target.id]: event.target.value
            }
        })
    }


    return (
        <div>
            <br />
            <input
                type="text"
                placeholder='Enter Email'
                value={Login.Email}
                id="inpEmail"
                onChange={handleEmail}
            />
            <label id="Emailerror">Error</label>
            <br /><br />
            <input
                type="Password"
                placeholder='Enter Password'
                value={Login.Password}
                id="inpPassword"
                onChange={handlePassword}
            />
            <label id="PasswordError"></label>

            <br /><br />
            <button>Login</button>
        </div>
    )
}

export default From