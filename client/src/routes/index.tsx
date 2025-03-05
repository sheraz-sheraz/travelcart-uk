import Home from "../pages/Home";
import NotFound from "../components/Not-Found";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import SearchResults from "@/components/search-results";
import FlightBookingInformation from "@/components/flight-booking/filght-booking-information";
import AboutUs from "@/components/footer-components/AboutUs";
import WhyChooseUs from "@/components/footer-components/BookWithUs";
import FinancialSecurity from "@/components/footer-components/FinancialSecurity";
import ContactUs from "@/components/footer-components/ContactUs";
import PrivacyPolicy from "@/components/footer-components/PrivacyPolicy";
import FAQs from "@/components/footer-components/CustomerSupport";
import BookNowPayLater from "@/components/footer-components/Payments";
import TermsAndConditions from "@/components/footer-components/TermsAndConditions";
import VideoConferencingSupport from "@/components/footer-components/VideoConferencingSupport";

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
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/why-us",
        element: <WhyChooseUs />,
      },
      {
        path: '/security',
        element: <FinancialSecurity />,
      },
      {
        path: '/contact',
        element: <ContactUs />,
      },
      {
        path: '/privacy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/support',
        element: <FAQs />,
      },{
        path: '/payment-plans',
        element: <BookNowPayLater />,
      },
      {
        path: '/terms',
        element: <TermsAndConditions />,
      },
      {
        path: '/video-conferencing-support',
        element: <VideoConferencingSupport />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export const routes = createBrowserRouter(Routes);
