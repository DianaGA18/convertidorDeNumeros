import React, { useState } from 'react';

const Formulario = ({ listaTareas, agregarTarea }) => {
  const [numero, setNumero] = useState('');
  const [numeroBinario, setNumeroBinario] = useState('');
  const [numeroHexadecimal, setNumeroHexadecimal] = useState('');
  const [numeroOctal, setNumeroOctal] = useState('');
  const [historial, setHistorial] = useState([]);

  const convertirNumero = (numero) => {
    return {
      binario: (parseInt(numero, 10)).toString(2),
      hexadecimal: (parseInt(numero, 10)).toString(16).toUpperCase(),
      octal: (parseInt(numero, 10)).toString(8)
    };
  };

  const handleChangeNumero = (evt) => {
    const numeroIngresado = evt.target.value;
    setNumero(numeroIngresado);
    const conversiones = convertirNumero(numeroIngresado);
    setNumeroBinario(conversiones.binario);
    setNumeroHexadecimal(conversiones.hexadecimal);
    setNumeroOctal(conversiones.octal);
  };

  const handleGuardarRegistro = () => {
    setHistorial([...historial, {
      numeroOriginal: numero,
      numeroBinario: numeroBinario,
      numeroHexadecimal: numeroHexadecimal,
      numeroOctal: numeroOctal
    }]);
    setNumero('');
    setNumeroBinario('');
    setNumeroHexadecimal('');
    setNumeroOctal('');
  };

  return (
    <div>
      <div className="border border-secondary mx-auto">
        <h1 className="m-5">Conversor de números</h1>
        <br />
        <center>
          <form
            className="d-flex mb-4 justify-content-center"
            onSubmit={(evt) => {
              evt.preventDefault();
            }}
          >
            <div>
              <input
                required
                className="p-1 me-2"
                placeholder="Número a convertir"
                value={numero}
                onChange={handleChangeNumero}
              />
              <div className='mt-5 d-flex'>
                <section className='justify'>
                  <h3>Binario:</h3>
                  <p>{numeroBinario}</p>
                </section>
                <section className='content ms-5'>
                  <h3>Hexadecimal:</h3>
                  <p>{numeroHexadecimal}</p>
                </section>
                <section className='between ms-5'>
                  <h3>Octal:</h3>
                  <p>{numeroOctal}</p>
                </section>
              </div>
              <button className='btn btn-success end mt-5' 
              onClick={handleGuardarRegistro}>Añadir al historial</button>
              <br />
            </div>
          </form>
        </center>
      </div>
      <div className='mt-5'>
        <h3>Historial Guardado</h3>
        <ul>
          {historial.map((registro, index) => (
            <li key={index}>
              Decimal: {registro.numeroOriginal}, 
              Binario: {registro.numeroBinario}, 
              Hexadecimal: {registro.numeroHexadecimal}, 
              Octal: {registro.numeroOctal}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Formulario;
