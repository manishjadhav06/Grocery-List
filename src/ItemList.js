import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'

const ItemList = ({ item, handleCheck, handleDelete }) => {
    return (
        <ul>
            {item.map((item) => (
                <li className='item' key={item.id}>
                    <input
                        type="checkbox"
                        onChange={() => handleCheck(item.id)}
                        checked={item.checked}
                    />

                    <label
                        onDoubleClick={() => handleCheck(item.id)}
                    >{item.item}</label>
                    <FaTrashAlt
                        onClick={() => handleDelete(item.id)}
                        role="button"
                        tabIndex="0"
                    />
                </li>
            ))}
        </ul>
    )
}

export default ItemList
