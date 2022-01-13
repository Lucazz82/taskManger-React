import logo from './logo.svg';
import './App.css';
import { IngresarTarea } from './components/IngresarTarea';
import { useState } from 'react';
import ContenedorTareas from './components/ContenedorTareas';
import { Provider } from 'react-redux';
import store from './redux/store/Store';

function App() {

  return (
    <Provider store={store}>
      <div className="container my-md-5">
        <div className="row align-items-center">
            <IngresarTarea />
        </div>
        <hr/>
        <div className="row">
          <div className="col">
            <ContenedorTareas />
          </div>
        </div>
              
      </div>
    </Provider>
  );
}

export default App;
