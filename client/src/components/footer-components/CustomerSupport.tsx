import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const FAQs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions (FAQs)</h1>
      
      <div className="space-y-6">
        {/* General Information */}
        <div>
          <h2 className="text-2xl font-semibold">1. General Information</h2>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Q1. What services does TravelCart.uk offer?</h3>
            <p>At TravelCart.uk, we specialize in providing seamless flight booking services, including:</p>
            <ul className="list-disc list-inside">
              <li>Online Bookings via our website.</li>
              <li>In-Person Assistance at our Ilford, London office.</li>
              <li>Over-the-Phone Bookings via customer support.</li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Q2. How can I contact TravelCart.uk?</h3>
            <p>You can reach us through various channels:</p>
            <ul className="list-disc list-inside">
              <li><Phone className="inline-block mr-2" /> Phone: +44 7777 254 310</li>
              <li><Mail className="inline-block mr-2" /> Email: support@travelcart.uk</li>
              <li><MapPin className="inline-block mr-2" /> Address: 100 Wanstead Lane, Ilford, IG1 3SE</li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Q3. What are your operating hours?</h3>
            <p>Our operating hours are:</p>
            <ul className="list-disc list-inside">
              <li>Monday to Friday: 9:00 AM – 6:00 PM</li>
              <li>Saturday: 10:00 AM – 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Booking Process */}
        <div>
          <h2 className="text-2xl font-semibold">2. Booking Process</h2>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Q4. How do I book a flight online?</h3>
            <p>Follow these steps to book a flight online:</p>
            <ul className="list-disc list-inside">
              <li>Visit <a href="https://www.travelcart.uk" className="text-blue-600">www.travelcart.uk</a></li>
              <li>Enter travel details and browse available flights.</li>
              <li>Complete the secure payment process.</li>
              <li>Receive your e-ticket via email.</li>
            </ul>
          </div>
        </div>

        {/* Managing Your Booking */}
        <div>
          <h2 className="text-2xl font-semibold">3. Managing Your Booking</h2>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Q9. Can I make changes to my booking?</h3>
            <p>Yes, modifications are possible but subject to airline policies and fees. Contact our support team for assistance.</p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Q10. What is the cancellation policy?</h3>
            <p>Refund policies depend on the airline and fare type:</p>
            <ul className="list-disc list-inside">
              <li>Refundable tickets: Eligible for a refund minus applicable fees.</li>
              <li>Non-refundable tickets: May incur change fees.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
