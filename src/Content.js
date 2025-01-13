import React, { use, useState } from 'react'
import {FaTrashAlt} from 'react-icons/fa'

const Content = () => {

  const [item, setItem]= useState([
    {
      id:1,
      checked: false,
      item: "Sugar"
    },
    {
      id:2,
      checked: false,
      item: "Tea"
    },
    {
      id:3,
      checked: false,
      item: "Milk"
    },
  ]);

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

      <ul>
        {item.map((item)=>(
          <li className='item' key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
            />
          <label>{item.item}</label>
          <FaTrashAlt 
            role="button"
            tabIndex="0"
          />
          </li>
        ))}
      </ul>






      {/* <p onClick={handleNameChange}>
        Hello {name}!
      </p>
      <button onClick={handleClick}>Click here</button>
      <button onClick={()=>handleClick2("Manish")}>Click here 2</button> */}
    </main>
  )
}

export default Content
