import { combineReducers, createStore } from "redux"; 
import gameReducer from "./gameReducer"; 
import { mergeInitialState } from "../shared/utils/mergeInitialState";

const rootReducer = combineReducers({ 
  game: gameReducer, 
});

// 1. Отримуємо чистий початковий стан від самого Reducer
const defaultState = rootReducer(undefined, { type: "@@INIT" });

// 2. Завантажуємо збережений стан
const savedStateRaw = localStorage.getItem("game_store"); 
const savedState = savedStateRaw ? JSON.parse(savedStateRaw) : undefined;

// 3. Об'єднуємо їх за допомогою нашої функції
const initialState = savedState ? mergeInitialState(savedState, defaultState) : defaultState;

// 4. Створюємо стор із актуальним станом
export const store = createStore(rootReducer, initialState); 

store.subscribe(() => { 
  localStorage.setItem("game_store", JSON.stringify(store.getState())); 
});

export default store;
