import React from 'react'

const ProductInfo = () => {
    const productInfoText = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sed facilis ullam, a alias voluptas similique nesciunt qui vel?voluptas similique nesciunt laboriosam natus aliquid nam blanditiis esse autem omnis incidunt voluptate? Dicta, qui vel?';

    const productInfoSize = [
        'Dimensions: W: 207 cm D:56 cm H:221 cm',
        'Seat Dimensions: W: 184 cm D:134 cm H:175 cm',
        'Weight: 5 kg',
        'Materials: Metal, Steel',
        'Filling materials: Concrete, Frozen, Fresh, Steel',
        'Comfort level: Medium'
    ]

    const colorNames =  ['Pink', 'Blue', 'White', 'Green', 'Beige', 'Black', 'Brown', 'Yellow', 'Grey','Lavender'];

    return (
        <>
            <p className="productInfo-text">{productInfoText}</p>
            <ul className="productInfo-size">
                {productInfoSize.map((info, index) => {
                    return <li key={index}>{info}</li>
                })}
                
            </ul>
            <div className="productInfo-colors">
                {colorNames.map((color, index) => {
                    return <span className={`circle ${color}`} key={index}></span>
                })}
            </div>
        </>
    )
}

export default ProductInfo
