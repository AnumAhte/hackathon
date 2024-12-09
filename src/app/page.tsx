
import Brands from "./components/brands";
import Browse from "./components/browse";
import Happy from "./components/happy";
import Herro from "./components/herro";
import NewArrivals from "./components/newarrivals";
import TopSelling from "./components/top";



export default function Home() {
    return(
      <div >
        
         <Herro/>
         <Brands/>
         <NewArrivals/>
         <TopSelling/>
         <Browse/>
         <Happy/>
{/* Black Box Section */}
<section className="w-5/6 bg-black text-white flex items-center justify-center mx-auto rounded-lg">
  <div className="max-w-screen-xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between rounded-lg">
    {/* Text Section */}
    <h2 className="text-center md:text-left text-3xl md:text-4xl font-bold leading-tight mb-4 md:mb-0">
      Stay Up to Date About Our Latest Offers
    </h2>

    {/* Newsletter Form */}
    <div className="flex flex-col md:flex-row items-center md:w-auto gap-4 w-full">
      <input
        type="email"
        placeholder="Enter your email address"
        className="flex-1 px-4 py-3 rounded-md text-gray-800"
      />
      <button className="bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-gray-300 transition mt-4 md:mt-0">
        Subscribe to Newsletter
      </button>
    </div>
  </div>
</section>







      </div>
    )
}