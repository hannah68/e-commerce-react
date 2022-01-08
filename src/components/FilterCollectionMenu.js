import React from 'react'
import '../styles/Shop.css'
// import {useState, useEffect} from 'react'

const FilterCollectionMenu = (props) => {
    const {collectionNames, filterData, handleFilterChange} = props;

    const checkCheckboxHandler = (collectionName) => {
        return filterData.collection.includes(collectionName) ? true : false;
    }
   
    return (
        <div className="collection__list">
            {collectionNames.map((collectionName, index) => {
                return(
                    <div key={index}>
                        <input 
                            type="checkbox" 
                            id={collectionName} 
                            name={collectionName}  
                            onChange={(e) => handleFilterChange(e, 'collection')}
                            checked={checkCheckboxHandler(collectionName)}
                        />
                        <label htmlFor={collectionName}>{collectionName}</label>
                    </div>
                )
            })}
        </div>
    )
}

export default FilterCollectionMenu
