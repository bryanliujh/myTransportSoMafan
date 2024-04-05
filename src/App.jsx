import "./App.css";
import SearchBusArrivalPage from "./pages/SearchBusArrivalPage";
import SearchBusStopPage from "./pages/SearchBusStopPages";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/search-arrival",
    element: <SearchBusArrivalPage />,
  },
  {
    path: "/search-bus-stop",
    element: <SearchBusStopPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
