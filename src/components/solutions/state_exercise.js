import React from 'react';
 
import './styles.css';
 
// don't change the Component name "App"
export default function App() {
    const [messageValidity, setMessageValidity] = React.useState('Invalid');
    
    function messageChangeHandler(event) {
        const value = event.target.value;
        if (value.trim().length < 3) {
            setMessageValidity('Invalid')
        } else {
            setMessageValidity('Valid');
        }
    }
    
    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange={messageChangeHandler} />
            <p>{messageValidity} message</p>
        </form>
    );
}