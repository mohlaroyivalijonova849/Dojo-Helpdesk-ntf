import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Create from "./components/Create";
import Home from "./components/Home";
import NewTikert from "./components/NewTikert";
import MainLayout from "./layout/MainLayout";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/newTikert" element={<NewTikert />}>
          <Route path="" element={<Create />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
