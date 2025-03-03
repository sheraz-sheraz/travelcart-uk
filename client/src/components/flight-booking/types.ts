export type SeatType = 'available' | 'conditions' | 'extra-leg-room' | 'selected' | 'booked';

export interface SeatPrice {
  amount: number;
  currency: string;
}

export interface Seat {
  id: string;
  row: number;
  column: string;
  type: SeatType;
  price: SeatPrice;
}

export interface SeatMapProps {
  seats: Seat[];
  maxSeatsPerRow?: number;
  onSeatSelect?: (seat: Seat) => void;
  selectedSeats?: string[];
  maxSelectableSeats?: number;
  flightInfo: {
    airline: string;
    flightNumber: string;
    from: string;
    to: string;
  };
}