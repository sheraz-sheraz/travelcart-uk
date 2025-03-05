import { Link } from 'react-router-dom';
import BookingIcon from '@/assets/icons/booking-icon';
import phoneSvg from '@/assets/icons/whitephone.svg';
import whatsappSvg from '@/assets/icons/whitewhatsapp.svg';
import travelcart from '@/assets/icons/travelcart.png';


export function Header() {
  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
        <img src={travelcart} alt="Phone" className="w-193 h-32" />
          {/* travelcart<span className="text-red-500">.uk</span> */}
        </Link>

        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <img src={phoneSvg} alt="Phone" className="w-8 h-8" />
            <span>0777 7254 310</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src={whatsappSvg} alt="WhatsApp" className="w-8 h-8" />
            <span>0777 7254 310</span>
          </div>
        </div>
        <div className='flex items-center space-x-2'>
          <BookingIcon size={28} className="hover:scale-110 transition-all cursor-pointer" />
          <Link
            to="/bookings"
            // className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors"
            className=" hover:bg-blue-700 px-4 py-2 rounded-md transition-colors text-sm"
          >
            Manage Bookings
          </Link>
        </div>
      </div>
    </header>
  );
}