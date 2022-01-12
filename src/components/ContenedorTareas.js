import MostrarTarea from "./MostrarTarea";

export default function ContenedorTareas(props) {
    const {tareas, eliminarTarea, editarTarea} = props; 

    return (
        <ul className="list-group list-group-flush">
            {tareas.map(
                (item, index) => {
                    return (
                    <li className="list-group-item" key={index}>
                        <MostrarTarea item={item} eliminarTarea={eliminarTarea} editarTarea={editarTarea}/> 
                    </li>
                    );
                }
        )}
        </ul>
    );
}