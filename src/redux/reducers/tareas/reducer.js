import { types } from "../../types/tareas/types";

const estadoInicial = {
    tareas: []
}

export const TareasReducer = (state = estadoInicial, action) => {
    let aux = Object.assign({}, state);

    switch (action.type) {
        case types.TAREAS_AGREGAR:
            aux.tareas.unshift(action.payload);
            break;

        case types.TAREAS_ELIMINAR:
            aux.tareas = aux.tareas.filter(item => item.id !== action.payload.id);
            break;

        case types.TAREAS_EDITAR:
            let pos = aux.tareas.findIndex(x => x.id === action.payload.id);
            aux.tareas[pos] = action.payload;
            break;

    }

    return aux;
}