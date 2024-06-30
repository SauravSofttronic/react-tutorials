import React from "react";


function JSXAssingment()
{
    const names = ['nikhil', 'sajal', 'tejswini', 'saurav', 'ayush', 'vedant', 'manthan',] 
    
    return (
        <div>
            <h1>names</h1>
            <h1>{
                names.map((val, i) =>
                        (`${val}${i === names.length - 1 ? '!' : '=>'} `)  
                )
           } </h1>
    </div>
)


 }

export default JSXAssingment
