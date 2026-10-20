import { combineReducers, createStore } from "redux";
import gameReducer from "./gameReducer";

const savedState = localStorage.getItem("game_store");
const initialState = savedState ? JSON.parse(savedState) : undefined;

const rootReducer = combineReducers({
    game: gameReducer
})

export const store = createStore(rootReducer, initialState);

store.subscribe(() => {
    localStorage.setItem("game_store", JSON.stringify(store.getState()));
})

export default store;