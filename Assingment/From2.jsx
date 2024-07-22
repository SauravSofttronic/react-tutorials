import { useState } from "react"

function From2() {

    const [From, setFrom] = useState({
        inpEmail: '',
        inpPassword: '',
    }
    )
    console.log(From);

    const handleElement = (event) => {
        setFrom(prev => {
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
                value={From.Email}
                id="inpEmail"
                onChange={handleElement}
            />
            <label id="Emailerror">Error</label>
            <br /><br />
            <input
                type="Password"
                placeholder='Enter Password'
                value={From.Password}
                id="inpPassword"
                onChange={handleElement}
            />
            <label id="PasswordError"></label>

            <br /><br />
            <button>Login</button>
        </div>
    )
}

export default From2