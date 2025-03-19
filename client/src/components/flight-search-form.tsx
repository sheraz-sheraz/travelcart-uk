import { Plane, ArrowLeftRight, Search } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { searchFlights } from "@/utils/api"; // API function
import { useFlightStore } from "@/store/useFlightStore"; // Zustand store
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { sendContactEmail } from "@/services/testService";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { getAmadeusData } from "@/services/amadeus";
import axios from "axios";
import { debounce } from "lodash";
import { Autocomplete, TextField } from "@mui/material";

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

  const [cabinClass, setCabinClass] = useState("economy");
  const [showContact, setShowContact] = useState(false);
  const [options, setOptions] = useState([]);
  const [optionsTo, setOptionsTo] = useState([]);
  const [search, setSearch] = useState("");
  const [searchTo, setSearchTo] = useState("");
  const [keyword, setKeyword] = useState("");
  const [keywordTo, setKeywordTo] = useState("");

  const debounceLoadData = useCallback(debounce(setKeyword, 1000), []);
  const debounceLoadDataTo = useCallback(debounce(setKeywordTo, 1000), []);

  useEffect(() => {
    debounceLoadData(search);
  }, [search]);

  useEffect(() => {
    debounceLoadDataTo(searchTo);
  }, [searchTo]);

  useEffect(() => {
    setLoading(true);
    const { out, source } = getAmadeusData({ page: 0, keyword });

    out
      .then((res) => {
        if (!res.data.code) {
          setOptions(res.data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        axios.isCancel(err);
        setOptions([]);
        setLoading(false);
      });

    return () => {
      source.cancel();
    };
  }, [keyword]);

  useEffect(() => {
    setLoading(true);
    const { out, source } = getAmadeusData({ page: 0, keyword:keywordTo });

    out
      .then((res) => {
        if (!res.data.code) {
          setOptionsTo(res.data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        axios.isCancel(err);
        setOptionsTo([]);
        setLoading(false);
      });

    return () => {
      source.cancel();
    };
  }, [keywordTo]);

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
    console.log("CLICKED");
    if (showContact) {
      console.log("CLICKED 22");
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
      console.log("CLICKED 33");
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
  console.log("options", options);
  console.log("options22", optionsTo);
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
            <Autocomplete
              options={options}
              getOptionLabel={(option) => option.name}
              onInputChange={(event, newInputValue) => setSearch(newInputValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  {...register("from", {
                    required: "From location is required",
                  })}
                  placeholder="Country, City or Airport"
                  error={!!errors.from}
                  helperText={errors.from?.message as string}
                  className="w-full focus:outline-none text-gray-800"
                  InputProps={{
                    ...params.InputProps,
                    className:
                      "w-full h-[40px] border border-gray-300 px-3 py-1 rounded focus:ring-2 focus:ring-blue-500",
                  }}
                />
              )}
            />
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
            <Autocomplete
              options={optionsTo}
              getOptionLabel={(option) => option.name}
              onInputChange={(event, newInputValue) =>
                setSearchTo(newInputValue)
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  {...register("to", {
                    required: "Destination location is required",
                  })}
                  placeholder="Country, City or Airport"
                  error={!!errors.to}
                  helperText={errors.to?.message as string}
                  className="w-full focus:outline-none text-gray-800"
                  InputProps={{
                    ...params.InputProps,
                    className:
                      "w-full h-[40px] border border-gray-300 px-3 py-1 rounded focus:ring-2 focus:ring-blue-500",
                  }}
                />
              )}
            />
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
                {typeof errors.departureDate?.message === "string"
                  ? errors.departureDate.message
                  : ""}
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
                  {typeof errors.returnDate?.message === "string"
                    ? errors.returnDate.message
                    : ""}
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
            <RadixDropdownMenu.Root>
              <RadixDropdownMenu.Trigger asChild>
                <button
                  type="button"
                  className="w-full py-2 bg-white border rounded text-gray-800 text-left"
                >
                  {adults === 1 && children === 0 && infants === 0
                    ? `1 Adult, ${cabinClass.charAt(0).toUpperCase() + cabinClass.slice(1)}`
                    : `${adults + children + infants} Passengers, ${cabinClass.charAt(0).toUpperCase() + cabinClass.slice(1)}`}
                </button>
              </RadixDropdownMenu.Trigger>

              <RadixDropdownMenu.Content
                align="start"
                className="bg-white border shadow-md w-[220px] p-3 mt-1"
              >
                {/* Passengers Section */}
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
                  <div className="grid grid-cols-2 gap-2">
                    {["economy", "premium-economy", "business", "first"].map(
                      (classType) => (
                        <button
                          key={classType}
                          type="button"
                          className={`px-2 py-1 text-sm rounded text-center ${cabinClass === classType ? "bg-blue-500 text-white" : "bg-white text-gray-800 border"}`}
                          onClick={() => setCabinClass(classType)}
                        >
                          {classType.charAt(0).toUpperCase() +
                            classType.slice(1)}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </RadixDropdownMenu.Content>
            </RadixDropdownMenu.Root>

            {errors.passengers && (
              <p className="text-red-500 text-xs">
                {typeof errors.passengers?.message === "string"
                  ? errors.passengers.message
                  : ""}
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
   

      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
    </form>
  );
}
