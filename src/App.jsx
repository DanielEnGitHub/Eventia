import Rutas from "./routers/routes";
import { Toaster } from "react-hot-toast";

import "./index.css";
import { useLogOut } from "./hooks/useLogOut";
import { useEffect } from "react";

function App() {
  const { verifiyUser } = useLogOut();

  // check at page load if a user is authenticated
  useEffect(() => {
    verifiyUser();
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <Rutas />
    </>
  );
}

export default App;
