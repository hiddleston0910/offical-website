import {
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Home from "@/Page/Home";

const App = () => {
  const routes = createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
    </>
  );

  return <RouterProvider router={createHashRouter(routes)} />;
};

export default App;
