import React from 'react'

function JSX4() {
    const handleKeyPress = () => {
    console.log('key press')
    }
    const handleCliclk = () => {
    console.log('button Click')
}


  return (
      <div>
          <br />
          <input
            onKeyUp={handleKeyPress}  
        type="text"
          placeholder='type here'
        />
          <br />
          <br />
          <button onClick={handleCliclk}>CLick</button>
</div>
  )
}

export default JSX4