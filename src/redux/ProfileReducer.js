const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
  postsData: [
    { id: "1", message: "How are you?", likesCount: "1"},
    { id: "2", message: "What's the weather like today?", likesCount: "1"},
    { id: "3", message: "Love", likesCount: "3"},
    { id: "4", message: "Museums are nice", likesCount: "11"},
  ],
}

const ProfileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST: {
      let newPost = { id: "5", message: state.newPostText, likesCount: 0}
      let stateCopy = {...state};
      stateCopy.postsData = [...state.postsData];
      stateCopy.postsData.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state};
      stateCopy.newPostText = action.newText;
      return stateCopy;
    
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => 
  ({type: UPDATE_NEW_POST_TEXT, newText: text}) 

export default ProfileReducer;