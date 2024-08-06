import React, { useState } from 'react'

const ProfessionalInfo = ({ professionalData, visibility, onClose }) => {
    const [formdata, setFormData] = useState({})

    const onSubmit = (event) => {
        event.preventDefault();
        professionalData(formdata);
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
                    <label htmlFor='companyName'>Company Name:</label>
                    <input
                        name='companyName'
                        id='companyName'
                        type='text'
                        placeholder='Eg. company name'
                        onChange={handleChange}
                    />
                    <label htmlFor='positionTitle'>Position Title:</label>
                    <input
                        name='positionTitle'
                        id='positionTitle'
                        type='text'
                        placeholder='Eg. web developer'
                        onChange={handleChange}
                    />
                    <label htmlFor='responsibilities'>Main Responsibilities:</label>
                    <textarea
                        id='responsibilities'
                        name='responsibilities'
                        onChange={handleChange}
                    />
                    <label htmlFor='startDate'>Start Date:</label>
                    <input
                        name='startDate'
                        id='startDate'
                        type='date'
                        onChange={handleChange}
                    />
                    <label htmlFor='endDate'>End Date:</label>
                    <input
                        name='endDate'
                        id='endDate'
                        type='date'
                        onChange={handleChange}
                    />
                </section>
                <button type='submit'>Submit</button>
                <button type='reset' onClick={onClose}>Close</button>
            </form>
        </div>
    )
}
export default ProfessionalInfo