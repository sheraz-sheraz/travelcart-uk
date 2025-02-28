import React, { useState } from "react";

const HeroSection: React.FC = () => {
  return (
    <div
      className="relative flex items-center justify-center h-[500px] bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('/assets/flight-bg.jpg')`, // Replace with a royalty-free background image
      }}
    >
      <div className="absolute inset-0 bg-shade-black bg-opacity-60"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl font-bold mb-4">Plan Your Next Adventure</h1>
        <p className="mb-6">Find and book flights at the best prices.</p>
        <SearchForm />
      </div>
    </div>
  );
};

const SearchForm: React.FC = () => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  const handleSearch = () => {
    console.log({ departure, destination, date, passengers });
  };

  return (
    <Card className="bg-shade-light p-6 shadow-lg rounded-md max-w-lg mx-auto">
      <Form>
        <Form.Group>
          <Form.Label>Departure</Form.Label>
          <Input
            type="text"
            placeholder="City or Airport"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Destination</Form.Label>
          <Input
            type="text"
            placeholder="City or Airport"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Passengers</Form.Label>
          <Input
            type="number"
            min={1}
            value={passengers}
            onChange={(e) => setPassengers(Number(e.target.value))}
          />
        </Form.Group>
        <Button
          className="w-full bg-blue-500 text-white hover:bg-blue-600"
          onClick={handleSearch}
        >
          Search Flights
        </Button>
      </Form>
    </Card>
  );
};

interface FlightCardProps {
  airline: string;
  price: string;
  duration: string;
}

const FlightCard: React.FC<FlightCardProps> = ({
  airline,
  price,
  duration,
}) => {
  return (
    <Card className="p-4 bg-shade-light shadow-md rounded-md border border-gray-200">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">{airline}</h2>
        <span className="text-blue-500 font-bold">{price}</span>
      </div>
      <p className="text-sm text-gray-600 mt-2">Duration: {duration}</p>
      <Button className="mt-4 bg-green-500 text-white hover:bg-green-600">
        Book Now
      </Button>
    </Card>
  );
};

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Available Flights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FlightCard airline="Airline A" price="$120" duration="2h 30m" />
          <FlightCard airline="Airline B" price="$150" duration="3h 10m" />
          <FlightCard airline="Airline C" price="$200" duration="1h 50m" />
        </div>
      </div>
    </div>
  );
};

export default Home;
