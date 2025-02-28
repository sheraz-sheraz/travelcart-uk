import { cn } from "@/lib/utils";
import { Seat as SeatType } from "./types";
import { Tooltip } from "@/components/ui/tooltip";
import { TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import selectedSeat from "@/assets/icons/seats/selected-seat.svg";
import availableSeat from "@/assets/icons/seats/available-seat.svg";
import bookedSeat from "@/assets/icons/seats/booked-seat.svg";
import extraLegroomSeat from "@/assets/icons/seats/extra-legroom-seat.svg";
import withCondtionSeat from "@/assets/icons/seats/with-condition-seat.svg";

interface SeatProps {
    seat: SeatType;
    onClick?: (seat: SeatType) => void;
    disabled?: boolean;
}

export function Seat({ seat, onClick, disabled }: SeatProps) {
    const seatStyles = {
        available: <img src={availableSeat} alt="" />,
        conditions: <img src={withCondtionSeat} alt="" />,
        "extra-leg-room": <img src={extraLegroomSeat} alt="" />,
        selected: <img src={selectedSeat} alt="" />,
        booked: <img src={bookedSeat} alt="" />,
    };

    const price = `${seat.price.currency}${seat.price.amount}`;

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <button
                    onClick={() => !disabled && onClick?.(seat)}
                    disabled={disabled || seat.type === "booked"}
                    className={cn(
                        "w-10 h-10 rounded border-2 transition-colors flex items-center justify-center relative",
                    )}
                >
                    {seatStyles[seat.type]}
                    {seat.type === "extra-leg-room" && (
                        <svg
                            className="w-4 h-4 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                        </svg>
                    )}
                    {seat.type === "conditions" && (
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full" />
                    )}
                </button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Seat {seat.column}{seat.row}</p>
                <p>{price}</p>
            </TooltipContent>
        </Tooltip>
    );
}