import React from "react";

const FinancialSecurity = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Financial Security at TravelCart.uk</h1>
      
      <p className="text-lg mb-4">
        At <strong>TravelCart.uk</strong>, we prioritize your financial security and ensure that every transaction you make with us is protected. Whether you book flights online, in person, or over the phone, we implement strict security measures to keep your payments safe.
      </p>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">1. Secure Payment Processing</h2>
          <ul className="list-disc pl-6">
            <li>We use SSL encryption to safeguard all transactions, ensuring your payment details remain confidential.</li>
            <li>Our payment gateway partners are PCI DSS compliant, meeting global security standards.</li>
            <li>All transactions go through trusted and secure banking networks to prevent fraud.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">2. Payment Options with Full Transparency</h2>
          <p>We offer multiple payment options to make your booking experience seamless and secure:</p>
          <ul className="list-disc pl-6">
            <li><strong>Credit & Debit Cards:</strong> Visa, MasterCard, and other major providers.</li>
            <li><strong>Bank Transfers:</strong> Available upon request for verified bookings.</li>
            <li><strong>Cash Payments:</strong> Accepted at our physical office in Ilford, London.</li>
            <li><strong>Book Now, Pay Later:</strong> Secure your booking with a deposit and pay the remaining balance before travel.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">3. Fraud Prevention & Scam Protection</h2>
          <ul className="list-disc pl-6">
            <li>We protect customers from travel scams by offering realistic pricing and transparent ticket issuance.</li>
            <li>Our physical office in Ilford, London, provides an extra layer of trust—visit us anytime.</li>
            <li>Transactions flagged as suspicious undergo manual verification to prevent unauthorized payments.</li>
            <li>We never ask for payment details via email or phone. Always make payments through our official website or office.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">4. Refund & Dispute Resolution</h2>
          <ul className="list-disc pl-6">
            <li>We adhere to airline policies regarding refunds and cancellations.</li>
            <li>In case of disputes, we offer a straightforward resolution process—contact our support team, and we will assist you promptly.</li>
            <li>Refunds, if applicable, are processed within 7-14 business days directly to your original payment method.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">5. No Hidden Fees, No Extra Charges</h2>
          <ul className="list-disc pl-6">
            <li>We operate with a transparent pricing policy—what you see at the time of booking is what you pay.</li>
            <li>No hidden service fees, no unexpected currency conversion charges.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">6. Customer Support Without Delays</h2>
          <ul className="list-disc pl-6">
            <li>No chatbots, no long hold times—speak directly with a real support representative.</li>
            <li>Reach us via phone, email, or in person at our office for immediate assistance.</li>
            <li>Exclusive Video Call Support for complex inquiries or payment verifications.</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 text-center">
        <h2 className="text-xl font-semibold">Need Assistance?</h2>
        <p>For any financial security concerns, payment issues, or refund queries, reach out to us:</p>
        <p><strong>📍 Visit us:</strong> 100 Wanstead Lane, Ilford, England, IG1 3SE</p>
        <p><strong>📞 Call us:</strong> +44 7777 254 310</p>
        <p><strong>📧 Email:</strong> finance@travelcart.uk</p>
        <p className="mt-4 font-semibold">Your security is our priority at TravelCart.uk—book with confidence!</p>
      </div>
    </div>
  );
};

export default FinancialSecurity;
