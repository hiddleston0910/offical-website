import {
  createBrowserRouter,
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

  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default App;
