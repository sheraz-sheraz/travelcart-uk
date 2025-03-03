import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  CalendarIcon,
  Check,
  ChevronsUpDown,
  Users,
  Repeat,
} from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import CustomInput from "./custom-input";

const cities = [
  "Amsterdam",
  "Bangkok",
  "Barcelona",
  "Berlin",
  "Dubai",
  "Hong Kong",
  "Istanbul",
  "London",
  "Los Angeles",
  "Madrid",
  "Milan",
  "Moscow",
  "Mumbai",
  "New York",
  "Paris",
  "Rome",
  "San Francisco",
  "Seoul",
  "Singapore",
  "Sydney",
  "Tokyo",
  "Toronto",
  "Vancouver",
  "Vienna",
  "Zurich",
];

const cabinClasses = ["Economy", "Premium Economy", "Business", "First"];

export default function FlightSearch() {
  const [tripType, setTripType] = React.useState("roundTrip");
  const [fromCity, setFromCity] = React.useState("");
  const [toCity, setToCity] = React.useState("");
  const [departDate, setDepartDate] = React.useState<Date>();
  const [returnDate, setReturnDate] = React.useState<Date>();
  const [travelers, setTravelers] = React.useState(1);
  const [cabinClass, setCabinClass] = React.useState("Economy");
  const [searchText, setSearchText] = React.useState("");

  const filterCities = (text: string) => {
    return cities.filter((city) =>
      city.toLowerCase().includes(text.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="rounded p-3 h-[550px] grid place-items-center"
        style={{
          background:
            "url(https://content.skyscnr.com/m/785bdfcbe683606c/Large-Flights-hero-2.jpg?crop=1800px:1375px&quality=60) center/cover",
        }}
      >
        <main className="flex-grow container mx-auto px-4 py-8">
          <Card className="w-full max-w-7xl mx-auto bg-primary shadow-lg rounded">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-center text-white">
                Find Your Flight
              </h2>

              {/* Trip Type */}
              <RadioGroup
                defaultValue="roundTrip"
                className="flex space-x-4 mb-6"
                onValueChange={setTripType}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="oneWay"
                    id="oneWay"
                    className="text-primary-foreground border-primary-foreground hover:scale-110 hover:transition-all"
                  />
                  <Label
                    htmlFor="oneWay"
                    className="text-primary-foreground border-primary-foreground"
                  >
                    One way
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="roundTrip"
                    id="roundTrip"
                    className="text-primary-foreground border-primary-foreground hover:scale-110 hover:transition-all"
                  />
                  <Label
                    htmlFor="roundTrip"
                    className="text-primary-foreground border-primary-foreground"
                  >
                    Round trip
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="multiCity"
                    id="multiCity"
                    className="text-primary-foreground border-primary-foreground hover:scale-110 hover:transition-all"
                  />
                  <Label
                    htmlFor="multiCity"
                    className="text-primary-foreground border-primary-foreground"
                  >
                    Multi-city
                  </Label>
                </div>
              </RadioGroup>

              {/* Form */}
              <div className="flex justify-between">
                {/* From City */}
                <div className="flex flex-wrap items-center gap-1">
                  <CustomInput
                    value={fromCity}
                    setValue={setFromCity}
                    label="From"
                    list={cities.map((c) => ({ value: c, label: c }))}
                  />
                  <Repeat
                    size="30px"
                    className="bg-white border-primary border-2 hover:bg-slate-200 text-black rounded-full p-1 -mx-[18px] relative z-10 hover:transition-all hover:scale-105 cursor-pointer"
                  />
                  <CustomInput
                    value={toCity}
                    setValue={setToCity}
                    label="From"
                    list={cities.map((c) => ({ value: c, label: c }))}
                  />
                  {/* Depart Date */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="secondary"
                        className={cn(
                          "w-[180px] justify-start text-left font-normal h-[60px] bg-white rounded",
                          !departDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {departDate ? (
                          format(departDate, "MMM dd, yyyy")
                        ) : (
                          <span>Depart</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={departDate}
                        onSelect={setDepartDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  {/* Return Date */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="secondary"
                        className={cn(
                          "w-[180px] justify-start text-left font-normal h-[60px] bg-white rounded",
                          (tripType !== "roundTrip" || !returnDate) &&
                            "text-muted-foreground"
                        )}
                        disabled={tripType !== "roundTrip"}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {returnDate ? (
                          format(returnDate, "MMM dd, yyyy")
                        ) : (
                          <span>Return</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={returnDate}
                        onSelect={setReturnDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  {/* Travelers and Cabin Class */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="secondary"
                        role="combobox"
                        className="w-[250px] justify-between h-[60px] bg-white rounded"
                      >
                        <div className="flex items-center">
                          <Users className="mr-2 h-4 w-4" />
                          {`${travelers} traveler${
                            travelers > 1 ? "s" : ""
                          }, ${cabinClass}`}
                        </div>
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[250px] p-0">
                      <Command>
                        <CommandGroup heading="Travelers">
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <CommandItem
                              key={num}
                              onSelect={() => setTravelers(num)}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  travelers === num
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {num} traveler{num > 1 ? "s" : ""}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                        <CommandGroup heading="Cabin Class">
                          {cabinClasses.map((cls) => (
                            <CommandItem
                              key={cls}
                              onSelect={() => setCabinClass(cls)}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  cabinClass === cls
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {cls}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Submit Button */}
                <Button
                  variant={"default"}
                  className="bg-white text-blue-600 hover:bg-blue-200 h-[60px] px-8 rounded"
                >
                  Search Flights
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
