import { useState } from 'react'
import './App.css'
import PersonalInfo from './components/personalInfo'
import EducationalInfo from './components/educationalInfo';
import ProfessionalInfo from './components/professionalInfo';

function App() {
  const [visible, setVisible] = useState('none')
  const [visible2, setVisible2] = useState('none')
  const [visible3, setVisible3] = useState('none')

  const [formData, setFormData] = useState({
    personalData: {},
    educationData: {},
    professionData: {},
  });

  const handlePersonalData = (data) => {
    setFormData(prevData => ({
      ...prevData,
      personalData: data
    }));
  };

  const handleEducationData = (data) => {
    setFormData(prevData => ({
      ...prevData,
      educationData: data
    }));
  };

  const handleProfessionData = (data) => {
    setFormData(prevData => ({
      ...prevData,
      professionData: data
    }));
  };
  const getResume = () => {
    return <>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <h3>Personal Info</h3>
        <button onClick={() => setVisible('block')}>edit</button>
      </div>
      <p>Name:<span> {formData.personalData.firstName} {formData.personalData.lastName}</span></p>
      <p>Email:<span> {formData.personalData.email}</span></p>
      <p>Phone: <span> {formData.personalData.phone}</span></p>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <h3>College Info</h3>
        <button  onClick={() => setVisible2('block')}>edit</button>
      </div>
      <p>Name: <span> {formData.educationData.collegeName}</span></p>
      <p>Start Year: <span> {formData.educationData.collegeStartYear}</span></p>
      <p>End Year: <span> {formData.educationData.collegeEndYear}</span></p>
      <p>Degree: <span> {formData.educationData.collegeDegree}</span></p>
      <p>Stream: <span> {formData.educationData.collegeStream}</span></p>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <h3>Senior Secondary or Equivalent (XII)</h3>
        <button  onClick={() => setVisible2('block')}>edit</button>
      </div>
      <p>Name: <span> {formData.educationData.schoolNameXII}</span></p>
      <p>Completion Year: <span> {formData.educationData.completionYearXII}</span></p>
      <p>Board: <span> {formData.educationData.boardXII}</span></p>
      <p>Stream: <span> {formData.educationData.streamXII}</span></p>
      <p>Percentage score: <span> {formData.educationData.scoreXII}</span></p>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <h3>Secondary (X)</h3>
        <button  onClick={() => setVisible2('block')}>edit</button>
      </div>
      <p>Name: <span> {formData.educationData.schoolNameX}</span></p>
      <p>Completion Year: <span> {formData.educationData.completionYearX}</span></p>
      <p>Board: <span> {formData.educationData.boardX}</span></p>
      <p>Percentage score: <span> {formData.educationData.scoreX}</span></p>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <h3>Professional Experience</h3>
        <button  onClick={() => setVisible3('block')}>edit</button>
      </div>
      <p>Company Name: <span>{formData.professionData.companyName}</span></p>
      <p>Position Title: <span>{formData.professionData.positionTitle}</span></p>
      <p>Responsibilities: <span>{formData.professionData.responsibilities}</span></p>
      <p>Start Date: <span>{formData.professionData.startDate}</span></p>
      <p>End Date: <span>{formData.professionData.endDate}</span></p>

    </>
  }

  return (
    <>
      <div className='formContainer'>
        <PersonalInfo onUpdate={handlePersonalData} visibility={visible} onClose={() => setVisible('none')}></PersonalInfo>
        <EducationalInfo educationalData={handleEducationData} visibility={visible2} onClose={() => setVisible2('none')}></EducationalInfo>
        <ProfessionalInfo professionalData={handleProfessionData} visibility={visible3} onClose={() => setVisible3('none')}></ProfessionalInfo>
      </div>
      <div className='resume'>
        <h1>Resume</h1>
        {getResume()}
      </div>
    </>
  )
}

export default App
