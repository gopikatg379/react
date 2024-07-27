import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './BookDetails.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

const BookDetails = ()=>{
    let {id} = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState({});

    const fetchData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/book_one/${id}`);
      console.log(response.data);
      setBook(response.data);
    } catch (error) {
      console.error('There was an error fetching the data!', error);
    }
  };
  const handleDelete = async()=>{
    try {
        const response = await axios.delete(`http://127.0.0.1:8000/delete/${id}`);
        console.log(response.data);
        navigate('/home');

      } catch (error) {
        console.error('There was an error fetching the data!', error);
      }
  };
  useEffect(()=>{
    fetchData()
  },[])
 

    return(
        <div className="book-details-container">
            <img src={`http://127.0.0.1:8000${book.image}`} alt="{book.name}" />
            <h3>{book.name}</h3>
            <h4>{book.author}</h4>
            <h4>{book.price}/-</h4>
            <div>
                <button onClick={handleDelete} className="btn btn-danger m-2"><FontAwesomeIcon icon={faTrashAlt} /> Delete</button>
                <button onClick={() => navigate(`/update/${id}`)} className="btn btn-success m-2">
                <FontAwesomeIcon icon={faEdit} /> Update
                </button>
            </div>

            
        </div>
        
    );
    
}

export default BookDetails;