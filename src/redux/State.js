let rerenderEntireTree = () => {
  console.log('state changed');
}

const state = {
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
}

export const addPost = () => {
  
  let newPost = { id: "5", message: state.profilePage.newPostText, likesCount: 0}
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;