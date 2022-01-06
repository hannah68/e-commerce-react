import React from 'react'
import '../styles/Shop.css'

const FilterCategoryMenu = () => {
    const categoryNames = ['Chair', 'Table', 'Bed','Lamp','Sofa'];

    return (
        <div className="category__list">
            {categoryNames.map((categoryName, index) => {
                return (
                    <div key={index}>
                        <input type="checkbox" id={categoryName}/>
                        <label htmlFor={categoryName}>{categoryName}</label>
                    </div>
                )
            })}
        </div>
    )
}

export default FilterCategoryMenu
