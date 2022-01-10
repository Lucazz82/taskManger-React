import { useEffect, useState } from "react";

export default function MostrarTarea(props) {
    const {item, eliminarTarea, editarTarea} = props;
    const [estaEditando, setEstaEditando] = useState(false);
    const [tareaEditada, setTareaEditada] = useState(item.tarea);
    
    const confirmarCambios = () => {
        let aux = {
            id: item.id,
            tarea: tareaEditada
        }
        
        editarTarea(aux);
        setEstaEditando(false);
    }

    useEffect(() => {
        setTareaEditada(item.tarea);
    }, [estaEditando]);

    return (
        <div>
            {!estaEditando &&
                <> 
                <p>
                    {item.tarea}
                </p>
                <button onClick={() => {setEstaEditando(true)}}>
                    Editar
                </button>
                <button onClick={() => {eliminarTarea(item.id)}}>
                    Eliminar
                </button>
                </>
            }

            {estaEditando && 
                <>
                    <input value={tareaEditada} onChange={(e) => {setTareaEditada(e.target.value)}} />
                    <button onClick={confirmarCambios}>Confirmar</button>
                    <button onClick={() => {setEstaEditando(false)}}>Cancelar</button>
                </>
            }
        </div>
    );
}