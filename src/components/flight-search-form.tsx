import { Plane, ArrowLeftRight, Search } from "lucide-react";
import { useState } from "react";
import { searchFlights } from "@/utils/api"; // API function
import { useFlightStore } from "@/store/useFlightStore"; // Zustand store
import { useNavigate } from "react-router-dom";

export function FlightSearchForm() {
  const navigate = useNavigate();
  const { setFlights } = useFlightStore(); // Store flight results in Zustand

  // Form state (ensuring UI remains unchanged)
  const [tripType, setTripType] = useState<"return" | "oneWay" | "direct">("return");
  const [fromValue, setFromValue] = useState("SYD"); // Default: Sydney
  const [toValue, setToValue] = useState("BKK");
  const [departureDate, setDepartureDate] = useState("2024-01-14");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState("1 Adult, Economy");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Swap "From" and "To" locations
  const handleSwap = () => {
    const temp = fromValue;
    setFromValue(toValue);
    setToValue(temp);
  };

  // Handle flight search
  const handleSearch = async () => {
    setLoading(true);
    setError("");

    try {
      const searchParams = {
        originLocationCode: fromValue.substring(0, 3).toUpperCase(), // Extract IATA code
        destinationLocationCode: toValue.substring(0, 3).toUpperCase(),
        departureDate,
        ...(returnDate && { returnDate: returnDate }),
        adults: parseInt(passengers.charAt(0)), // Extract number of adults
        travelClass: passengers.includes("Economy") ? "ECONOMY" : "BUSINESS",
        nonStop: tripType === "direct",
        max: 10, // Get top 10 results
      };

      const results = await searchFlights(searchParams);
      setFlights(results);
      navigate("/results"); // Redirect to flight results page
    } catch (err) {
      setError("Failed to fetch flights. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="w-full relative">
      {/* Flight Type Buttons */}
      <div className="flex gap-4 mb-2">
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${tripType === "oneWay" ? "text-blue-500" : "text-white"}`}
          onClick={() => setTripType("oneWay")}
        >
          <input type="radio" checked={tripType === "oneWay"} onChange={() => { }} className="w-4 h-4 accent-blue-500" />
          <span>One Way</span>
        </button>
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${tripType === "return" ? "text-blue-500" : "text-white"}`}
          onClick={() => setTripType("return")}
        >
          <input type="radio" checked={tripType === "return"} onChange={() => { }} className="w-4 h-4 accent-blue-500" />
          <span>Return</span>
        </button>
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${tripType === "direct" ? "text-blue-500" : "text-white"}`}
          onClick={() => setTripType("direct")}
        >
          <input type="radio" checked={tripType === "direct"} onChange={() => { }} className="w-4 h-4 accent-blue-500" />
          <span>Direct Flights</span>
        </button>
      </div>

      {/* Search Form (unchanged UI) */}
      <div className="flex items-center justify-center gap-[3px] relative">
        {/* From Field */}
        <div className="w-[340px] h-[80px] bg-white shadow-sm -mr-[1px] rounded-l-xl">
          <div className="px-4 pe-3 py-3 h-full">
            <label className="block text-xs text-gray-500 mb-1">From</label>
            <div className="flex items-center gap-2">
              <Plane className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={fromValue}
                onChange={(e) => setFromValue(e.target.value)}
                className="w-full py-1 focus:outline-none text-gray-800"
                placeholder="Country, City or Airport"
              />
            </div>
          </div>
        </div>

        {/* Swap Button */}
        <button onClick={handleSwap} className="relative -mx-[21px] z-10 bg-white hover:bg-gray-50 rounded-full shadow-md p-2 border-2 border-black">
          <ArrowLeftRight className="w-5 h-5 text-gray-600" />
        </button>

        {/* To Field */}
        <div className="w-[264px] h-[80px] bg-white shadow-sm">
          <div className="px-4 py-3 h-full ps-6">
            <label className="block text-xs text-gray-500 mb-1">To</label>
            <input
              type="text"
              value={toValue}
              onChange={(e) => setToValue(e.target.value)}
              className="w-full py-1 focus:outline-none text-gray-800"
              placeholder="Country, City or Airport"
            />
          </div>
        </div>

        {/* Departure Date */}
        <div className="w-[264px] h-[80px] bg-white shadow-sm">
          <div className="px-4 py-3 h-full">
            <label className="block text-xs text-gray-500 mb-1">Departure</label>
            <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} className="w-full py-1 focus:outline-none text-gray-800" />
          </div>
        </div>

        {/* Return Date */}
        <div className="w-[264px] h-[80px] bg-white shadow-sm">
          <div className="px-4 py-3 h-full">
            <label className="block text-xs text-gray-500 mb-1">Return</label>
            <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} className="w-full py-1 focus:outline-none text-gray-800" disabled={tripType !== "return"} />
          </div>
        </div>

        {/* Passengers & Class */}
        <div className="w-[264px] h-[80px] bg-white shadow-sm">
          <div className="px-4 py-3 h-full">
            <label className="block text-xs text-gray-500 mb-1">Travelers and Cabin Class</label>
            <select value={passengers} onChange={(e) => setPassengers(e.target.value)} className="w-full py-1 focus:outline-none text-gray-800 bg-white">
              <option>1 Adult, Economy</option>
              <option>2 Adults, Economy</option>
              <option>1 Adult, Business</option>
              <option>2 Adults, Business</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <button className="w-[80px] h-[80px] bg-blue-600 hover:bg-blue-700 text-white rounded-l-none rounded-r-xl flex items-center justify-center transition-colors" onClick={handleSearch} disabled={loading}>
          {loading ? "..." : <Search size={60} className="w-8 h-8 text-3xl" />}
        </button>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
    </div>
  );
}
