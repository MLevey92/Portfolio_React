import './contact.css'
import { useState } from 'react';

import {validateEmail} from '../../utils/helpers';

export default function Contact () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else {
            setMessage(value);
        }
    }

    const handleBlur = (e) => {
        const { value } = e.target;

        if (!value) {
            setErrorMessage('All fields must be filled');
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        if (!validateEmail(email)) {
            setErrorMessage('Email is not valid');
            return;
        }

        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');

        alert(`Name: ${name}
                Email: ${email}
                message: ${message}`);
    }

    return (
        <div className="container-fluid formHolder">
        <h2>Contact</h2>
        <form onSubmit={handleFormSubmit}>
            <div className="form-group row">
                <label for="name" className="col-sm-2 col-form-label">Name: </label>
                <div className="col-sm-8">
                    <input type="text" id="nameInput" className="form-control" name="name" value={name} onChange={handleInputChange} onBlur={handleBlur}></input>
                </div>
            </div>
            <div className="form-group row">
                <label for="email" className="col-sm-2 col-form-label">Email: </label>
                <div className="col-sm-8">
                    <input type="text" id="emailInput" className="form-control" name="email" value={email} onChange={handleInputChange} onBlur={handleBlur}></input>
                </div>
            </div>
            <div className="form-group row">
                <label for="message" className="col-sm-2 col-form-label">Message: </label>
                <div className="col-sm-8">
                    <textarea id="messageInput" className="form-control" rows="4" cols="50" value={message} onChange={handleInputChange} onBlur={handleBlur}></textarea>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-8">
                    <input type="submit" value="Submit"></input>
                </div>
            </div>
        </form>
        <p className="errorMessage">{errorMessage}</p>
        </div>
    )
}