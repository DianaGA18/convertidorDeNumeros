import { useState } from "react";
import Formulario from "./components/formulario";

function App() {
  //hook
  const [contadorID, setContadorID] = useState(0);
  const [listaTareas, setListaTareas] = useState([]);

  const agregarTarea = (task) => {
    let nuevaTarea = {
      id: contadorID,
      tarea: task,
      status: true,
    };
    setContadorID(contadorID + 1);
    setListaTareas([...listaTareas, nuevaTarea]);
  };

  return (
    <div className="container-fluid mt-5 d-flex flex-column align-items-center">
      <Formulario agregarTarea={agregarTarea} />
      <div className="mt-5">
        <ul className="list-group">
          {listaTareas.map(({ tarea, id, status }) => (
            <li
              key={id}
              className={`list-group-item ${
                status ? "list-group-item-success" : "list-group-item-danger"
              }`}
            >
              {tarea}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

//NOTAAA: SI VE QUE TENGO ALGO DE AGREGAR TAREA O TAREA ES PORQUE ME GUIE DE EL PROYECTO ANTERIOR :)
