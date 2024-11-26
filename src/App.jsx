import { Route, RouterProvider } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Accessories from "./pages/Accessories";
import About from "./pages/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="service" element={<Service />} />
      <Route path="accessories" element={<Accessories />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
