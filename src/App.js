import './App.css';
import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';


function App() {
  const [item, setItem]= useState([
    {
      id:1,
      checked: false,
      newItem: "Sugar"
    },
    {
      id:2,
      checked: false,
      newItem: "Tea"
    },
    {
      id:3,
      checked: false,
      newItem: "Milk"
    },
  ]);

  const setSave=(newItems)=>{
    setItem(newItems);
    // localStorage.setItem('shoppingList', JSON.stringify(newItems));
  }

  const [newItem, setNewItem] = useState('');

  const addItem =(newItem)=>{
    const id= item.length ? item[item.length -1].id + 1 : 1;
    const myNewItem ={id, checked: false, newItem};
    const listItems =[...item, myNewItem];
    console.log(listItems);
    setSave(listItems);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem);
    console.log(newItem);
    setNewItem('');
    }


  const handleCheck=(id)=>{
    const listItems =item.map((item)=>
      item.id === id? {...item, checked : !item.checked} : item);
    setSave(listItems);
  }
  const handleDelete =(id)=>{
    const listItems=item.filter((item)=>
    item.id !== id);
    setItem(listItems);
  }



  return (
    <div className="App">
      <Header title="Groceries List"/>

      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>

      <Content item={item} handleCheck={handleCheck} handleDelete={handleDelete}/>

      <Footer length={item.length}/>
    </div>
  );
}

export default App;
