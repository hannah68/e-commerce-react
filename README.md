# WoodLand
> WoodLand is a fully responsive e-commerce furniture website.

<img src='./public/assets/images/woodland.gif' width="600px"/>

## Description
After learning react during the Boolean's bootcamp, we had to do a solo project with react. I was always curious how e-commerce websites were built. Hence, I challenged myself to create one in less than a week. I decided to create a furniture online store because of my passion for interior design.

## Features
The user has the ability to:
- See the best seller furniture on the home page
- Filter products based on their type, color, collection and price
- Search products and sort them based on the highest or the lowest price
- Check the details of products
- Add items to basket
- Edit the basket(removing or adding more items)
- Write reviews 

## Lesson Learned
During my projects I learned how to:
- navigate UI with react-router
- Transfer state between routes with useNavigate
- work with useLocation to get the necessary information about the current route
- remove the side effect of fetching my data from API endpoints by using useEffect
- Apply JSON-server to connect my database with the frontend by creating RESTAPI(with CRUD operation)

I got a really good grasp of array methods such as map, filter, reduce, sort,.. by doing this project.


## Tech Stack
- Applied figma to design <a href="https://www.figma.com/file/AQ7tZRnMHqPFyOhUmfWrsi/furniture?node-id=0%3A1">my wireframe</a>
- HTML, CSS, Javascript
- React (Ract-router, useState, useEffect, React-icons,...)
- REST API (JSON server)

## Installation

## Future development
1. As a general optimization throughout my code, I would use the global state to avoid the props drilling and use Usereducer so don't have to pass down multiple functions but only one reducer that results in better performance and sustain a more maintainable state.
2. I would implement MySQL or MongoDB for my database.
3. Users should be able to register on the website to keep track of the items that were added to the basket and write reviews.
