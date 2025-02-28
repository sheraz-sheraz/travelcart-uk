import { useMemo } from "react";
import { Seat } from "./seat";
import { SeatMapProps, Seat as SeatType } from "./types";
import { Card } from "@/components/ui/card";
import { Button } from "../ui/button";
import selectedSeat from "@/assets/icons/seats/selected-seat.svg";
import availableSeat from "@/assets/icons/seats/available-seat.svg";
import bookedSeat from "@/assets/icons/seats/booked-seat.svg";
import extraLegroomSeat from "@/assets/icons/seats/extra-legroom-seat.svg";
import withCondtionSeat from "@/assets/icons/seats/with-condition-seat.svg";
import { CheckCircle2 } from "lucide-react";

export function SeatMap({
    seats,
    onSeatSelect,
    selectedSeats = [],
    maxSelectableSeats = 9,
    flightInfo,
}: SeatMapProps) {
    const seatsByRow = useMemo(() => {
        const grouped = seats.reduce((acc, seat) => {
            if (!acc[seat.row]) {
                acc[seat.row] = {};
            }
            acc[seat.row][seat.column] = seat;
            return acc;
        }, {} as Record<number, Record<string, SeatType>>);

        return Object.entries(grouped).sort(([a], [b]) => Number(a) - Number(b));
    }, [seats]);

    const handleSeatClick = (seat: SeatType) => {
        if (
            selectedSeats.includes(seat.id) ||
            selectedSeats.length < maxSelectableSeats
        ) {
            onSeatSelect?.(seat);
        }
    };

    const getSeat = (rowSeats: Record<string, SeatType>, column: string) => {
        return rowSeats[column];
    };

    return (
        <Card className="p-6 w-full rounded-2xl shadow-sm">
            <div className="mb-6">
                <div className="">
                    <p className="text-sm text-gray-500">seating 1 of 3</p>
                    <h3 className="text-lg font-semibold">Department</h3>
                </div>
                <div className="flex items-center justify-between mb-2 ">
                    <div className="flex items-center gap-1">
                        <div>
                            <h3 className="font-semibold">{flightInfo.airline} {flightInfo.flightNumber}</h3>
                            <p className="text-sm text-gray-500">
                                {flightInfo.from} → {flightInfo.to}
                            </p>
                        </div>
                    </div>
                    <div className="text-right bg-green-100 rounded-full flex items-center justify-center px-4 py-2">
                        <CheckCircle2 className="text-green-500 mr-2" />
                        <p className="text-sm text-gray-500">Selected {selectedSeats.length} of {maxSelectableSeats} Seats</p>
                    </div>
                </div>

                <div className="flex items-center my-6 mx-4">
                    <div className="flex justify-between flex-1">
                        <div className="flex items-center gap-1">
                            <img src={availableSeat} alt="Available Seat" />
                            <span className="text-sm">Available</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <img src={withCondtionSeat} alt="With Condition seats" />
                            <span className="text-sm">With Condtion</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <img src={extraLegroomSeat} alt="Extra Leg Room" />
                            <span className="text-sm">Extra Leg Room</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <img src={selectedSeat} alt="Selected Seat" />
                            <span className="text-sm">Selected Seat</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <img src={bookedSeat} alt="Booked Seat" />
                            <span className="text-sm">Booked Seat</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Seats grid  1*/}
            <div className="flex justify-center mb-8">
                <div className="w-full">
                    {/* Column headers */}
                    <div className="grid grid-cols-11 gap-2 mb-2">
                        <div className="text-center">A</div>
                        <div className="text-center">B</div>
                        <div className="text-center">C</div>
                        <div className="text-center col-span-1"></div>
                        <div className="text-center">D</div>
                        <div className="text-center">E</div>
                        <div className="text-center">F</div>
                        <div className="text-center col-span-1"></div>
                        <div className="text-center">H</div>
                        <div className="text-center">J</div>
                        <div className="text-center">K</div>
                    </div>

                    {/* Seats grid */}
                    {seatsByRow.map(([row, rowSeats]) => (
                        <div key={row} className="grid grid-cols-11 mb-2  ml-[10px]">
                            {/* Left group (ABC) */}
                            {['A', 'B', 'C'].map((col) => (
                                <div key={col} className="col-span-1">
                                    <Seat
                                        seat={getSeat(rowSeats, col)}
                                        onClick={handleSeatClick}
                                        disabled={
                                            !selectedSeats.includes(getSeat(rowSeats, col)?.id) &&
                                            selectedSeats.length >= maxSelectableSeats
                                        }
                                    />
                                </div>
                            ))}

                            {/* Row number between ABC and DEF */}
                            <div className="col-span-1 flex items-center justify-center">
                                {row}
                            </div>

                            {/* Middle group (DEF) */}
                            {['D', 'E', 'F'].map((col) => (
                                <div key={col} className="col-span-1 ml-[2px]">
                                    <Seat
                                        seat={getSeat(rowSeats, col)}
                                        onClick={handleSeatClick}
                                        disabled={
                                            !selectedSeats.includes(getSeat(rowSeats, col)?.id) &&
                                            selectedSeats.length >= maxSelectableSeats
                                        }
                                    />
                                </div>
                            ))}

                            {/* Row number between DEF and HJK */}
                            <div className="col-span-1 flex items-center justify-center">
                                {row}
                            </div>

                            {/* Right group (HJK) */}
                            {['H', 'J', 'K'].map((col) => (
                                <div key={col} className="col-span-1 ml-[10px]">
                                    <Seat
                                        seat={getSeat(rowSeats, col)}
                                        onClick={handleSeatClick}
                                        disabled={
                                            !selectedSeats.includes(getSeat(rowSeats, col)?.id) &&
                                            selectedSeats.length >= maxSelectableSeats
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-12 text-gray-500">
                <div className="col-span-3 text-center">
                    <Button className="bg-gray-400 px-[10px] py-[8px] w-full ml-1"> Exit </Button>
                </div>
                <div className="col-span-6"></div>
                <div className="col-span-3 text-center">
                    <Button className="bg-gray-400 px-[10px] py-[8px] w-full mr-1"> Exit </Button>
                </div>
            </div>

            {/* Seats grid  2*/}
            <div className="flex justify-center my-8">
                <div className="w-full">
                    {/* Column headers */}
                    <div className="grid grid-cols-11 gap-2 mb-2">
                        <div className="text-center">A</div>
                        <div className="text-center">B</div>
                        <div className="text-center">C</div>
                        <div className="text-center col-span-1"></div>
                        <div className="text-center">D</div>
                        <div className="text-center">E</div>
                        <div className="text-center">F</div>
                        <div className="text-center col-span-1"></div>
                        <div className="text-center">H</div>
                        <div className="text-center">J</div>
                        <div className="text-center">K</div>
                    </div>

                    {/* Seats grid */}
                    {seatsByRow.map(([row, rowSeats]) => (
                        <div key={row} className="grid grid-cols-11 mb-2  ml-[10px]">
                            {/* Left group (ABC) */}
                            {['A', 'B', 'C'].map((col) => (
                                <div key={col} className="col-span-1">
                                    <Seat
                                        seat={getSeat(rowSeats, col)}
                                        onClick={handleSeatClick}
                                        disabled={
                                            !selectedSeats.includes(getSeat(rowSeats, col)?.id) &&
                                            selectedSeats.length >= maxSelectableSeats
                                        }
                                    />
                                </div>
                            ))}

                            {/* Row number between ABC and DEF */}
                            <div className="col-span-1 flex items-center justify-center">
                                {row}
                            </div>

                            {/* Middle group (DEF) */}
                            {['D', 'E', 'F'].map((col) => (
                                <div key={col} className="col-span-1 ml-[2px]">
                                    <Seat
                                        seat={getSeat(rowSeats, col)}
                                        onClick={handleSeatClick}
                                        disabled={
                                            !selectedSeats.includes(getSeat(rowSeats, col)?.id) &&
                                            selectedSeats.length >= maxSelectableSeats
                                        }
                                    />
                                </div>
                            ))}

                            {/* Row number between DEF and HJK */}
                            <div className="col-span-1 flex items-center justify-center">
                                {row}
                            </div>

                            {/* Right group (HJK) */}
                            {['H', 'J', 'K'].map((col) => (
                                <div key={col} className="col-span-1 ml-[10px]">
                                    <Seat
                                        seat={getSeat(rowSeats, col)}
                                        onClick={handleSeatClick}
                                        disabled={
                                            !selectedSeats.includes(getSeat(rowSeats, col)?.id) &&
                                            selectedSeats.length >= maxSelectableSeats
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
}