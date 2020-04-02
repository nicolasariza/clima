import React, { useState, useEffect, Fragment } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import Error from "./components/Error";

function App() {
  const [busqueda, setBusqueda] = useState({
    cuidad: "",
    pais: ""
  });

  const { ciudad, pais } = busqueda;

  const [consultar, setConsultar] = useState(false);

  const [resultado, setResultado] = useState({});

  const [error, setError] = useState(false);

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const appId = "79040aa3323970bc38c240d69b812626";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        console.log(url);
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setResultado(resultado);
        setConsultar(false);
        resultado.cod === "404" ? setError(true) : setError(false);
      }
    };
    consultarAPI();
  }, [consultar]);

  let componente;

  if (error) {
    componente = <Error mensaje="No hay resultados" />;
  } else {
    componente = <Clima resultado={resultado} />;
  }

  return (
    <Fragment>
      <Header titulo="Clima" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}
              />
            </div>
            <div className="col m6 s12">{componente}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
