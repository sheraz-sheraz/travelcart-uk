import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
        <p>
          At <strong>TravelCart.uk</strong>, we believe booking flights should be simple, transparent, and hassle-free.
          After spending 15+ years in the travel industry, we saw firsthand how complicated and confusing travel bookings could be.
          Hidden fees, unclear policies, and endless fine print—travelers deserve better. That's why TravelCart.uk was created—to provide
          a straightforward, no-nonsense flight booking experience.
        </p>
        <p>
          Our mission is simple: clear pricing, honest service, and a seamless booking process. Whether you're planning a dream vacation or a last-minute trip,
          we’re here to make sure you get the best flights with no surprises.
        </p>
        <p><strong>No gimmicks. No confusion. Just easy, reliable travel booking.</strong></p>
        <p>Welcome to TravelCart.uk—where travel starts with trust.</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Who We Serve</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Leisure Travelers</strong> – Planning a holiday? We help you find the best deals so you can focus on making memories.</li>
          <li><strong>Business Travelers</strong> – Need a smooth and efficient booking process? We ensure you reach your destination on time with flexible options.</li>
          <li><strong>Last-Minute Travelers</strong> – Unexpected trip? We’ll help you find the best available flights, even on short notice.</li>
          <li><strong>Family & Group Travelers</strong> – Booking for multiple people? We make group travel easy with seamless booking options.</li>
          <li><strong>Frequent Flyers</strong> – Whether you travel often for work or leisure, we help you find the best flights without the hassle.</li>
        </ul>
        <p className="mt-4">Wherever you're going, TravelCart.uk is here to get you there—easily, affordably, and without hidden surprises.</p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-2">How We Operate</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>✈️ Easy Search & Booking</strong> – Enter your travel details, and we instantly find the best flight options for you.</li>
          <li><strong>💰 Transparent Pricing</strong> – No hidden fees, no surprises. The price you see is the price you pay.</li>
          <li><strong>📍 Physical Office in London</strong> – Unlike many online-only platforms, we have a physical office in Ilford, London, so you know exactly where to find us.</li>
          <li><strong>📹 Exclusive Video Call Support</strong> – We’re the only company offering direct video call assistance for a more personal and efficient service.</li>
          <li><strong>📞 No Chatbots, No Call Waiting</strong> – Forget automated responses! When you need help, you’ll speak directly with a real person—no delays, no frustration.</li>
          <li><strong>📊 Smart Flight Comparisons</strong> – We compare multiple airlines and routes to help you find the best value.</li>
          <li><strong>🔄 Flexible Booking Options</strong> – Need changes? We offer flexible solutions tailored to your travel needs.</li>
          <li><strong>🤝 Reliable Support, Anytime</strong> – Whether you have a question before booking or need assistance while traveling, we’re here to help—quickly and directly.</li>
        </ul>
        <p className="mt-4">At TravelCart.uk, we handle the details so you can focus on your journey. Simple, straightforward, and stress-free—just the way travel should be.</p>
      </section>
    </div>
  );
};

export default AboutUs;
