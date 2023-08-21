import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  // const nameInputRef = useRef();

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));


  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    resetNameInput();
    resetEmailInput();

    if (!enteredNameIsValid | !enteredEmailIsValid) {
      return;
    }
    }
    //const enteredValue = nameInputRef.current.value;

  const inputNameClasses = !nameInputHasError ? 'form-control' : 'form-control invalid';
  const inputEmailClasses = !emailInputHasError ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputNameClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          // ref={nameInputRef}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
          />
        {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={inputEmailClasses}>
        <label htmlFor='email'>Your Email</label>
        <input 
          type='email' 
          id='email' 
          // ref={nameInputRef}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          />
        {emailInputHasError && <p className="error-text">Email must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
