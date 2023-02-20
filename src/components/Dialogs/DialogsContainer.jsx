import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/DialogsReducer';


const DialogsContainer = (props) => {
  let state = props.store.getState().messagesPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator()); 
  }
  
  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyActionCreator(body));
  }
  
  return (
    <Dialogs updateNewMessageBody = { onNewMessageChange } 
             sendMessage = { onSendMessageClick }
             messagesPage = { state } />  
  );
};

export default DialogsContainer;