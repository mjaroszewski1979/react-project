import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };
  const formSubmissionHandler = event => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    //const enteredValue = nameInputRef.current.value;
    setEnteredName('');

  }
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const inputNameClasses = !nameInputIsInvalid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputNameClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          ref={nameInputRef}
          onChange={nameInputChangeHandler}
          value={enteredName}
          />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
