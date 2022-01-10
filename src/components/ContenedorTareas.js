import MostrarTarea from "./MostrarTarea";

export default function ContenedorTareas(props) {
    const {tareas} = props;

    const lista = tareas.map(
        (tarea, index) => {
            return (
                <li key={index}>
                    <MostrarTarea tarea={tarea} /> 
                </li>
            );
        }
    );

    return (
        // {tareas.map((tarea) => {<mostrarTarea tarea={tarea} />})}
        <ul>
            {lista}
        </ul>
    );
}