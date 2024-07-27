import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Login = () => {
    const [data, setData] = useState({
        author: '',
        pwd: 0
    });
    const [error, setError] = useState('');  
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                navigate('/home');
            }
        } catch (error) {
            setError('Invalid username or password');
            console.error('There was an error fetching the data!', error);
        }
    };

    return (
        <div className="login-container">
            <div className="card">
            <div className="card-body">
            <h2 className="card-title text-center" id='head'>Login</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username" id='user'>Username</label>
                    <input style={{backgroundColor:'transparent'}}
                        type="text"
                        className="form-control"
                        id="author"
                        name="author"
                        value={data.author}
                        onChange={handleInputChange}
                        placeholder='Enter your username'
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pwd" id='pwd'>Password</label>
                    <input style={{backgroundColor:'transparent'}}
                        type="password"
                        className="form-control"
                        id="pwd1"
                        name="pwd"
                        value={data.pwd}
                        onChange={handleInputChange}
                        placeholder='Enter your password'
                        required
                    />
                </div>
                <button type="submit" id='btn'>Login</button>
            </form>
        </div>
        </div>
        </div>
    );
};

export default Login;
