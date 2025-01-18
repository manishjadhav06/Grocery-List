import './App.css';
import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';


function App() {
  const [item, setItem]= useState(JSON.parse(localStorage.getItem('shoppingList'))
  //   [
  //   {
  //     id:1,
  //     checked: false,
  //     itemName: "Sugar"
  //   },
  //   {
  //     id:2,
  //     checked: false,
  //     itemName: "Tea"
  //   },
  //   {
  //     id:3,
  //     checked: false,
  //     itemName: "Milk"
  //   },
  // ]
);

const [search, setSearch]=useState('');

const [newItem, setNewItem] = useState('');
  const setSave=(newItems)=>{
    setItem(newItems);
    localStorage.setItem('shoppingList', JSON.stringify(newItems));
  }

  const addItem =(itemName)=>{
    const id = item.length ? item[item.length -1].id + 1 : 1;
    const myNewItem ={id, checked: false, itemName};
    const listItems =[...item, myNewItem];
    console.log(listItems);
    setSave(listItems);
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem);
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
    setSave(listItems);
  }



  return (
    <div className="App">
      <Header title="Groceries List"/>

      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>

      <SearchItem  search={search} setSearch={setSearch} />

      <Content item={item.filter(item=>((item.itemName).toLowerCase()).includes(search.toLowerCase()))} handleCheck={handleCheck} handleDelete={handleDelete}/>

      <Footer length={item.length}/>
    </div>
  );
}

export default App;
