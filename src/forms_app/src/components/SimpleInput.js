import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };
  const formSubmissionHandler = event => {
    event.preventDefault();
    const enteredValue = nameInputRef.current.value;
    setEnteredName('');

  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          ref={nameInputRef}
          onChange={nameInputChangeHandler}
          onVolumeChangeCapture={enteredName}
          />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
