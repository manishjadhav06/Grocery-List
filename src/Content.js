import React from 'react'
import ItemList from './ItemList'

const Content = ({item, handleCheck, handleDelete}) => {


  // const [name,setName]= useState("Manish");

  // const handleNameChange =()=>{
  //   const names = ['jadhav','kale','joshi','shinde'];
  //   const int = Math.floor(Math.random()*4);
  //   setName(names[int]);
  // }
  // const handleClick=()=> console.log("You clicked!");
  // const handleClick2=(name1)=> console.log(`${name1} was clicked`);

  return (
    <main>
      <ItemList item={item} handleCheck={handleCheck} handleDelete={handleDelete}/>
      

      {/* <p onClick={handleNameChange}>
        Hello {name}!
      </p>
      <button onClick={handleClick}>Click here</button>
      <button onClick={()=>handleClick2("Manish")}>Click here 2</button> */}
    </main>
  )
}

export default Content
