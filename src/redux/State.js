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
    if (action.type === ADD_POST) {
      let newPost = { id: "5", message: this._state.profilePage.newPostText, likesCount: 0}
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  } 
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => 
  ({type: UPDATE_NEW_POST_TEXT, newText: text}) 
 
export default store;