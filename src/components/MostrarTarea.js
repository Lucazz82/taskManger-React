export default function MostrarTarea(props) {
    const {tarea} = props;
    return (
        <div>
            <p>
                {tarea}
            </p>
            <button>
                Editar
            </button>
            <button>
                Eliminar
            </button>
        </div>
    );
}