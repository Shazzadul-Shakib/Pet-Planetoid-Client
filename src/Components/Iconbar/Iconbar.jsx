import { Link } from "react-router-dom"
import { PiDog, PiCat, PiBird } from "react-icons/pi";
import { BsHouseHeart } from "react-icons/bs";


const Iconbar = () => {
    return (
      <>
        <Link className=" flex  flex-col justify-center items-center h-[160px] w-[160px] md:h-[188px] md:w-[188px] rounded-lg bg-[#FFEADD] text-[#FF6666] shadow-lg">
          <div>
            <PiCat className=" text-6xl" />
          </div>
          <div>
            <p className=" text-xl">Cats</p>
          </div>
        </Link>
        <Link className=" flex  flex-col justify-center items-center h-[160px] w-[160px] md:h-[188px] md:w-[188px] rounded-lg bg-[#FFEADD] text-[#FF6666] shadow-lg">
          <div>
            <PiDog className=" text-6xl" />
          </div>
          <div>
            <p className=" text-xl">Dogs</p>
          </div>
        </Link>
        <Link className=" flex  flex-col justify-center items-center h-[160px] w-[160px] md:h-[188px] md:w-[188px] rounded-lg bg-[#FFEADD] text-[#FF6666] shadow-lg">
          <div>
            <PiBird className=" text-6xl" />
          </div>
          <div>
            <p className=" text-xl">Birds</p>
          </div>
        </Link>
        <Link className=" flex  flex-col justify-center items-center h-[160px] w-[160px] md:h-[188px] md:w-[188px] rounded-lg bg-[#FFEADD] text-[#FF6666] shadow-lg">
          <div>
            <BsHouseHeart className=" text-6xl" />
          </div>
          <div>
            <p className=" text-xl mt-1 md:mt-0">Shelters</p>
          </div>
        </Link>
      </>
    );
};

export default Iconbar;