import { Plane, ArrowLeftRight, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { searchFlights } from "@/utils/api"; // API function
import { useFlightStore } from "@/store/useFlightStore"; // Zustand store
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { sendContactEmail } from "@/services/testService";

export function FlightSearchForm() {
  const navigate = useNavigate();
  const { setFlights } = useFlightStore(); // Store flight results in Zustand

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [tripType, setTripType] = useState("return");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [cabinClass, setCabinClass] = useState("economy");
  const [showContact, setShowContact] = useState(false);

  const formRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (formRef.current && !formRef.current.contains(event.target)) {
  //       setShowContact(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  const watchReturnDate = watch("returnDate");

  // Swap "From" and "To" locations
  const handleSwap = () => {
    const fromValue = watch("from");
    const toValue = watch("to");

    if (fromValue && toValue) {
      watch("from", toValue);
      watch("to", fromValue);
    }
  };

  const onSubmit = async (data) => {
    console.log("CLICKED")
    if (showContact) {
      console.log("CLICKED 22")
      setLoading(true);
      setError("");
      try {
        const emailData = {
          ...data,
          tripType: tripType,
          adults: adults,
          children,
          infants,
          cabinClass,
        };
        console.log("EMAIL DATA", emailData);
        const res = await sendContactEmail(emailData);
        console.log("SEND EMAIL RESPONSE", res);
      } catch (err) {
        setError("Failed to fetch flights. Please try again.");
      }

      setLoading(false);
    } else {
      console.log("CLICKED 33")
      setShowContact(true);
    }
  };

  // const onSubmit = async (data) => {
  //   if (showContact) {
  //     setLoading(true);
  //     setError("");
  //     try {
  //       const searchParams = {
  //         originLocationCode: data.from.substring(0, 3).toUpperCase(),
  //         destinationLocationCode: data.to.substring(0, 3).toUpperCase(),
  //         departureDate: data.departureDate,
  //         ...(data.returnDate && { returnDate: data.returnDate }),
  //         adults: parseInt(data.passengers.charAt(0)),
  //         travelClass: data.passengers.includes("Economy")
  //           ? "ECONOMY"
  //           : "BUSINESS",
  //         nonStop: tripType === "direct",
  //         max: 10,
  //       };

  //       const results = await searchFlights(searchParams);
  //       setFlights(results);
  //       navigate("/results");
  //     } catch (err) {
  //       setError("Failed to fetch flights. Please try again.");
  //     }

  //     setLoading(false);
  //   } else {
  //     setShowContact(true);
  //   }
  // };
  console.log("showContact", showContact)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full relative">
      <div className="flex gap-4 mb-2">
        {["oneWay", "return", "direct"].map((type) => (
          <button
            key={type}
            className={`flex items-center gap-2 px-4 py-2 rounded-full ${tripType === type ? "text-blue-500" : "text-white"}`}
            onClick={() => setTripType(type)}
            type="button"
          >
            <input
              type="radio"
              checked={tripType === type}
              readOnly
              className="w-4 h-4 accent-blue-500"
            />
            <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center gap-[3px] relative">
        <div className="w-[340px] h-[80px] bg-white shadow-sm rounded-l-xl">
          <div className="px-4 py-3 h-full">
            <label className="block text-xs text-gray-500 mb-1">From</label>
            <input
              {...register("from", { required: "From location is required" })}
              className="w-full py-1 focus:outline-none text-gray-800"
              placeholder="Country, City or Airport"
            />
            {errors.from && (
              <p className="text-red-500 text-xs">{typeof errors.from?.message === 'string' ? errors.from.message : ''}</p>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={handleSwap}
          className="-mx-[21px] z-10 bg-white hover:bg-gray-50 rounded-full shadow-md p-2 border-2 border-black"
        >
          <ArrowLeftRight className="w-5 h-5 text-gray-600" />
        </button>

        <div className="w-[264px] h-[80px] bg-white shadow-sm">
          <div className="px-4 py-3 h-full">
            <label className="block text-xs text-gray-500 mb-1">To</label>
            <input
              {...register("to", { required: "Destination is required" })}
              className="w-full py-1 focus:outline-none text-gray-800"
              placeholder="Country, City or Airport"
            />
            {errors.to && (
              <p className="text-red-500 text-xs">{typeof errors.to?.message === 'string' ? errors.to.message : ''}</p>
            )}
          </div>
        </div>

        <div className="w-[264px] h-[80px] bg-white shadow-sm">
          <div className="px-4 py-3 h-full">
            <label className="block text-xs text-gray-500 mb-1">
              Departure
            </label>
            <input
              type="date"
              {...register("departureDate", {
                required: "Departure date is required",
              })}
              className="w-full py-1 focus:outline-none text-gray-800"
            />
            {errors.departureDate && (
              <p className="text-red-500 text-xs">
                {typeof errors.departureDate?.message === 'string' ? errors.departureDate.message : ''}
              </p>
            )}
          </div>
        </div>

        {tripType === "return" && (
          <div className="w-[264px] h-[80px] bg-white shadow-sm">
            <div className="px-4 py-3 h-full">
              <label className="block text-xs text-gray-500 mb-1">Return</label>
              <input
                type="date"
                {...register("returnDate", {
                  required:
                    tripType === "return" ? "Return date is required" : false,
                })}
                className="w-full py-1 focus:outline-none text-gray-800"
              />
              {errors.returnDate && (
                <p className="text-red-500 text-xs">
                  {typeof errors.returnDate?.message === 'string' ? errors.returnDate.message : ''}
                </p>
              )}
            </div>
          </div>
        )}

        <div className="w-[264px] h-[80px] bg-white shadow-sm">
          <div className="px-4 py-3 h-full">
            <label className="block text-xs text-gray-500 mb-1">
              Travelers and Cabin Class
            </label>
            <button
              type="button"
              className="w-full py-2 bg-white border rounded text-gray-800 text-left"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {adults === 1 && children === 0 && infants === 0
                ? `1 Adult, ${cabinClass.charAt(0).toUpperCase() + cabinClass.slice(1)}`
                : `${adults + children + infants} Passengers, ${cabinClass.charAt(0).toUpperCase() + cabinClass.slice(1)}`}
            </button>
            {showDropdown && (
              <div className="absolute bg-white border shadow-md mt-1 w-[200px] p-2">
                {[
                  {
                    label: "Adults",
                    ageGroup: "18+",
                    value: adults,
                    setValue: setAdults,
                    min: 1,
                  },
                  {
                    label: "Children",
                    ageGroup: "2-17",
                    value: children,
                    setValue: setChildren,
                    min: 0,
                  },
                  {
                    label: "Infants",
                    ageGroup: "under 2",
                    value: infants,
                    setValue: setInfants,
                    min: 0,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center py-1"
                  >
                    <span>
                      {item.label}{" "}
                      <text className="text-xs text-gray-500">
                        ({item.ageGroup})
                      </text>
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          item.label !== "Adults" || item.value > 1
                            ? item.setValue((prev) =>
                                Math.max(prev - 1, item.min)
                              )
                            : null
                        }
                        className={`px-2 py-1 bg-gray-200 rounded ${item.label === "Adults" && item.value === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={item.label === "Adults" && adults === 1}
                      >
                        -
                      </button>
                      <span>{item.value}</span>
                      <button
                        type="button"
                        onClick={() => item.setValue((prev) => prev + 1)}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
                {/* Cabin Class Selection */}
                <div className="mt-3">
                  <label className="block text-xs text-gray-500 mb-1">
                    Cabin Class
                  </label>
                  <select
                    value={cabinClass}
                    onChange={(e) => setCabinClass(e.target.value)}
                    className="w-full py-1 focus:outline-none text-gray-800 bg-white border rounded"
                  >
                    <option value="economy">Economy</option>
                    <option value="premium-economy">Premium Economy</option>
                    <option value="business">Business</option>
                    <option value="first">First</option>
                  </select>
                </div>
              </div>
            )}
            {errors.passengers && (
              <p className="text-red-500 text-xs">
                {typeof errors.passengers?.message === 'string' ? errors.passengers.message : ''}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-[80px] h-[80px] bg-blue-600 hover:bg-blue-700 text-white rounded-r-xl flex items-center justify-center transition-colors"
          disabled={loading}
        >
          {loading ? "..." : <Search className="w-8 h-8" />}
        </button>
      </div>
      {showContact && (
        <div
          ref={formRef}
          className="flex items-center justify-start gap-[3px] relative mt-2 "
        >
          <div className="w-[340px] h-[80px] bg-white shadow-sm rounded-l-xl">
            <div className="px-4 py-3 h-full">
              <label className="block text-xs text-gray-500 mb-1">Email</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Enter a valid email",
                  },
                })}
                className="w-full py-1 focus:outline-none text-gray-800"
                placeholder="Enter Email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{typeof errors.email?.message === 'string' ? errors.email.message : ''}</p>
              )}
            </div>
          </div>

          <div className="w-[264px] h-[80px] bg-white shadow-sm rounded-tr-xl rounded-br-xl">
            <div className="px-4 py-3 h-full">
              <label className="block text-xs text-gray-500 mb-1">Phone</label>
              <input
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Only numbers are allowed",
                  },
                  minLength: {
                    value: 10,
                    message: "Phone number must be at least 10 digits",
                  },
                  maxLength: {
                    value: 15,
                    message: "Phone number cannot exceed 15 digits",
                  },
                })}
                className="w-full py-1 focus:outline-none text-gray-800"
                placeholder="Enter Phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs">{typeof errors.phone?.message === 'string' ? errors.phone.message : ''}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
    </form>
  );
}
