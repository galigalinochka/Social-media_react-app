import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/DialogsReducer';
import { connect } from 'react-redux';

/*const DialogsContainer = () => {
  let state = props.store.getState().messagesPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator()); 
  }
  
  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyActionCreator(body));
  }
  
  return <StoreContext.Consumer>(
    <Dialogs updateNewMessageBody = { onNewMessageChange } 
             sendMessage = { onSendMessageClick }
             messagesPage = { state } />  
  );
  </StoreContext.Consumer> 
};*/

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyActionCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    }
  }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;