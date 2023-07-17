import { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {

        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'An error occured',
                message: 'Invalid input. Try again.',
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'An error occured',
                message: 'Invalid age. Try again with greater than zero!',
            });
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value= '';
        ageInputRef.current.value = '';
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" ref={nameInputRef}/>
                <label htmlFor="age">Age</label>
                <input id="age" type="number" ref={ageInputRef}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </div>
    );

};

export default AddUser;