import React from 'react'
import '../App.css'
function Search() {
    return (
        
        <div className="d-flex justify-content-end h-100 my-3">
          <div className="searchbar" id="searchButton">
            <input className="search_input" type="text" name="" placeholder="Search..."/>
            <a href="/" className="search_icon"><i className="fas fa-search"></i></a>
          </div>
      
      </div>
    )
}

export default Search