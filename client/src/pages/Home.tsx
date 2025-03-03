import {
  PlaneIcon,
  Globe,
} from "lucide-react";
import { FlightSearchForm } from "@/components/flight-search-form";
import { FeatureCard } from "@/components/home/feature-card";
import { ActionCard } from "@/components/home/action-card";
import Testimonials from "@/components/home/testimonials";
import bgFormImage from "@/assets/images/bg-search-form.png";
import mastercardSvg from "@/assets/icons/mastercard.svg";
import visaSvg from "@/assets/icons/visa.svg";
import americanExpressSvg from "@/assets/icons/americanexpress.svg";
import phoneSvg from "@/assets/icons/phone.svg";
import whatsappSvg from "@/assets/icons/whatsapp.svg";
import projectedSvg from "@/assets/icons/projected.svg";
import secureSvg from "@/assets/icons/secure.svg";
import gauranteeSvg from "@/assets/icons/gaurantee.svg";
import supportSvg from "@/assets/icons/support.svg";
import { useState } from "react";


export default function Home() {
  const [selectedButton, setSelectedButton] = useState("flights");
  const features = [
    {
      icon: projectedSvg,
      title: "ATOL Protected Flights",
      description: "Your booking is protected by ATOL certification",
    },
    {
      icon: gauranteeSvg,
      title: "Best Prices Guarantee",
      description: "We ensure competitive prices for all destinations",

    },
    {
      icon: secureSvg,
      title: "Secure Payment",
      description: "Multiple secure payment options available",
      bottomIcons: <div className="flex gap-2">
        <img src={mastercardSvg} alt="mastercard image" />
        <img src={visaSvg} alt="visa image" />
        <img src={americanExpressSvg} alt="american express image" />
      </div>,
    },
    {
      icon: supportSvg,
      title: "24/7 Customer Support",
      description: "Round-the-clock assistance for all your needs",
      bottomIcons: <div className="flex gap-2">
        <img src={phoneSvg} alt="phone image" />
        <img src={whatsappSvg} alt="whatsapp image" />
      </div>,
    },
  ];

  const actions = [
    {
      title: "Complete Control",
      description:
        "Easily manage your booking from one place. See your flight details, meal options and everything related to your add-ons. Plus, track your refund status in real time with no stress.",
      actionText: "Log in to My Bookings",
      actionLink: "/bookings",
    },
    {
      title: "Flexible Payment Options",
      description:
        "Get your ticket by paying deposit, no credit card required. Save big by securing your seat in advance and clear the balance before you travel.",
      actionText: "Explore Flexible Payments",
      actionLink: "/payments",
    },
    {
      title: "Experience Trust",
      description:
        "For the first time in the travel industry, we offer video chat support. Experience unmatched transparency and personalized service that ensures your confidence and peace of mind throughout your journey.",
      actionText: "Video Chat with us",
      actionLink: "/video-chat",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="h-[500px] bg-cover bg-center relative"
        style={{
          backgroundImage:
            `url(${bgFormImage})`,
        }}
      >
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="flex items-center justify-between mx-2">
            <div className="flex gap-4 h-[80px]">
              <button
                onClick={() => setSelectedButton("flights")}
                className={`flex flex-col w-[100px] items-center justify-center py-3 px-5 rounded text-base transition-all ${selectedButton === "flights"
                  ? "bg-white text-black scale-105"
                  : "bg-white bg-opacity-10 backdrop-blur-lg text-black hover:bg-gray-100 hover:scale-105"
                  }`}
                style={selectedButton === "flights" ? { width: "102px", height: "82px" } : {}}
              >
                <PlaneIcon size={18} className="mb-1" />
                Flights
              </button>
              <button
                onClick={() => setSelectedButton("visa")}
                className={`flex flex-col w-[100px] items-center justify-center py-3 px-5 rounded text-base transition-all ${selectedButton === "visa"
                  ? "bg-white text-black scale-105"
                  : "bg-white bg-opacity-10 backdrop-blur-lg text-black hover:bg-gray-100 hover:scale-105"
                  }`}
                style={selectedButton === "visa" ? { width: "102px", height: "82px" } : {}}
              >
                <Globe size={18} className="mb-1" />
                VISA
              </button>
            </div>

            <h1 className="text-white text-4xl md:text-5xl font-bold mb-8">
              Hey Buddy! Where are you
              <br />
              <span className="text-blue-400">Flying to?</span>
            </h1>
          </div>
          <FlightSearchForm />
        </div>

      </div>



      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Why Travel Cart
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-[180px]">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              dark={index === 2}
              icon={feature.icon}
              title={feature.title}
              bottomIcons={feature?.bottomIcons}
            />
          ))}
        </div>
      </div>

      {/* Action Cards Section */}
      <div className="relative py-16">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80")' }}></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {actions.map((action) => (
              <ActionCard
                key={action.title}
                title={action.title}
                description={action.description}
                actionText={action.actionText}
                actionLink={action.actionLink}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
}
