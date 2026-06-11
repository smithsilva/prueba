import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Equipos from "./pages/Equipos";
import Partidos from "./pages/Partidos";
import Estadisticas from "./pages/Estadisticas";
import Noticias from "./pages/Noticias";
import RecuperarPassword from "./pages/RecuperarPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/equipos"
          element={<Equipos />}
        />

        <Route
          path="/partidos"
          element={<Partidos />}
        />

        <Route
          path="/estadisticas"
          element={<Estadisticas />}
        />

        <Route
          path="/noticias"
          element={<Noticias />}
        />

        <Route
          path="/recuperar-password"
          element={<RecuperarPassword />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;