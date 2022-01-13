import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editar, eliminar } from "../redux/actions/tareas/actions";

export default function MostrarTarea(props) {
    const {item} = props;
    const [estaEditando, setEstaEditando] = useState(false);
    const [tareaEditada, setTareaEditada] = useState(item.tarea);
    const dispatch = useDispatch();
    
    const confirmarCambios = () => {
        let aux = {
            id: item.id,
            tarea: tareaEditada
        }

        let action = editar(aux);
        
        dispatch(action);
        setEstaEditando(false);
    }

    const eliminarTarea = (id) => {
        let aux = {
            id: id
        }

        let action = eliminar(aux);
        dispatch(action);
    }
    
    const checkEnter = (e) => {
        if(e.charCode === 13)
            confirmarCambios();
    }
    
    useEffect(() => {
        setTareaEditada(item.tarea);
    }, [estaEditando]);

    return (
        <div className="row align-items-center">
            {!estaEditando &&
                <>
                    <div className="col col-md-8 col-auto"> 
                        <p>
                            {item.tarea}
                        </p>
                    </div>
                    <div className="col col-md-1 col-auto">
                        <button className="btn btn-warning" onClick={() => {setEstaEditando(true)}}>
                            Editar
                        </button>
                    </div>
                    <div className="col col-md-1 col-auto">
                        <button className="btn btn-danger" onClick={() => {eliminarTarea(item.id)}}>
                            Eliminar
                        </button>
                    </div>
                </>
            }

            {estaEditando && 
                <>
                <div className="col col-md-8 col-auto"> 
                    <input className="form-control" value={tareaEditada} onChange={(e) => {setTareaEditada(e.target.value)}} onKeyPress={(e) => {checkEnter(e)}}/>
                </div>
                <div className="col col-md-1 col-auto">
                    <button className="btn btn-success" onClick={confirmarCambios}>Confirmar</button>
                </div>
                <div className="col col-md-1 col-auto">
                    <button className="btn btn-danger" onClick={() => {setEstaEditando(false)}}>Cancelar</button>
                </div>
                </>
            }
        </div>
    );
}