import React, { useEffect, useState } from 'react'
import '../styles/personalInfo.styles.css'

const PersonalInfo = ({ onUpdate, visibility , onClose ,data }) => {
    const [formdata, setFormData] = useState({})

    const onSubmit = (event) => {
        event.preventDefault();
        onUpdate(formdata);
        onClose();
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formdata,
            [name]: value
        });
    }

    return (
        <div className='container' style={{ display: visibility }}>
            <form onSubmit={onSubmit}>
                <section>
                    <label htmlFor='first_name'>First Name:</label>
                    <input name='firstName' id='first_name' type='text' placeholder='John' value={data.firstName || ''} onChange={handleChange}></input>
                    <label htmlFor='last_name'>Last Name:</label>
                    <input name='lastName' id='last_name' type='text' placeholder='Doe' value={data.lastName || ''} onChange={handleChange}></input>
                    <label htmlFor='email'>Email:</label>
                    <input name='email' id='email' type='email' placeholder='JohnDoe@gmail.com'  value={data.email || ''} onChange={handleChange}></input>
                    <label htmlFor='phone'>Phone:</label>
                    <input name='phone' id='phone' type='tel' placeholder='9112325639' value={data.phone || ''} onChange={handleChange}></input>
                </section>
                <div>
                    <button type='submit'>Submit</button>
                    <button type='reset' onClick={onClose}>Close</button>
                </div>
            </form>
        </div>
    )
}

export default PersonalInfo