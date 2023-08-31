import { Helmet } from "react-helmet-async";
import cover from '../../../assets/cover2.png'
import Iconbar from "../../../Components/Iconbar/Iconbar";
import Availablepets from "../../../Components/Availablepets/Availablepets";
import PetAdoption from "../../../Components/PetAdoption/PetAdoption";

const Home = () => {
    return (
      <div>
        {/* Helmet to change title over browser */}
        <Helmet>
          <title>Pet Planetoid | Home</title>
        </Helmet>

        {/* Hero section */}
        <div className=" relative">
          {/* cover photo of hero section */}
          <img src={cover} alt="" className=" w-full" />
          {/* Headings of hero section */}
          <div className=" absolute top-6 left-10  md:top-1/3 md:left-1/3 text-white text-center ">
            <div>
              <h1 className="  text-xl md:text-6xl">
                Find your new best friend
              </h1>
              <p className="  mt-2 md:text-2xl md:mt-6">
                The largest online pet adoption website serving all of
                Bangladesh.
              </p>
            </div>
          </div>
        </div>

        {/* Icon bar section */}
        <div className=" w-4/5 my-10 mx-auto grid grid-cols-2 gap-x-8 gap-y-3 md:grid-cols-4 place-items-center md:max-w-screen-lg md:mx-auto">
          <Iconbar />
        </div>

        {/* Available pet sectioon */}
        <div>
          {/* Headers */}
          <h1 className="text-4xl text-center text-[#FF6666]">
            Most Popular Pets are here!
          </h1>
          <Availablepets />
        </div>

        {/* Pet adoption article section */}
        <div>
          {/* Headers */}
          <h1 className="text-4xl text-center text-[#FF6666]">
            Read Articles to know more about pet!
          </h1>
          <PetAdoption/>
        </div>
      </div>
    );
};

export default Home;