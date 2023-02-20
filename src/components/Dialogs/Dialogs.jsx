import React from 'react';
import classes from "./Dialogs.module.css";
import Dialog from './Dialog/Dialog';

const Dialogs = (props) => {
  debugger;
  let state = props.messagesPage;
  let newMessageBody = state.newMessageBody;
  
 
  let onSendMessageClick = () => {
    props.sendMessage(); 
  }
  
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }
  
  let dialogsElements =state.users.map(dialog => 
    <Dialog state = {state}
            name={dialog.name}
            id = {dialog.id}
            message = {dialog.message} />)
  
  return (
    <div className = {classes.dialogs}>
        {dialogsElements}
        <div>
        <div><textarea value = {newMessageBody}
                       onChange ={ onNewMessageChange }
                       placeholder = "Enter your message"></textarea></div>
        <div><button onClick ={ onSendMessageClick }
                     >Отправить</button></div>
      </div>
    </div>  
  );
};

export default Dialogs;