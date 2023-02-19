import React from 'react';
import classes from "./Dialogs.module.css";
import Dialog from './Dialog/Dialog';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/DialogsReducer';


const Dialogs = (props) => {
  let state = props.store.getState().messagesPage;
  let newMessageBody = state.newMessageBody;
 
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator()); 
  }
  
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyActionCreator(body));
  }
  
  let dialogsElements =state.users.map(dialog => 
    <Dialog dispatch = {props.store.dispatch}
            state = {state}
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