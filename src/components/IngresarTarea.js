import { useState } from "react";

export function IngresarTarea (props) {
    const [tarea, setTarea] = useState('');
    const {onChange} = props;

    const guardarTarea = () => {
        onChange(tarea);
        setTarea('');
    }

    const checkEnter = (e) => {
        if(e.charCode == 13)
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