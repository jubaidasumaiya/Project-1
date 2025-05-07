import React from 'react'
import Card from 'react-bootstrap/Card';

const reviews = [
    {
      name: "Amina Rahman",
      image: "/Project-1/user-one.jpg",
      rating: 5,
      comment: "The cheesy fries were heavenly — perfectly crispy with a creamy cheese blend. My new go-to snack!",
    },
    {
      name: "Fahim Khan",
      image: "/Project-1/user-one.jpg",
      rating: 4,
      comment: "The burger was juicy and bursting with flavor. Loved the toasted bun and rich sauces!",
    },
    {
      name: "Nusrat Jahan",
      image: "/Project-1/user-one.jpg",
      rating: 5,
      comment: "Cheesy garlic bread was absolutely delicious. Soft, buttery, and loaded with cheese — highly recommended!",
    },
  ];
  
  const Reviews = () => {
    return (
      <div className="reviews-section mt-5 px-3 text-center">
        <h2 className="mb-4">What Our Customers Say</h2>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {reviews.map((review, index) => (
            <Card style={{ width: '18rem' }} key={index} className="shadow-sm">
              <Card.Img
                variant="top"
                src={review.image}
                alt={review.name}
                style={{
                  borderRadius: '50%',
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                  margin: '20px auto 0',
                }}
              />
              <Card.Body>
                <Card.Title>{review.name}</Card.Title>
                <Card.Text>
                  <span style={{ color: '#ffc107', fontSize: '18px' }}>
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </span>
                  <br />
                  {review.comment}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  };
  

export default Reviews
