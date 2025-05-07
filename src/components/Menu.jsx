import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


      const menu = [
  {
    name: "Big Bite Burger",
    image: "/Project-1/menu-one.jpg",
    price: "$5.99",
    description: "Juicy beef patty with melted cheese and signature sauce.",
  },
  {
    name: "Cheesy Garlic Bread",
    image: "/Project-1/menu-two.jpg",
    price: "$3.49",
    description: "Toasted bread loaded with buttery garlic and cheese.",
  },
  {
    name: "Pepperoni Pizza",
    image: "/Project-1/menu-three.jpg",
    price: "$7.99",
    description: "Thin crust pizza topped with pepperoni and mozzarella.",
  },
  {
    name: "Cheesy Fries",
    image: "/Project-1/menu-four.jpg",
    price: "$4.49",
    description: "Crispy golden fries drenched in creamy cheese sauce.",
  },
  {
    name: "Chicken Sandwich",
    image: "/Project-1/menu-five.jpg",
    price: "$6.25",
    description: "Grilled chicken, lettuce & mayo on a toasted bun.",
  },
];

const Menu = () => {
  return (
    <div id="menu" className="menu-section mt-5 px-4 text-center">
      <h2 className="mb-4">Our Menu</h2>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {menu.map((item, index) => (
          <Card style={{ width: '18rem' }} key={index}>
            <Card.Img variant="top" src={item.image} alt={item.name} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <h5>{item.price}</h5>
              <Button variant="success">Order Now</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Menu
