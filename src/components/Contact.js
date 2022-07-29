import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (setName(value)) {
            return name === 'name'
        } 
        if (setEmail(value)) {
            return name === 'email'
        } 
        if (setMessage(value)) {
            return name === 'message'
        }
    };


    const handleFormSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <div>
            <form className="form">
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                />
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="message"
                />
                <button type="button" onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}


export default Contact;
