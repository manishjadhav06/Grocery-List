import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
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

  const handleCheck=(id)=>{
    const listItems =item.map((item)=>
      item.id === id? {...item, checked : !item.checked} : item);
    setItem(listItems);
    // localStorage.setItem('shoppingList', JSON.stringify(listItems))
  }
  const handleDelete =(id)=>{
    const listItems=item.filter((item)=>
    item.id !== id);
    setItem(listItems);
  }


  return (
    <div className="App">
      <Header title="Groceries List"/>

      <Content item={item} handleCheck={handleCheck} handleDelete={handleDelete}/>

      <Footer length={item.length}/>
    </div>
  );
}

export default App;
