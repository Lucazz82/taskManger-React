import { useSelector } from "react-redux";
import MostrarTarea from "./MostrarTarea";

export default function ContenedorTareas() {
    const items = useSelector(
        (state) => state.tareas
    );

    return (
        <ul className="list-group list-group-flush">
            {items.tareas.map(
                (item, index) => {
                    return (
                    <li className="list-group-item" key={index}>
                        <MostrarTarea item={item} /> 
                    </li>
                    );
                }
        )}
        </ul>
    );
}