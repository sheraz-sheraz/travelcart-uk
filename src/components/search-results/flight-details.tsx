import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "../ui/card";

export default function FlightDetails({ flightDetailsVisible, index }: { flightDetailsVisible: boolean[]; index: number }) {
    return (
        flightDetailsVisible[index - 1] && (
            <Card className="mt-6">

                <CardContent className="p-0 py-6 px-4">
                    {/* Flight Details */}
                    <p className="text-lg font-semibold mb-4">Flight Details</p>
                    <div className="space-y-4">
                        {/* Outbound Flight */}
                        <div className="bg-[#f8f8f8] p-5 rounded-lg">
                            <div className="font-medium mb-4">Outbound · <span className="text-gray-500">Tue, 21 Jan 2025</span></div>
                            <div className="relative pl-10">
                                {/* Vertical Timeline Line */}
                                <div className="absolute left-2 bg-[#404040] top-0 h-full w-0.5 before:absolute before:-top-2 before:w-3 before:-ml-1 after:-ml-1 before:h-3 before:bg-[#404040] before:rounded-full after:absolute after:-bottom-2 after:w-3 after:h-3 after:bg-[#404040] after:rounded-full"></div>
                                {/* Departure */}
                                <div className="flex items-start gap-4">
                                    <div className="min-w-[60px] text-right font-semibold">20:50</div>
                                    <div className="flex-1">
                                        <div className="font-medium">LHE Lahore (Terminal 4)</div>
                                        <div className="text-sm text-gray-500 mt-1">AirBlue B737</div>
                                    </div>
                                </div>
                                {/* Arrival */}
                                <div className="flex items-start gap-4 mt-4">
                                    <div className="min-w-[60px] text-right font-semibold">06:35</div>
                                    <div className="flex-1">
                                        <div className="font-medium">FRA Frankfurt am Main (Terminal 2)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Return Flight */}
                        <div className="bg-[#f8f8f8] p-5 rounded-lg">
                            <div className="font-medium mb-4">Return ·<span className="text-gray-500"> Wed, 29 Jan 2025</span></div>
                            <div className="">
                                <div className="relative pl-10">
                                    {/* Vertical Timeline Line */}
                                    <div className="absolute left-2 bg-[#404040] h-full top-0 w-0.5 before:absolute before:-top-2 before:w-3 before:-ml-1 after:-ml-1 before:h-3 before:bg-[#404040] before:rounded-full after:absolute after:-bottom-2 after:w-3 after:h-3 after:bg-[#404040] after:rounded-full"></div>
                                    {/* Departure */}
                                    <div className="flex items-start gap-4">
                                        <div className="min-w-[60px] text-right font-semibold">20:50</div>
                                        <div className="flex-1">
                                            <div className="font-medium">FRA Frankfurt am Main (Terminal 1)</div>
                                            <div className="text-sm text-gray-500 mt-1">AirBlue B737</div>
                                        </div>
                                    </div>
                                    {/* Arrival */}
                                    <div className="flex items-start gap-4 mt-4">
                                        <div className="min-w-[60px] text-right font-semibold">06:35</div>
                                        <div className="flex-1">
                                            <div className="font-medium">DXE Dubai (Terminal 3)</div>
                                        </div>
                                    </div>
                                </div>
                                {/* Transfer Info */}
                                <div className="relative pl-10 my-10">
                                    {/* Vertical Timeline Line */}
                                    <div className="absolute left-2 h-full top-0 border border-l-2 border-dashed"></div>
                                    <div className="flex items-center gap-4">
                                        <div className="min-w-[60px] text-right text-red-500 font-semibold">30min</div>
                                        <div className="flex-1">
                                            <Badge variant="destructive">Transfer and flight change | Dubai Airport</Badge>
                                        </div>
                                    </div>
                                </div>
                                {/* Next Flight Departure */}
                                <div className="relative pl-10 mt-4">
                                    {/* Vertical Timeline Line */}
                                    <div className="absolute left-2 bg-[#404040] h-full top-0 w-0.5 before:absolute before:-top-2 before:w-3 before:-ml-1 after:-ml-1 before:h-3 before:bg-[#404040] before:rounded-full after:absolute after:-bottom-2 after:w-3 after:h-3 after:bg-[#404040] after:rounded-full"></div>
                                    <div className="flex items-start gap-4 mt-4">
                                        <div className="min-w-[60px] text-right font-semibold">20:50</div>
                                        <div className="flex-1">
                                            <div className="font-medium">DXE Dubai (Terminal 3)</div>
                                            <div className="text-sm text-gray-500 mt-1">AirBlue B737</div>
                                        </div>
                                    </div>
                                    {/* Final Arrival */}
                                    <div className="flex items-start gap-4 mt-4">
                                        <div className="min-w-[60px] text-right font-semibold">06:35</div>
                                        <div className="flex-1">
                                            <div className="font-medium">LHE Lahore (Terminal 4)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        )
    );
}
