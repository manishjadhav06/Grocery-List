import React from 'react'

const SearchItem = ({search , setSearch}) => {
  return (
    <form className='searchForm' onsubmit={(e)=>e.preventDefault()}>
        <label for='search'>Search</label>
        <input 
            id='search'
            type='text'
            role='searchbox'
            placeholder='Search item'
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem
