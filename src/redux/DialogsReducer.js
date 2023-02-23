const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
  users: [
    { id: "1", name: "Marina", message: "Hallo" }, 
    { id: "2", name: "Marina", message: "Bis bald" },
    { id: "3", name: "Lina", message: "Guten morgen" },
    { id: "4", name: "Mark", message: "Uuuuuu" },
    { id: "5", name: "Mandarina", message: "Miyyyyy" }
  ],

  newMessageBody:''
}

const DialogsReducer = (state = initialState, action) => {
  let stateCopy = {
      ...state,
      users: [...state.users]
  };

  switch(action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      }

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        users: [...state.users, { id: "6", name: "Kolya", message: body }]
      }

    default:
      return state;
  } 
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyActionCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY, body: body
})

export default DialogsReducer;