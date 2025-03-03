"use client";

import { Card } from "@/components/ui/card";
import { CheckCircle, XCircle, MoveUpRight } from "lucide-react";
import selectedSeat from "@/assets/icons/seats/selected-seat.svg";
import availableSeat from "@/assets/icons/seats/available-seat.svg";
import bookedSeat from "@/assets/icons/seats/booked-seat.svg";
import extraLegroomSeat from "@/assets/icons/seats/extra-legroom-seat.svg";
import withCondtionSeat from "@/assets/icons/seats/with-condition-seat.svg";


const SeatLegend = () => (
  <div className="flex gap-2 items-center mb-4">
    <div className="flex items-center gap-1"> <img src={availableSeat} alt="" />
      <p className="text-sm">Available</p>
    </div>
    <div className="flex items-center gap-1"> <img src={bookedSeat} alt="" />
      <p className="text-sm">Booked Seat</p>
    </div>
    <div className="flex items-center gap-1"> <img src={selectedSeat} alt="" />
      <p className="text-sm">Selected Seat</p>
    </div>
    <div className="flex items-center gap-1"><img src={extraLegroomSeat} alt="" />
      <p className="text-sm">Extra Leg Room</p>
    </div>
    <div className="flex items-center gap-1"><img src={withCondtionSeat} alt="" />
      <p className="text-sm">Width Condition Seat</p>
    </div>
  </div>
);

const Seat = ({ seatType }: { seatType: any }) => (
  <div className="flex flex-col items-center">
    {/* TODO: Replace div below with correct SVG for each seat type */}
    <div className="w-8 h-8 flex items-center justify-center rounded-sm">
      {seatType === "available" && <span> <img src={availableSeat} alt="" /> </span>}
      {seatType === "booked" && <span> <img src={bookedSeat} alt="" /> </span>}
      {seatType === "selected" && <span> <img src={selectedSeat} alt="" /> </span>}
      {seatType === "extra" && <span> <img src={extraLegroomSeat} alt="" /> </span>}
      {seatType === "condition" && <span> <img src={withCondtionSeat} alt="" /> </span>}
    </div>
  </div>
);

const SeatSelection = () => {
  const rows = 11;
  const cols = ['A', 'B', 'C', 'D', 'E', 'F', 'H', 'J', 'K']; // Removed empty gaps
  const seatMap = {
    "available": 34,
    "premium": 47,
    "extra": 69,
  };
  const bookedSeats = ['3A', '3B', '3C', '4A', '4B', '4C', '4D', '4E', '4F', '4H', '4J', '4K'];
  const selectedSeats = ['5H', '5J'];
  const extraLegroomSeats = ['11A', '11B', '11C'];

  return (
    <Card className="p-6 rounded-2xl shadow-sm w-full">
      <h2 className="text-lg font-semibold mb-4">Select Sitting</h2>
      <SeatLegend />
      <div className="grid grid-cols-9 gap-1 text-center text-sm"> {/* Adjusted columns count */}
        {cols.map((col, idx) => (
          <div key={idx} className="font-bold">{col}</div>
        ))}
        {[...Array(rows)].map((_, rowIndex) => (
          <>
            {cols.map((col, colIndex) => {
              const seatId = `${rowIndex + 1}${col}`;
              let seatType = "available";
              if (bookedSeats.includes(seatId)) seatType = "booked";
              if (selectedSeats.includes(seatId)) seatType = "selected";
              if (extraLegroomSeats.includes(seatId)) seatType = "extra";
              return <Seat key={seatId} seatType={seatType} />;
            })}
          </>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-gray-200 text-black px-6 py-2 rounded-lg">Exit</button>
        <button className="bg-gray-200 text-black px-6 py-2 rounded-lg">Exit</button>
      </div>
    </Card>
  );
};

export default SeatSelection;
