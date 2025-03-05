import { Link } from 'react-router-dom';
import mastercardSvg from "@/assets/icons/mastercard.svg";
import visaSvg from "@/assets/icons/visa.svg";
import amadeusSvg from "@/assets/icons/amadeusText.svg";
import tataSvg from "@/assets/icons/tata.svg";
import BookingIcon from '@/assets/icons/booking-icon';

export function Footer() {
  const footerSections = [
    {
      title: 'About Us',
      links: [
        { text: 'About us', href: '/about' },
        { text: 'Why Book With Us?', href: '/why-us' },
        { text: 'Privacy Policy', href: '/privacy' },
      ]
    },
    {
      title: 'Support',
      links: [
        { text: 'Contact Us', href: '/contact' },
        { text: 'Terms & Conditions', href: '/terms' },
        { text: 'Customer Support', href: '/support' },
      ]
    },
    {
      title: 'Security',
      links: [
        { text: 'Financial Security', href: '/security' },
        { text: 'Book Now Pay Later', href: '/payment-plans' },
        { text: 'Video Conference', href: '/video-conferencing-support' },
      ]
    },
  ];

  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-lg font-semibold mb-4">Log In</h3>
            <p className="text-gray-400 mb-2 mt-4">Check your current Bookings</p>
            <Link
              to="/bookings"
              className="inline-flex items-center bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              <BookingIcon size={18} fill={"#000"} /> <span className="mx-2">My bookings</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img src={mastercardSvg} alt="Mastercard" className="h-14" />
              <img src={visaSvg} alt="Visa" className="h-14" />
            </div>
            <div className='flex items-center space-x-4'>
              <img src={tataSvg} alt="tata" className="h-8" />
              <img src={amadeusSvg} alt="Amadeus" className="h-6" />
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm mt-6">
            © 2024 All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}