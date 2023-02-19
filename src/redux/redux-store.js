import {combineReducers, legacy_createStore as createStore} from "redux"; 
import DialogsReducer from './DialogsReducer';
import SidebarReducer from './SidebarReducer';
import ProfileReducer from './ProfileReducer';

let reducers = combineReducers({
  profilePage: ProfileReducer,
  messagesPage: DialogsReducer,
  sideBar: SidebarReducer
});

let store = createStore(reducers);

export default store;