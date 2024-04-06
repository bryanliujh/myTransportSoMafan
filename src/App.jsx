import "./App.css";
import SearchBusArrivalPage from "./pages/SearchBusArrivalPage";
import SearchBusServicePage from "./pages/SearchBusServicePage";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BusTimeMapPage from "./pages/BusTimeMapPage";
import ResultsPage from "./pages/ResultsPage";

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
    path: "/search-bus-service",
    element: <SearchBusServicePage />,
  },
  {
    path: "/bus-time-map",
    element: <BusTimeMapPage />,
  },
  {
    path: "/results-page",
    element: <ResultsPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
