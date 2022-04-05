import React from 'react';
import { Card, Button } from 'react-bootstrap';
import classes from '../ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onCancel}/>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Confirm</Button>
          <Button onClick={props.onCancel}>Cancel</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;