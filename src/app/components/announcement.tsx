/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function AnnouncementBar() {
    const responsiveText = "text-sm";


  return (
    <section className="w-full bg-black text-[#e2e8f0] flex justify-center items-center h-2 sm:h-12 md:h-14 lg:h-10">
      {/* Wrapper for centered content */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full max-w-6xl px-4">
        <div className="flex justify-center items-center text-center  gap-2">
          <h1 className={`${responsiveText} flex items-center`}>
        
            <span className="hidden sm:block">
            Sign up and get 20% off to your first order.
            </span>
          </h1>
          <a
            href="/shop"
            className={`font-bold underline ${responsiveText} hover:text-gray-300 transition duration-200`}
          >
            Sign Up Now
          </a>
        </div>

       
      </div>
    </section>
  );
}

export default AnnouncementBar;
