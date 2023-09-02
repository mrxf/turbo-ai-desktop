import { RouterProvider } from "react-router-dom";
import "./App.scss";
import { router } from "./Pages/router";

function App() {
  return (
    <div className='flex w-screen'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
