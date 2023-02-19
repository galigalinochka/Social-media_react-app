import DialogsReducer from './DialogsReducer';
import SidebarReducer from './SidebarReducer';
import ProfileReducer from './ProfileReducer';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: "1", message: "How are you?", likesCount: "1"},
        { id: "2", message: "What's the weather like today?", likesCount: "1"},
        { id: "3", message: "Love", likesCount: "3"},
        { id: "4", message: "Museums are nice", likesCount: "11"},
      ],
    },
    messagesPage: {
      users: [
        { id: "1", name: "Marina", message: "Hallo" }, 
        { id: "2", name: "Marina", message: "Bis bald" },
        { id: "3", name: "Lina", message: "Guten morgen" },
        { id: "4", name: "Mark", message: "Uuuuuu" },
        { id: "5", name: "Mandarina", message: "Miyyyyy" }
      ],
      newMessageBody:''
    },
    sideBar: {
      friends: [
        { id: "1", name: "Marina" }, 
        { id: "2", name: "Marina" },
        { id: "3", name: "Lina"}
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('state changed');
  },
 
  subscribe (observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = ProfileReducer(this._state.profilePage, action);
    this._state.messagesPage = DialogsReducer(this._state.messagesPage, action);
    this._state.sideBar = SidebarReducer(this._state.sideBar, action);
   
    this._callSubscriber(this._state);
    }
}

export default store;