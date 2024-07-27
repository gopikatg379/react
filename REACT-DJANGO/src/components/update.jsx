import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const UpdateBook = ()=>{
    const {id} = useParams()
    const [bookData,setBookData] = useState({})
    const navigate = useNavigate()

    const fetchData= async()=>{
        try{
            const response = await axios.get(`http://127.0.0.1:8000/book_one/${id}`);
            console.log(response.data)

            let result = response.data;
            delete result.image;
            console.log(result)

            setBookData(result)
        }catch(error){
            console.error('There was an error fetching the data!', error);
        }
    }
    const InputData = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        let files = e.target.files;
        let newBookData = {}
        if(files){
            newBookData = {...bookData,[name]:files[0]}
            setBookData(newBookData)
        }else{
            newBookData = {...bookData,[name]:value}
            setBookData(newBookData)
        }
    }
    const replaceData = async()=>{
        try{
            const respone = await axios.put(`http://127.0.0.1:8000/update/${id}`, bookData, {
                headers:{
                    "Content-Type":'multipart/form-data'
                }
            });
            navigate('/home')
        }catch(error){
            console.error('There was an error fetching the data!', error);
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    const submitData=()=>{
        replaceData()
    }
    return(
        <div className="container mt-5">
      <h2 className="mb-4">Add a New Book</h2>
      <form  >
        <div className="form-group">
          <label htmlFor="name">Book Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={bookData.name}
            onChange={InputData}

            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Book Price:</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={bookData.price}
            onChange={InputData}
          
 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            className="form-control"
            id="author"
            name="author"
            value={bookData.author}
            onChange={InputData}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            onChange={InputData}

            required
          />
        </div>
        <button type="button" onClick={submitData}  className="btn btn-primary">Submit</button>
        
      </form>
    </div>
    )
}
export default UpdateBook