import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Mail, Phone, Plus, Briefcase, Luggage, User, CheckCircle, Circle, Info } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import handBag from "@/assets/icons/bags/handbag.svg"
import bagPack from "@/assets/icons/bags/bagpack.svg"
import dragBag from "@/assets/icons/bags/dragbag.svg"
import SeatSelection from "./seat-selection";
import { Seat } from "./types";
import { TooltipProvider } from "../ui/tooltip";
import { SeatMap } from "./seat-map";

const FlightBookingInformation = () => {
    const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

    const handleSeatSelect = (seat: Seat) => {
        setSelectedSeats(prev =>
            prev.includes(seat.id)
                ? prev.filter(id => id !== seat.id)
                : [...prev, seat.id]
        );
    };
    const generateSeats = (): Seat[] => {
        const seats: Seat[] = [];
        const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'H', 'J', 'K'];

        for (let row = 1; row <= 13; row++) {
            for (const col of columns) {
                const isExtraLegRoom = row === 1;
                const isConditions = row === 2;
                const isBooked = Math.random() > 0.8;

                seats.push({
                    id: `${col}${row}`,
                    row,
                    column: col,
                    type: isBooked ? 'booked' :
                        isExtraLegRoom ? 'extra-leg-room' :
                            isConditions ? 'conditions' :
                                'available',
                    price: {
                        amount: isExtraLegRoom ? 69 : 34,
                        currency: '£'
                    }
                });
            }
        }

        return seats;
    };

    const [title, setTitle] = useState("Mr");
    return (
        <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
                {/* Stepper Navigation */}
                <div className="max-w-7xl mx-auto p-6 pb-0 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-3">
                        {/* Stepper Navigation - Pixel Perfect */}
                        <div className="flex items-center justify-center space-x-4 mb-6 relative">
                            {/* Flight Selection - Completed */}
                            <div className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full gap-2">
                                <CheckCircle size={16} />
                                <span className="font-medium">Flight Selection</span>
                            </div>
                            <div className="w-16 h-[2px] bg-blue-600"></div>
                            {/* Traveler Information - Active */}
                            <div className="flex items-center bg-gray-200 px-4 py-2 rounded-full gap-2">
                                <div className="bg-blue-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold">2</div>
                                <span className="font-medium text-black">Traveler Information</span>
                            </div>
                            <div className="w-16 h-[2px] bg-gray-400"></div>
                            {/* Payment - Inactive */}
                            <div className="flex items-center bg-white border px-4 py-2 rounded-full gap-2">
                                <div className="bg-black text-white w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold">3</div>
                                <span className="font-medium text-black">Payment</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Traveler Information */}
                <h2 className="text-lg font-semibold mb-1">Traveler Information</h2>
                <Card className="p-6 rounded-2xl shadow-sm md:col-span-3">
                    <div className="mb-4">
                        <h3 className="text-md font-semibold">Primary Contact <span className="text-gray-500">&#9432;</span></h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium">Email<span className="text-red-500">*</span></label>
                            <Input type="email" placeholder="Enter your email" className="rounded-2xl border-gray-300" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Mobile Number<span className="text-red-500">*</span></label>
                            <PhoneInput
                                country={"gb"}
                                value={"123123"}
                                containerClass="!rounded-2xl h-[!40px] !border-gray-300 w-full"
                                inputClass="!rounded-2xl !h-[40px] !border-gray-300 w-full"
                                inputStyle={{ height: "40px", width: "100%" }}
                                buttonStyle={{ borderTopLeftRadius: "12px", borderBottomLeftRadius: "12px", borderTopRightRadius: "0", borderBottomRightRadius: "0" }}
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 mt-4">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            I do not wish to receive any newsletters about cheap air fares or other offers
                        </label>
                    </div>
                </Card>

                {/* Passenger Details */}
                <Card className="p-6 rounded-2xl shadow-sm md:col-span-3">
                    <h2 className="text-lg font-semibold mb-4">Passenger Details</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium">First Name<span className="text-red-500">*</span></label>
                            <Input className="rounded-2xl" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Last Name<span className="text-red-500">*</span></label>
                            <Input className="rounded-2xl" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <label className="block text-sm font-medium">Nationality<span className="text-red-500">*</span></label>
                            <Input className="rounded-2xl" placeholder="United Kingdom" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Date of Birth<span className="text-red-500">*</span></label>
                            <div className="grid grid-cols-3 gap-2">
                                <Input placeholder="YYYY" className="rounded-2xl" />
                                <Input placeholder="MM" className="rounded-2xl" />
                                <Input placeholder="DD" className="rounded-2xl" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <label className="block text-sm font-medium">Passport or ID Number<span className="text-red-500">*</span></label>
                            <Input className="rounded-2xl" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Passport Expiration Date<span className="text-red-500">*</span></label>
                            <div className="grid grid-cols-3 gap-2">
                                <Input placeholder="YYYY" className="rounded-2xl" />
                                <Input placeholder="MM" className="rounded-2xl" />
                                <Input placeholder="DD" className="rounded-2xl" />
                            </div>
                        </div>
                    </div>

                    {/* Baggage Options */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                        <Card className="p-4 rounded-2xl flex flex-col items-center justify-between">
                            <span className="text-xs text-white bg-black py-1 px-2 rounded-full">Included</span>
                            <img src={`${handBag}`} alt="hand bag" />
                            <p className="font-medium">Personal Item</p>
                        </Card>
                        <Card className="text-center p-4 rounded-2xl flex flex-col items-center justify-between">
                            <span className="text-xs text-white bg-black py-1 px-2 rounded-full">Included</span>
                            <img src={`${bagPack}`} alt="bagpack image" />
                            <p className="font-medium">Hand Baggage</p>
                        </Card>
                        <Card className="text-center p-4 border-dashed border-2 rounded-2xl flex flex-col items-center justify-between">
                            <div className="flex items-center gap-4 relative">
                                <span className="text-xs text-red-500 py-1 px-2 rounded-full border-red-500 border">Not Included</span>
                                <Button className="flex items-center rounded-full max-h-[29px] absolute top-0 -right-16 p-0 py-1 px-2 bg-black text-white" variant="default">
                                    <Plus size={10} /> £34
                                </Button>
                            </div>
                            <img src={`${dragBag}`} alt="dragging bag image" />
                            <p className="font-medium">Checked Baggage</p>

                        </Card>
                    </div>

                    {/* Add Another Passenger Button */}
                </Card>
                <div className="flex mt-6">
                    <Button variant="ghost" className="flex flex-1 items-center gap-2 border rounded-2xl px-6 py-2">
                        <Plus size={16} /> Add Another Passenger
                    </Button>
                </div>

                {/* Seat Selection */}
                <p className="text-lg font-semibold -mb-10">Seat Selection</p>
                <TooltipProvider>
                    {/* <div className="p-8"> */}
                    <SeatMap
                        seats={generateSeats()}
                        onSeatSelect={handleSeatSelect}
                        selectedSeats={selectedSeats}
                        maxSelectableSeats={2}
                        flightInfo={{
                            airline: "AirBlue",
                            flightNumber: "SV737",
                            from: "LHE Lahore (T4)",
                            to: "FRA Frankfurt am Main (T2)"
                        }}
                    />
                    {/* </div> */}
                </TooltipProvider>

                {/* cancel and proceed buttons */}
                <div className="flex mt-6 justify-between gap-64">
                    <Button variant="ghost" className="flex flex-1 items-center gap-2 border rounded-xl px-6 py-2">
                        Cancel
                    </Button>
                    <Button className="flex flex-1 items-center bg-black text-white gap-2 border rounded-xl px-6 py-2">
                        Continue to Payment
                    </Button>
                </div>
            </div>

            {/* Right Sidebar - Flight and Payment Details */}
            <div className="space-y-6 mt-8">
                <h2 className="text-lg font-semibold mb-4">Flight Details</h2>
                <Card className="p-6 rounded-2xl shadow-sm">

                    {/* Departure Section */}
                    <div className="mb-6">
                        <h3 className="font-semibold">Departure</h3>
                        <p className="text-gray-600 text-sm">Tue, 21 Jan 2025</p>
                        <p className="text-blue-700 font-bold uppercase text-sm mt-2">air<span className="text-black">blue</span> AirBlue SV737</p>
                        <p className="text-lg font-bold">20:50 – 06:35 <span className="text-sm text-gray-500 bg-black py-1 px-2 rounded full">(13h 45m)</span></p>
                        <p className="text-sm text-gray-600">LHE Lahore (T4) – FRA Frankfurt am Main (T2)</p>
                    </div>

                    {/* Return Section */}
                    <div>
                        <h3 className="font-semibold">Return</h3>
                        <p className="text-gray-600 text-sm">Wed, 29 Jan 2025</p>
                        <p className="text-blue-700 font-bold uppercase text-sm mt-2">air<span className="text-black">blue</span> AirBlue SV737</p>
                        <p className="text-lg font-bold">20:50 – 06:35 <span className="text-sm text-gray-500">(11h 45m)</span></p>
                        <p className="text-sm text-gray-600">LHE Lahore (T4) – DXE Dubai (T2)</p>

                        {/* Transfer Section */}
                        <div className="bg-gray-200 text-red-500 text-xs font-semibold px-2 py-1 rounded-full inline-block mt-2">
                            30min Transfer and flight change
                        </div>

                        <p className="text-blue-700 font-bold uppercase text-sm mt-2">air<span className="text-black">blue</span> AirBlue SV737</p>
                        <p className="text-lg font-bold">07:05 – 09:05 <span className="text-sm text-gray-500">(1h 45m)</span></p>
                        <p className="text-sm text-gray-600">LHE Lahore (T4) – DXE Dubai (T2)</p>
                    </div>
                </Card>
                <div>
                    <h2 className="text-lg font-semibold mb-2">Payment Details</h2>
                    <Card className="p-6 rounded-2xl shadow-sm bg-black text-white">
                        <p>1x Passenger (Adult) - £340</p>
                        <p>1x Passenger (Teenager) - £300</p>
                        <p>1x Checked Baggage - £34</p>
                        <p>2x Hand Baggage - Included</p>
                        <div className="w-full h-[1px] bg-zinc-500 mt-2" />
                        <h3 className="text-lg font-semibold mt-1">Amount to Pay: £340</h3>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default FlightBookingInformation;
