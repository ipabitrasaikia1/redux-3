import { createStore, combineReducers, compose } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducer as TodosReducer } from "./jobs/reducer";


const rootReducer = combineReducers({
    TodosState: TodosReducer
})

export const store = createStore(rootReducer,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__()))