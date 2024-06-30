
function JSX1() {

    const name = 'saurav_something';
    const age = 2000;
    const placeholder = 'my name is Saurav'
    const imgPath = 'https://tse4.mm.bing.net/th?id=OIP.xddyM5Z5llwe5nz0xAnhvAHaD_&pid=Api&P=0&h=180';
    const textcolor ='red'
  return (
      <div>
          <h1 style={{ color: textcolor}}>{name}</h1>
          <h2>My name is {name} and i am {age} year old</h2>
          <input type="text" placeholder={placeholder} />
          <img src={imgPath} width={'200px'} alt="" />
      </div>

  )
}

export default JSX1