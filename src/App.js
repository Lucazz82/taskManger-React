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

  const eliminarTarea = (id) => {
    let aux = {
      tareas: store.tareas.filter(tarea => tarea.id != id)
    }

    setStore(aux);
  };

  const editarTarea = (item) => {
    let pos = store.tareas.findIndex(x => x.id == item.id);
    let array = store.tareas;
    array[pos] = item;

    let aux = {
      tareas: array
    }

    setStore(aux);
  }
  return (
    <div>
      <IngresarTarea onChange={agregarTarea} />
      <ContenedorTareas tareas = {store.tareas} eliminarTarea = {eliminarTarea} editarTarea={editarTarea}/>
    </div>
  );
}

export default App;
