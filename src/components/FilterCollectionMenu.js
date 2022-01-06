import React from 'react'
import '../styles/Shop.css'

const FilterCollectionMenu = () => {
    const collectionNames = ['Spring-Summer', 'Autumn-Winter']
    return (
        <div className="collection__list">
            {collectionNames.map((collectionName, index) => {
                return(
                    <div key={index}>
                        <input type="checkbox" id={collectionName}/>
                        <label htmlFor={collectionName}>{collectionName}</label>
                    </div>
                )
            })}
        </div>
    )
}

export default FilterCollectionMenu
