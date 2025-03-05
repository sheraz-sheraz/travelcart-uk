import React from "react";
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react";

const BookNowPayLater = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Book Now, Pay Later</h1>
      <p className="text-lg text-center mb-6">
        Introducing TravelCart.uk's <strong>Book Now, Pay Later</strong> service—a flexible payment solution designed to make your travel planning more accessible and stress-free.
      </p>
      
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-3">How It Works</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>Personalized Payment Plan:</strong> Contact our team to discuss your travel plans. We'll assess your journey and create a tailored payment plan that suits your financial situation.</li>
          <li><strong>Secure Your Booking with a Deposit:</strong> Pay an initial deposit, determined on a case-by-case basis. For example, if your ticket costs £500, the deposit amount will be customized to your needs.</li>
          <li><strong>Immediate Ticket Issuance:</strong> Once the deposit is received, we'll issue your e-ticket promptly, securing your seat and fare.</li>
          <li><strong>Flexible Balance Payment:</strong> Pay the remaining balance before your departure date, as per the agreed schedule.</li>
        </ol>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-3">Key Benefits</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><CheckCircle className="inline mr-2 text-green-600" /> <strong>No Credit Card Required:</strong> Our service doesn't necessitate a credit card, making it accessible to a broader audience.</li>
          <li><CheckCircle className="inline mr-2 text-green-600" /> <strong>No Credit Checks:</strong> We believe in offering flexibility without the need for credit assessments.</li>
          <li><CheckCircle className="inline mr-2 text-green-600" /> <strong>Competitive Service Fee:</strong> While other companies may charge up to 38% interest, our service fee ranges between 10% to 15%, ensuring affordability.</li>
        </ul>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-3">Why Choose Our Book Now, Pay Later Service?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><CheckCircle className="inline mr-2 text-green-600" /> Immediate Confirmation: Secure your travel plans without waiting to pay the full amount.</li>
          <li><CheckCircle className="inline mr-2 text-green-600" /> Budget-Friendly Travel: Manage your finances effectively by spreading the cost over time.</li>
          <li><CheckCircle className="inline mr-2 text-green-600" /> Transparent and Fair: Enjoy a straightforward payment process with no hidden charges.</li>
        </ul>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6 text-center">
        <h2 className="text-xl font-semibold mb-3">Get Started Today</h2>
        <p>Embark on your next journey with ease. Contact us to set up your personalized payment plan and take advantage of our Book Now, Pay Later service.</p>
        <div className="mt-4 space-y-2">
          <p className="flex items-center justify-center"><MapPin className="mr-2" /> 123 Ilford Lane, Ilford, London, UK</p>
          <p className="flex items-center justify-center"><Phone className="mr-2" /> +44 20 1234 5678</p>
          <p className="flex items-center justify-center"><Mail className="mr-2" /> support@travelcart.uk</p>
        </div>
      </div>

      <p className="text-center text-lg">At <strong>TravelCart.uk</strong>, we're committed to making travel more accessible and convenient for everyone.</p>
    </div>
  );
};

export default BookNowPayLater;
