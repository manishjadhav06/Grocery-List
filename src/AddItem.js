import React from 'react'
import { FaPlus } from 'react-icons/fa'

function AddItem() {
  return (
    <form className='addForm'>
      <input
        autoFocus
        id='addItem'
        type='text'
        placeholder='Add Item'
        required
      />
      <button
        type='submit'
        aria-label='Add Item'><FaPlus/></button>
    </form>
  )
}

export default AddItem
