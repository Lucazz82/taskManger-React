export default function MostrarTarea(props) {
    const {item, eliminarTarea} = props;
    
    return (
        <div>
            <p>
                {item.tarea}
            </p>
            <button>
                Editar
            </button>
            <button onClick={() => {eliminarTarea(item.id)}}>
                Eliminar
            </button>
        </div>
    );
}