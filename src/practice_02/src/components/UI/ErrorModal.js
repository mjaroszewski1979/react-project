import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import { Fragment } from "react";
import reactDom from "react-dom";

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>;

};

const ModalOverlay = props => {
    return (
        <Card className={classes.modal}>
                <header>
                    <h2 className={classes.header}>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Send</Button>
                </footer>
        </Card>
    );
};

const ErrorModal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>, document.getElementById('overlay-root'))}
        </Fragment>
    )
};

export default ErrorModal;