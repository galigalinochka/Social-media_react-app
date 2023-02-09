import React from 'react';
import classes from "./Dialogs.module.css";
import Dialog from './Dialog/Dialog';


const Dialogs = (props) => {

  let dialogsElements =props.users.map(dialog => <Dialog name={dialog.name} id = {dialog.id} message = {dialog.message} />)
  
  return (
    <div className = {classes.dialogs}>
        {dialogsElements}
    </div>
  );
};

export default Dialogs;