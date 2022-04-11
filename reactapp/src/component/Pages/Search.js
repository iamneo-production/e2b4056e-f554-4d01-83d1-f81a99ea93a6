import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const Search = (props) => {
    const inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        props.inputHandler(lowerCase);
    }

    return (

        <div className="d-flex justify-content-end h-50 my-3">
            <div className="searchbar">
                <input className="search_input" type="text" name="" placeholder="Search by academy name..." onChange={inputHandler} />
                <a href="#" className="search_icon" id='searchButton'><FontAwesomeIcon icon={faSearch} /></a>
            </div>
        </div>
    )
}

export default Search