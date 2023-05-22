import Rutas from "./routers/routes";
import { Toaster } from "react-hot-toast";

import "./index.css";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <Rutas />
    </>
  );
}

export default App;
