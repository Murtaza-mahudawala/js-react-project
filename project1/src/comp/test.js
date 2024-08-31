import React, { useState } from 'react';

const Test = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const correctAnswer = 'Delhi';

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === correctAnswer) {
      window.location.href = 'https://amazon.com';
    } else {
      alert('Incorrect answer');
    }
  };

  return (
    <div>
      <h1>Question: Capital Of India?</h1>
      <form>
        <label>
          <input
            type="radio"
            value="Delhi"
            checked={selectedOption === 'Delhi'}
            onChange={handleChange}
          />
          Delhi
        </label><br/>
        <label>
          <input
            type="radio"
            value="Paris"
            checked={selectedOption === 'Paris'}
            onChange={handleChange}
          />
          Paris
        </label><br/>
        <label>
          <input
            type="radio"
            value="Tokyo"
            checked={selectedOption === 'Tokyo'}
            onChange={handleChange}
          />
          Tokyo
        </label><br/>
        <label>
          <input
            type="radio"
            value="Berlin"
            checked={selectedOption === 'Berlin'}
            onChange={handleChange}
          />
          Berlin
        </label><br/>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Test;
