import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Terms and Conditions</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p>Welcome to Travelcart.uk. By accessing and using our website, you agree to comply with and be bound by the following Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold">2. Definitions</h2>
          <ul className="list-disc pl-5">
            <li><strong>"We," "Us," "Our":</strong> Refers to Travelcart.uk.</li>
            <li><strong>"You," "Customer":</strong> Refers to the individual accessing or using our services.</li>
            <li><strong>"Services":</strong> Refers to the flight booking services provided by TravelCart.uk.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. Booking and Payment</h2>
          <ul className="list-disc pl-5">
            <li><strong>Booking Process:</strong> Bookings can be made through our website, by visiting our office in Ilford, or over the phone.</li>
            <li><strong>Payment Terms:</strong> Full payment is required at the time of booking unless you opt for our "Book Now, Pay Later" scheme.</li>
            <li><strong>Book Now, Pay Later:</strong> This option allows partial upfront payment with the remaining balance due before the travel date. Failure to pay on time results in cancellation without refund.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Pricing and Fees</h2>
          <ul className="list-disc pl-5">
            <li><strong>Transparent Pricing:</strong> All displayed prices include applicable taxes and fees.</li>
            <li><strong>Additional Charges:</strong> Optional services like baggage, seat selection, and meals may have extra charges.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">5. Changes, Cancellations, and Refunds</h2>
          <ul className="list-disc pl-5">
            <li><strong>Customer-Initiated Changes:</strong> Must be requested at least 72 hours before departure and may incur fees.</li>
            <li><strong>Airline-Initiated Changes:</strong> Will be communicated as per the airline's policy.</li>
            <li><strong>Cancellations:</strong> Subject to airline policies. Refunds (if applicable) will follow these policies.</li>
            <li><strong>No-Show Policy:</strong> Failure to board without prior notice may result in ticket forfeiture.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">6. Travel Documentation</h2>
          <ul className="list-disc pl-5">
            <li><strong>Responsibility:</strong> Customers must ensure valid passports, visas, and travel documents.</li>
            <li><strong>Compliance:</strong> Customers must adhere to immigration and customs regulations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">7. Special Services</h2>
          <ul className="list-disc pl-5">
            <li><strong>Video Call Support:</strong> Available for booking and support inquiries.</li>
            <li><strong>Physical Office Visits:</strong> Our Ilford, London office is open during specified hours for in-person assistance.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">8. Limitation of Liability</h2>
          <ul className="list-disc pl-5">
            <li><strong>Service Scope:</strong> We act as an intermediary and are not liable for flight cancellations or changes made by airlines.</li>
            <li><strong>Indirect Damages:</strong> We are not responsible for any indirect or consequential damages from using our services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">9. Data Protection and Privacy</h2>
          <ul className="list-disc pl-5">
            <li><strong>Personal Information:</strong> Collected and processed per our Privacy Policy.</li>
            <li><strong>Data Sharing:</strong> Information is shared with third parties only as necessary for booking completion or as required by law.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">10. Governing Law</h2>
          <p>These Terms and Conditions are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">11. Amendments</h2>
          <p>We reserve the right to modify these Terms and Conditions at any time. Changes take effect upon posting on our website. Continued use of our services constitutes acceptance of the revised terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">12. Contact Information</h2>
          <p>For any questions regarding these Terms and Conditions, contact us:</p>
          <p><strong>Travelcart.uk</strong></p>
          <p>100 Wanstead Lane, Ilford, IG1 3SE</p>
          <p>Phone: +44 7777 254 310</p>
          <p>Email: support@travelcart.uk</p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
