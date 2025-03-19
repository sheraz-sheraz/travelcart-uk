import axios from "axios";
import apiClient from "./apiClient";
import API_ENDPOINTS from "./endpoints";

const getFlightOffers = params => {
    const { originLocationCode, destinationLocationCode, departureDate, returnDate, adults, children, infants, travelClass } = params;
  
    return apiClient.get(API_ENDPOINTS.FLIGHT_OFFERS, {
      params: {
        originLocationCode,
        destinationLocationCode,
        departureDate,
        returnDate,
        adults,
        children,
        infants,
        travelClass
      }
    });
  };
  
  const confirmFlightOffer = params => {
    const { originLocationCode, destinationLocationCode, departureDate, returnDate, adults, children, infants, travelClass } = params;
  
    return apiClient.get(API_ENDPOINTS.FLIGHT_OFFERS, {
      params: {
        originLocationCode,
        destinationLocationCode,
        departureDate,
        returnDate,
        adults,
        children,
        infants,
        travelClass
      }
    });
  };
  export {
    getFlightOffers,
    confirmFlightOffer
};