import React from 'react'
import '../styles/Shop.css'

const FilterColorMenu = () => {
    const colorNames = ['Pink', 'Blue', 'White', 'Green', 'Beige', 'Black', 'Brown', 'Yellow', 'Grey','Lavender'];

    return (
        <div className="color__list">
            {colorNames.map((colorName, index) => {
                return(
                    <div key={index}>
                        <input type="checkbox" id={colorName}/>
                        <label htmlFor={colorName}>{colorName}</label>
                    </div>
                )
            })}
        </div>
    )
}

export default FilterColorMenu
