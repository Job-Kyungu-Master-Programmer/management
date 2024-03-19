import React from 'react'


const Search = ( { search, setSearch } ) => {
  return (
     <div className="search">
         <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Recherche... ' className="search__input" />
     </div>
  )
}

export default Search