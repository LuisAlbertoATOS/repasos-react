import { useRef, useState } from "react";

const RefForm = () => {
  const nombreRef = useRef(null);
  const resultadoRef = useRef(null);

  const procesar = () => {
    resultadoRef.current.innerHTML = nombreRef.current.value;
  };

  return (
    <div>
      <input type="text" ref={nombreRef} />
      <button onClick={procesar}>Enviar ref</button>

      <div ref={resultadoRef}>A</div>
      <div ref={resultadoRef}>B</div>
      <div ref={resultadoRef}>C</div>
    </div>
  );
};

export default RefForm;
