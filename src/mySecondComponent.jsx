import React from "react"
import MyFourthComponent from "./MyFourthComponent"

//create a componant
function MySecondComponent() {

    return (
        <div>
            <h1>My Second Component</h1>
           <MyFourthComponent/>

        </div>
    )
}

//send a componant 
export default MySecondComponent