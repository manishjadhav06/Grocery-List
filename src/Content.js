import React from 'react'

const Content = () => {
  const handleNameChange =()=>{
    const names = ['jadhav','Manish','joshi','shinde'];
    const int = Math.floor(Math.random()*3);
    return names[int];
  }
  const handleClick=()=> console.log("You clicked!");
  const handleClick2=(name)=> console.log(`${name} was clicked`);

  return (
    <main>
      <p>
        Hello {handleNameChange()}!
      </p>
      <button onClick={handleClick}>Click here</button>
      <button onClick={()=>handleClick2("Manish")}>Click here 2</button>
    </main>
  )
}

export default Content
