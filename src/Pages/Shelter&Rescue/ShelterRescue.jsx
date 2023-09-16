import { Helmet } from "react-helmet-async";
import image from "../../assets/Under construction.svg";

const ShelterRescue = () => {
    return (
      <div>
        {/* Helmet to change title over browser */}
        <Helmet>
          <title>Pet Planetoid | Shelter&Rescue</title>
        </Helmet>
        <div className=" h-[100vh]">
          <img className=" h-[80%] w-full" src={image} alt="" />
        </div>
      </div>
    );
};

export default ShelterRescue;