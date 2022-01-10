import MostrarTarea from "./MostrarTarea";

export default function ContenedorTareas(props) {
    const {tareas, eliminarTarea, editarTarea} = props; 

    return (
        <ul>
            {tareas.map(
                (item, index) => {
                    return (
                    <li key={index}>
                        <MostrarTarea item={item} eliminarTarea={eliminarTarea} editarTarea={editarTarea}/> 
                    </li>
                    );
                }
        )}
        </ul>
    );
}