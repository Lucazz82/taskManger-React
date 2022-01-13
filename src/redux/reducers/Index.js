import { combineReducers } from "redux";
import { TareasReducer } from "./tareas/reducer";

export default combineReducers({
    tareas: TareasReducer
});