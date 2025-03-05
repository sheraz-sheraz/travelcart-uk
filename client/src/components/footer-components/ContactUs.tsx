import React from "react";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      
      <p className="text-lg mb-4 text-center">
        At <strong>TravelCart.uk</strong>, we're committed to providing exceptional customer service. Whether you have questions about our services, need assistance with a booking, or want to provide feedback, we're here to help.
      </p>
      
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold flex items-center"><MapPin className="mr-2" /> Address</h2>
        <p>100 Wanstead Lane, Ilford, London, UK, IG1 3SE</p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold">Office Hours</h2>
        <p>Monday to Friday: 9:00 AM – 6:00 PM</p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold flex items-center"><Phone className="mr-2" /> Contact Us Directly</h2>
        <p><strong>Phone:</strong> +44 7777 254 310 (Our phone lines are open 24/7)</p>
        <p className="mt-2 flex items-center"><Mail className="mr-2" /> <strong>Email:</strong> support@travelcart.uk</p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold">Video Call Support</h2>
        <p>We offer exclusive video call support for personalized assistance. Simply call us on WhatsApp or schedule a call with us anytime!</p>
      </div>

      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4">Stay Connected</h2>
        <div className="flex justify-center space-x-4">
          <a href="https://www.facebook.com/travelcart.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl">
            <Facebook />
          </a>
          <a href="https://www.instagram.com/travelcart.uk/" target="_blank" rel="noopener noreferrer" className="text-pink-600 text-2xl">
            <Instagram />
          </a>
        </div>
        <p className="mt-4">We value your inquiries and look forward to assisting you with your travel needs.</p>
      </div>
    </div>
  );
};

export default ContactUs;
