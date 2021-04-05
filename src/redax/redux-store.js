import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import newsReducer from "./news-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
   profilePage: profileReducer, 
   dialogsPage: dialogsReducer, 
   newsPage: newsReducer});

let store = createStore(reducers);

export default store