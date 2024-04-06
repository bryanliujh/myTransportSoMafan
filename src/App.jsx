import "./App.css";
import SearchBusArrivalPage from "./pages/SearchBusArrivalPage";
import SearchBusServicePage from "./pages/SearchBusServicePage";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BusTimeMapPage from "./pages/BusTimeMapPage";
import ResultsPage from "./pages/ResultsPage";
import MainMenuPage from "./pages/MainMenuPage";

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
  {
    path: "/main-menu-page",
    element: <MainMenuPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
