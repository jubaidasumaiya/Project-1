import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Special = () => {
  return (
    <div id="special" className=" special d-flex gap-4 mt-5">
       <Card style={{ width: '18rem' }}>
       <img src="/Project-1/card-one.jpg" alt="card"/>
      <Card.Body>
        <Card.Title>Big Bite</Card.Title>
        <Card.Text>
        Stacked high with flavor, melted cheese & juicy perfection.
        </Card.Text>
        <Button variant="success">Explore</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>

       <img src="/Project-1/card-two.jpg" alt="card"/>
      <Card.Body>
        <Card.Title>Slice Of Heaven</Card.Title>
        <Card.Text>
       Baked cheesy delight with a crispy curst,magic of our signature Pizaa
        </Card.Text>
        <Button variant="success">Explorer</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
       <img src="/Project-1/card-three.jpg" alt="card"/>
      <Card.Body>
        <Card.Title>Stacked & Stuffed</Card.Title>
        <Card.Text>
        Freshly toasted bread packed with layers of flavours.
        </Card.Text>
        <Button variant="success">Explore</Button>
      </Card.Body>
    </Card>

     
     <Card style={{ width: '18rem',}}>
       <img src="/Project-1/card-four.jpg" alt="card"/>
      <Card.Body>
        <Card.Title>Cheese Magic</Card.Title>
        <Card.Text>
       Buttery topped with melted Cheese.Soft and juicy
        </Card.Text>
        <Button variant="success">Explore</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
       <img src="/Project-1/card-five.jpg" alt="card"/>
      <Card.Body>
        <Card.Title>Cheese Loaded</Card.Title>
        <Card.Text>
        Golden Crispy fries drenced in creamy cheese.
        </Card.Text>
        <Button variant="success">Explore</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Special
