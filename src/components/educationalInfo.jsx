import React, { useState } from 'react';
import '../styles/education.styles.css'

const EducationalInfo = ({ educationalData, visibility, onClose }) => {
  const [formdata, setFormData] = useState({});

  const onSubmit = (event) => {
    event.preventDefault();
    educationalData(formdata);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formdata,
      [name]: value
    });
  };

  return (
    <div className='container' style={{ display: visibility }}>
      <form onSubmit={onSubmit}>
        <div>
          <section>
            <legend>College Details:</legend>
            <label htmlFor='collegeName'>College Name:</label>
            <input
              name='collegeName'
              id='collegeName'
              type='text'
              placeholder='IIT Madras'
              onChange={handleChange}
            />
            <label htmlFor='collegeStartYear'>Start Year:</label>
            <input
              name='collegeStartYear'
              id='collegeStartYear'
              type="number"
              min="1980"
              max="2099"
              step="1"
              placeholder='2000'
              onChange={handleChange}
            />
            <label htmlFor='collegeEndYear'>End Year:</label>
            <input
              name='collegeEndYear'
              id='collegeEndYear'
              type="number"
              min="1980"
              max="2099"
              step="1"
              placeholder='2000'
              onChange={handleChange}
            />
            <label htmlFor='collegeDegree'>Degree:</label>
            <input
              name='collegeDegree'
              id='collegeDegree'
              type='text'
              placeholder='M.Tech'
              onChange={handleChange}
            />
            <label htmlFor='collegeStream'>Stream:</label>
            <input
              name='collegeStream'
              id='collegeStream'
              type='text'
              placeholder='Computer Science'
              onChange={handleChange}
            />
          </section>

          <section>
            <legend>Senior Secondary or Equivalent (XII)</legend>
            <label htmlFor='schoolNameXII'>School Name:</label>
            <input
              name='schoolNameXII'
              id='schoolNameXII'
              type='text'
              placeholder='School name'
              onChange={handleChange}
            />
            <label htmlFor='completionYearXII'>Completion Year:</label>
            <input
              name='completionYearXII'
              id='completionYearXII'
              type="number"
              min="1980"
              max="2099"
              step="1"
              placeholder='2000'
              onChange={handleChange}
            />
            <label htmlFor='boardXII'>Board:</label>
            <input
              name='boardXII'
              id='boardXII'
              type="text"
              placeholder='Eg. CBSE'
              onChange={handleChange}
            />
            <label htmlFor='streamXII'>Stream:</label>
            <select
              name='streamXII'
              id='streamXII'
              onChange={handleChange}
            >
              <option value="">Select Stream</option>
              <option value={'Science'}>Science</option>
              <option value={'Commerce'}>Commerce</option>
              <option value={'Arts'}>Arts</option>
            </select>
            <label htmlFor='scoreXII'>Percentage score:</label>
            <input
              name='scoreXII'
              id='scoreXII'
              type='number'
              min={0}
              max={100}
              placeholder='Out of 100'
              onChange={handleChange}
            />
          </section>

          <section>
            <legend>Secondary (X) Details:</legend>
            <label htmlFor='schoolNameX'>School Name:</label>
            <input
              name='schoolNameX'
              id='schoolNameX'
              type='text'
              placeholder='School name'
              onChange={handleChange}
            />
            <label htmlFor='completionYearX'>Completion Year:</label>
            <input
              name='completionYearX'
              id='completionYearX'
              type="number"
              min="1980"
              max="2099"
              step="1"
              placeholder='2000'
              onChange={handleChange}
            />
            <label htmlFor='boardX'>Board:</label>
            <input
              name='boardX'
              id='boardX'
              type="text"
              placeholder='Eg. CBSE'
              onChange={handleChange}
            />
            <label htmlFor='scoreX'>Percentage score:</label>
            <input
              name='scoreX'
              id='scoreX'
              type='number'
              min={0}
              max={100}
              placeholder='Out of 100'
              onChange={handleChange}
            />
          </section>
        </div>
        <button type='submit'>Submit</button>
        <button type='reset' onClick={onClose}>Close</button>
      </form>
    </div>
  );
};

export default EducationalInfo;
