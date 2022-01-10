import logo from './logo.svg';
import './App.css';
import { IngresarTarea } from './components/IngresarTarea';
import { useState } from 'react';
import ContenedorTareas from './components/ContenedorTareas';

function App() {
  // const store = {
  //   tareas: [
  //     "Comida del perro",
  //     "Ir a fruteria"
  //   ]
  // }

  const [store, setStore] = useState({tareas: []});

  const agregarTarea = (tarea) => {
    let aux = {
      tareas: store.tareas
    };
    aux.tareas.unshift(tarea);
    setStore(aux);
  };

  return (
    <div>
      <IngresarTarea onChange={agregarTarea} />
      <ContenedorTareas tareas = {store.tareas} />
    </div>
  );
}

export default App;
