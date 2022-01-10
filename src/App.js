import logo from './logo.svg';
import './App.css';
import { IngresarTarea } from './components/IngresarTarea';
import { useState } from 'react';
import ContenedorTareas from './components/ContenedorTareas';

function App() {
  const [store, setStore] = useState({tareas: []});

  const agregarTarea = (tarea) => {
    let aux = {
      tareas: store.tareas
    };

    aux.tareas.unshift({
      id: aux.tareas.length, 
      tarea: tarea
    });

    setStore(aux);
  };

  const eliminarTarea = (item) => {
    let aux = {
      tareas: store.tareas.filter(tarea => tarea.id != item.id)
    }

    setStore(aux);
  };


  return (
    <div>
      <IngresarTarea onChange={agregarTarea} />
      <ContenedorTareas tareas = {store.tareas} eliminarTarea = {eliminarTarea}/>
    </div>
  );
}

export default App;
