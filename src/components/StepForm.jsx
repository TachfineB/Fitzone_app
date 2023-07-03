import React, { useState } from 'react';
import styles from '../style';


const Step1 = ({ onNext }) => {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNext();
  };

  return (
    <section id='form'>
    <div >
        <p className={`${styles.heading2} text-center mb-20`}> Start your journey</p>
      <form className={`${styles.flexCenter} mt-6`} onSubmit={handleSubmit}>
        <div className='form-group mr-10'>
        <label className='title-color mr-5'htmlFor="name">Name: <br /></label>
        <input  className='border-input h-[30px]'type="text" id="name" value={name} onChange={handleNameChange} required />
        </div>
        <div className='form-group mr-10'>
        <label className='title-color mr-5'htmlFor="gender">Gender: <br /></label>
        <input className='border-input h-[30px]' type="text" id="name" value={name} onChange={handleNameChange} required />
        </div>
        <br />
        <div className='form-group mr-10'>
        <label className='title-color mr-5'htmlFor="number">Phone number:<br /></label>
        <input className='border-input h-[30px]' type="number" id="name" value={name} onChange={handleNameChange} required />
        </div>
        <button className={`${styles}py-4 px-6 bg-yellow-gradient font-popping font-medium text-[18px] text-primary outline-none  rounded-[10px] mr-5' `}type="submit">Next</button>
      </form>
    </div>
    </section>
  );
};

const Step2 = ({ onPrevious }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div>
        <p className={`${styles.heading2} text-center mb-20`}> Finish setting up your goals</p>
      <form onSubmit={handleSubmit}>
        <label className='title-color mr-5' htmlFor="options">What is your goal?</label>
        <select className='mr-10' id="options" value={selectedOption} onChange={handleOptionChange} required>
          <option value="">Select an option</option>
          <option value="option1">Gain weight</option>
          <option value="option2">Lose weight</option>
          <option value="option3">Maintain my current weight</option>
          <option value="option4">Cardio</option>
        </select>
        <button className={`${styles}py-4 px-6 bg-yellow-gradient font-popping font-medium text-[18px] text-primary outline-none  rounded-[10px] mr-5' `} type="submit">Submit</button>
        <button className={`${styles}py-4 px-6 bg-yellow-gradient font-popping font-medium text-[18px] text-primary outline-none  rounded-[10px] ml-5' `} type="button" onClick={onPrevious}>Previous</button>
      </form>
    </div>
  );
};

const StepByStepPage = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {step === 1 && <Step1 onNext={handleNextStep} />}
      {step === 2 && <Step2 onPrevious={handlePreviousStep} />}
    </div>
  );
};

export default StepByStepPage;
