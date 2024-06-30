 import React, {useState} from 'react'

    function USeStateArrays2() {

        const [arr, setArr] = useState([100, 200])
        const arr1 = [1000, 2000]
        const arr2 = ['ABC', 'XYZ']
        
    const changeArr = () => {
                                           
            setArr([...arr1, arr, ...arr2, 'someting'])             
        }

        console.log(arr);
    return (
        <div>
            <h1>{arr}</h1>
            <button onClick={changeArr}>Change Array</button>
        </div>
    )
    }

    export default USeStateArrays2





