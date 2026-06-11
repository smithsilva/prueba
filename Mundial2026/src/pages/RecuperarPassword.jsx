import { useState } from "react";

function RecuperarPassword() {
  const [correo, setCorreo] = useState("");

  const recuperar = (e) => {
    e.preventDefault();

    alert(
      `Se enviaron instrucciones a ${correo}`
    );
  };

  return (
    <div className="container">
      <form className="form" onSubmit={recuperar}>
        <h2>Recuperar Contraseña</h2>

        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) =>
            setCorreo(e.target.value)
          }
        />

        <button type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default RecuperarPassword;