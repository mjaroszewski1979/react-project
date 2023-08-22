import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredSecondName,
    isValid: enteredSecondNameIsValid,
    hasError: secondNameInputHasError,
    valueChangeHandler: secondNameChangeHandler,
    inputBlurHandler: secondNameBlurHandler,
    reset: resetSecondNameInput
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

  if (enteredFirstNameIsValid && enteredSecondNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetFirstNameInput();
    resetSecondNameInput();
    resetEmailInput();
    
    }
    //const enteredValue = nameInputRef.current.value;

  const inputFirstNameClasses = !firstNameInputHasError ? 'form-control' : 'form-control invalid';
  const inputSecondNameClasses = !secondNameInputHasError ? 'form-control' : 'form-control invalid';
  const inputEmailClasses = !emailInputHasError ? 'form-control' : 'form-control invalid';
  
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
      <div className={inputFirstNameClasses}>
        <label htmlFor='name'>First Name</label>
        <input 
          type='text' 
          id='first-name' 
          // ref={nameInputRef}
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
          value={enteredFirstName}
          />
        {firstNameInputHasError && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={inputSecondNameClasses}>
        <label htmlFor='name'>Second Name</label>
        <input 
          type='text' 
          id='second-name' 
          // ref={nameInputRef}
          onChange={secondNameChangeHandler}
          onBlur={secondNameBlurHandler}
          value={enteredSecondName}
          />
        {secondNameInputHasError && <p className="error-text">Name must not be empty.</p>}
      </div>
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

export default BasicForm;
