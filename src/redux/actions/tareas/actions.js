import { types } from "../../types/tareas/types"

export const agregar = (item) => ({
    type: types.TAREAS_AGREGAR,
    payload: item
})

export const eliminar = (item) => ({
    type: types.TAREAS_ELIMINAR,
    payload: item
})

export const editar = (item) => ({
    type: types.TAREAS_EDITAR,
    payload: item
})