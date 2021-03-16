import React from 'react'

const SearchBar = ({ handleInput, search }) => {
    return (
        <section className="search-box">
            <input 
                type="text" 
                className="search" 
                placeholder="Search Movie"
                onChange={handleInput}
                onKeyPress={search}
            />
        </section>
    )
}

export default SearchBar
