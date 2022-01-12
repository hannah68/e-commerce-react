import { FaStar, FaStarHalfAlt } from 'react-icons/fa'


// create random class=======================================
export const randomStar = () => {
    const starClass = Math.floor( Math.random() * 2) + 1;
    return starClass === 1 ? <FaStarHalfAlt/> : <FaStar/>;
}

// create random product for product section=================
export const randomFnForProducts = (num) => {
    let numIndex = []
    while(numIndex.length < 6){
        const randomNum = Math.floor(Math.random() * num) + 1;
        if(numIndex.indexOf(randomNum) === -1) numIndex.push(randomNum);
    }
    return numIndex;
}

// define filter names=======================================
export const collectionNames = ['Spring-Summer', 'Autumn-Winter'];
export const colorNames =  ['Pink', 'Blue', 'White', 'Green', 'Beige', 'Black', 'Brown', 'Yellow', 'Grey','Lavender'];
export const categoryNames = ['Chair', 'Table', 'Bed','Lamp','Sofa'];

// define a dummy text=======================================
export const productInfoText = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sed facilis ullam, a alias voluptas similique nesciunt qui vel?voluptas similique nesciunt laboriosam natus aliquid nam blanditiis esse autem omnis incidunt voluptate? Dicta, qui vel?';

export const productInfoSize = [
    'Dimensions: W: 207 cm D:56 cm H:221 cm',
    'Seat Dimensions: W: 184 cm D:134 cm H:175 cm',
    'Weight: 5 kg',
    'Materials: Metal, Steel',
    'Filling materials: Concrete, Frozen, Fresh, Steel',
    'Comfort level: Medium'
]

// creating star icons=======================================
export const starIcons = [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>];

