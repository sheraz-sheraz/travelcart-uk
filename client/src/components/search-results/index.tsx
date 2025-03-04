import React, { useState } from 'react';
import { Card, CardContent, } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import oneStopFlightSvg from '@/assets/icons/oneStopFlight.svg';
import directFlightSvg from '@/assets/icons/directFlight.svg';
import TwoStopFlightIcon from '@/assets/icons/twoStopFlight.svg';
import EmirateSvg from '@/assets/icons/airlines/EmirateSvg.svg';
import EtihadSvg from '@/assets/icons/airlines/EtihadSvg.svg';
import QatarSvg from '@/assets/icons/airlines/QatarAirwaysSvg.svg';
import TurkishSvg from '@/assets/icons/airlines/TurkishAirlinesSvg.svg';
import ThaiSvg from '@/assets/icons/airlines/ThaiSvg.svg';
import SaudiaSvg from '@/assets/icons/airlines/SaudiaSvg.svg';
import CompoundSvg from '@/assets/icons/airlines/CompoundSvg.svg';
import Srilankan from '@/assets/icons/airlines/SrilankanSvg.svg';
import { Slider } from '../ui/slider';
import FlightDetails from './flight-details';

function SearchResults() {
    const [_, setSelectedFlight] = useState<'cheapest' | 'best' | 'quickest'>('best');
    const [flightDetailsVisible, setFlightDetailsVisible] = useState(
        Array(4).fill(false)
    );

    const [searchParams, setSearchParams] = useState({
        from: 'LAHORE (LHE)',
        to: 'Frankfurt am Main (FRA)',
        departDate: '21/01/2025',
        returnDate: '28/02/2025',
        passengers: '1 Adult, Economy'
    });

    const handleSearchParamChange = (key: keyof typeof searchParams) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchParams(prev => ({
            ...prev,
            [key]: e.target.value
        }));
    };

    const toggleFlightDetails = (index: number) => {
        setFlightDetailsVisible((prev) => {
            const newVisibility = [...prev];
            newVisibility[index] = !newVisibility[index];
            return newVisibility;
        });
    };

    return (
        <div className="">

            <div className="bg-black pb-4">
                <div className="max-w-[1200px] mx-auto grid grid-cols-5 gap-2 px-4 py-4">
                    <Input
                        className="bg-[#1e90ff] text-white placeholder:text-white border-[#1e90ff] focus:border-[#1e90ff] focus-visible:ring-0"
                        value={searchParams.from}
                        onChange={handleSearchParamChange('from')}
                    />
                    <Input
                        className="bg-[#333] text-white border-[#333] focus-visible:ring-0"
                        value={searchParams.to}
                        onChange={handleSearchParamChange('to')}
                    />
                    <Input
                        className="bg-[#333] text-white border-[#333] focus-visible:ring-0"
                        value={searchParams.departDate}
                        onChange={handleSearchParamChange('departDate')}
                    />
                    <Input
                        className="bg-[#333] text-white border-[#333] focus-visible:ring-0"
                        value={searchParams.returnDate}
                        onChange={handleSearchParamChange('returnDate')}
                    />
                    <Input
                        className="bg-[#333] text-white border-[#333] focus-visible:ring-0"
                        value={searchParams.passengers}
                        onChange={handleSearchParamChange('passengers')}
                    />
                </div>
            </div>

            <div className="max-w-[1400px] py-8 grid grid-cols-[350px_1fr_240px] gap-4 px-4 mx-auto rounded-xl">

                <Card className="p-6 shadow-sm bg-white rounded-2xl">
                    <div className="text-lg font-medium mb-6">120 Results</div>
                    <Separator className='my-6' />
                    <div className="font-bold mb-4">Stops</div>
                    <div className="flex gap-4 mb-8 justify-start">
                        <Button variant="outline" className="flex-1 basis-[100px] rounded-xl py-3 px-2 h-[100px] items-center flex-col gap-1 bg-black text-white hover:bg-gray-800 hover:text-white transition duration-200">
                            <span className="text-sm">Direct</span>
                            <img src={directFlightSvg} alt="" className="transition-transform transform hover:scale-105" />
                            <span className="text-sm text-white">£500</span>
                        </Button>

                        <Button variant="outline" className="flex-1 basis-[100px] rounded-xl py-3 px-2 h-[100px] items-center flex-col gap-1 bg-[#F8F8F8] text-black hover:bg-gray-200 transition duration-200">
                            <span className="text-sm">1 Stop</span>
                            <img src={oneStopFlightSvg} alt="" className="transition-transform transform hover:scale-105" />
                            <span className="text-sm text-black">£500</span>
                        </Button>

                        <Button variant="outline" className="flex-1 basis-[100px] rounded-xl py-3 px-2 h-[100px] items-center flex-col gap-1 bg-[#F8F8F8] text-black hover:bg-gray-200 transition duration-200">
                            <span className="text-sm">2 Stops+</span>
                            <img src={TwoStopFlightIcon} alt="" className="transition-transform transform hover:scale-105" />
                            <span className="text-sm text-black">£500</span>
                        </Button>

                    </div>
                    <Separator className='my-6' />
                    <div className="space-y-6 p-4">
                        <div>
                            <div className="font-bold text-base mb-4">Departure Times</div>
                            <div className="space-y-4">
                                <div>
                                    <div className="text-sm text-gray-500 mb-2">Lahore to Dubai</div>
                                    <Slider defaultValue={[0, 24]} min={0} max={24} step={1} className="w-full" />
                                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                                        <span>00:00</span>
                                        <span>23:59</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 mb-2">Dubai to Lahore</div>
                                    <Slider defaultValue={[0, 24]} min={0} max={24} step={1} className="w-full" />
                                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                                        <span>00:00</span>
                                        <span>23:59</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Separator className='my-6' />
                    <div>
                        <div className="font-bold text-base mb-2">Flight Duration</div>
                        <div className="text-sm text-gray-500">3h 30m - 4h 05m</div>
                        <Slider defaultValue={[3.5]} min={3.5} max={4.1} step={0.05} className='mt-2' />
                    </div>
                    <Separator className='my-6' />
                    <div className="mt-8">
                        <div className="font-medium mb-4">Airlines</div>
                        <div className="grid grid-cols-3 gap-2">
                            {[
                                EmirateSvg,
                                EtihadSvg,
                                QatarSvg,
                                TurkishSvg,
                                ThaiSvg,
                                SaudiaSvg,
                                CompoundSvg,
                                Srilankan
                            ].map((airline, index) => (
                                <Button
                                    key={airline}
                                    variant={index === 0 ? "default" : "outline"}
                                    className={`h-[92px] flex flex-col justify-center items-center rounded-xl ${index === 0 ? 'bg-gray-800 text-white' : 'hover:bg-gray-50'}`}
                                >
                                    <img src={airline} alt="" className='h-14' />
                                    <span className="text-sm ml-2">£500</span>
                                </Button>
                            ))}
                        </div>
                    </div>
                </Card>


                <div className="rounded-2xl">
                    <div className="grid grid-cols-3 gap-1 mb-4">
                        {[
                            { label: 'Cheapest', price: '£279', duration: '3h27m' },
                            { label: 'Best', price: '£279', duration: '3h27m', active: true },
                            { label: 'Quickest', price: '£279', duration: '3h20m' },
                        ].map((tab) => (
                            <Button
                                key={tab.label}
                                variant={tab.active ? 'default' : 'outline'}
                                className={`h-[80px] rounded-xl border-gray-300 bg-[#f8f8f8] block ${tab.active ? 'bg-[#0647B4] text-white' : 'hover:bg-gray-50'}`}
                                onClick={() => setSelectedFlight(tab.label.toLowerCase() as any)}
                            >
                                <div className="flex justify-between">
                                    <span className="text-sm font-normal">{tab.label}</span>
                                    <span className="text-sm text-gray-400">{tab.duration}</span>
                                </div>
                                <span className="text-lg font-semibold mt-2 block text-left">{tab.price}</span>
                            </Button>
                        ))}
                    </div>

                    {[1, 2, 3, 4].map((index) => (
                        <React.Fragment key={index}>
                            <Card className="mb-4 bg-white pt-4 rounded-2xl">
                                <CardContent className='p-6 pb-0 relative'>
                                    <span className='w-[30px] h-[30px] bg-[#f5f5f5] rounded-full absolute top-[45%] -left-[15px] '></span>
                                    <span className='w-[30px] h-[30px] bg-[#f5f5f5] rounded-full absolute top-[45%] -right-[15px]'></span>
                                    <div className="flex  justify-between relative">
                                        {/* Left Section (4-cols Grid) */}
                                        <div className="grid grid-cols-4 items-center gap-6 flex-grow p-2">
                                            <div className="text-left">
                                                <div className="text-sm text-gray-500"><span className='text-primary text-lg'>Air</span>blue</div>
                                            </div>
                                            <div className="text-left">
                                                <div className="text-sm text-center text-gray-500">LHE</div>
                                                <div className="text-xl text-center font-semibold">20:50</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-sm text-gray-500">13h 45m</div>
                                                <div className="text-sm">Direct</div>
                                            </div>
                                            <div className="text-left">
                                                <div className="text-sm text-gray-500 text-center">FRA</div>
                                                <div className="text-xl font-semibold text-center">06:35</div>
                                            </div>
                                            <div className="text-left">
                                                <div className="text-sm text-gray-500"><span className='text-primary text-lg'>Air</span>blue</div>
                                            </div>
                                            <div className="text-left">
                                                <div className="text-sm text-center text-gray-500">LHE</div>
                                                <div className="text-xl text-center font-semibold">20:50</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-sm text-gray-500">13h 45m</div>
                                                <div className="text-sm">Direct</div>
                                            </div>
                                            <div className="text-left">
                                                <div className="text-sm text-gray-500 text-center">FRA</div>
                                                <div className="text-xl font-semibold text-center">06:35</div>
                                            </div>
                                        </div>
                                        {/* Right Section (Price & Details) */}
                                        <div className="border-l-4 border-dotted pl-5 text-left ">
                                            <div className='-mt-6'>
                                                <div className="text-2xl font-bold ">£340</div>
                                                <div className="text-sm text-gray-500">Economy</div>
                                            </div>
                                            {/* Included Items */}
                                            <p className='mt-6 mb-1 text-sm'>Included</p>
                                            <div className=" space-y-1 flex flex-col items-start">
                                                <span className="bg-gray-200 text-left rounded-md p-[3px] text-sm">
                                                    Cabin Bag
                                                </span>
                                                <span className="bg-gray-200 text-left rounded-md p-[3px] text-sm">
                                                    Extra baggage
                                                </span>
                                            </div>
                                            {/* Select Button */}
                                            <div className='flex flex-col -mr-2'>
                                                <button className="mt-8 px-4 py-2 block bg-black text-white rounded-md hover:bg-gray-800">
                                                    Select
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid content-center -my-5 mt-2'>
                                        <Button
                                            variant="link"
                                            className="text-gray-500 hover:no-underline text-center p-0"
                                            onClick={() => toggleFlightDetails(index - 1)}
                                        >
                                            {flightDetailsVisible[index - 1] ? 'Hide Details' : 'Show Details'}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                            <div className=''>
                                <FlightDetails index={index} flightDetailsVisible={flightDetailsVisible} />
                            </div>
                        </React.Fragment>
                    ))}

                    <Button variant="outline" className="w-full hover:bg-gray-50">View More Results</Button>
                </div>


                <Card className="p-4 bg-white rounded-2xl h-[200px]">
                    <div className="font-medium mb-2">Call outs</div>
                    <div className="text-sm text-gray-500">TBD</div>
                </Card>

            </div>
        </div>
    );
}

export default SearchResults;
