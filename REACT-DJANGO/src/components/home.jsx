import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './Home.css'; 

const Home = () => {
  const [book, setBook] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/home');
      console.log(response.data);
      setBook(response.data);
    } catch (error) {
      console.error('There was an error fetching the data!', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='row'>
      {book.map((x) => (
        <Card style={{ width: '18rem' }} className='col-3' key={x.book_id}>
          <Card.Img variant="top" src={`http://127.0.0.1:8000${x.image}`} alt={x.name} style={{ height: '200px', objectFit: 'contain' }} /> 
          <Card.Body>
            <Card.Title>{x.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{x.author}</Card.Subtitle>
            <Card.Text>
              {x.price}/-
            </Card.Text>
            <Link to={`/book/${x.book_id}`}>
              <Button className='btn btn-login'>View More</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Home;
