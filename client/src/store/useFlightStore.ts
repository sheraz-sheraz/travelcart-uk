import { create } from "zustand";

// Define the structure of a flight offer
interface FlightOffer {
  id: string;
  validatingAirlineCodes: string[];
  price: {
    total: string;
  };
}

// Zustand store interface
interface FlightStore {
  flights: FlightOffer[]; // Stores the flight search results
  selectedFlight: FlightOffer | null; // Stores the user's selected flight
  setFlights: (flights: FlightOffer[]) => void; // Updates the flight results
  selectFlight: (flight: FlightOffer) => void; // Sets a selected flight
}

// Create Zustand store
export const useFlightStore = create<FlightStore>((set) => ({
  flights: [],
  selectedFlight: null,
  setFlights: (flights) => set({ flights }),
  selectFlight: (flight) => set({ selectedFlight: flight }),
}));
