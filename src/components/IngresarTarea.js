import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { agregar } from "../redux/actions/tareas/actions";

export function IngresarTarea () {
    const [tarea, setTarea] = useState('');
    const [id, setId] = useState(0);
    const dispatch = useDispatch();

    const guardarTarea = () => {
        let aux = {
            id: id,
            tarea: tarea
        }

        let action = agregar(aux);
        dispatch(action);
        setTarea('');
        setId(id + 1);
    }
    
    const checkEnter = (e) => {
        if(e.charCode === 13)
            guardarTarea();
    }

    return (
        <div className="col col-md-6 col-auto mx-auto">
            <div className="row align-items-center">
                <div className="col mx-auto">
                    <input className="form-control my-2" placeholder='Tarea' value={tarea} onChange={(e) => {setTarea(e.target.value)}} onKeyPress={(e) => {checkEnter(e)}} />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col col-auto mx-auto">
                    <button className="btn btn-dark my-2" onClick={guardarTarea}>Agregar</button>
                </div>
            </div>
        </div>
    );
}