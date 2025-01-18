import React from 'react'
import { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'

function AddItem({newItem, setNewItem, handleSubmit}) {
  const inpRef = useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <input
        autoFocus
        ref={inpRef}
        id='addItem'
        type='text'
        placeholder='Add Item'
        required
        value={newItem}
        onChange={(e)=> setNewItem(e.target.value)}
      />
      <button
        type='submit'
        aria-label='Add Item'
        onClick={()=>inpRef.current.focus}><FaPlus/></button>
    </form>
  )
}

export default AddItem
