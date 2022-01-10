import { useState } from "react";

export function IngresarTarea (props) {
    const [tarea, setTarea] = useState('');
    const {onChange} = props;

    const guardarTarea = () => {
        onChange(tarea);
        setTarea('');
    }

    return (
        <div>
            <input placeholder='Tarea' value={tarea} onChange={(e) => {setTarea(e.target.value)}}></input>
            <button onClick={guardarTarea}>Agregar</button>
        </div>
    );
}