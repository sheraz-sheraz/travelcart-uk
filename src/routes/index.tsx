import Home from "../pages/Home";
import NotFound from "../components/Not-Found";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import SearchResults from "@/components/search-results";
import FlightBookingInformation from "@/components/flight-booking/filght-booking-information";

export const Routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search-flights",
        element: <SearchResults />,
      },
      {
        path: "/booking-information",
        element: <FlightBookingInformation />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export const routes = createBrowserRouter(Routes);
