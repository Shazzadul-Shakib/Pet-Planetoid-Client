import cat from '../../assets/cat.webp';
import dog from '../../assets/dog.webp';
import bird from '../../assets/bird.webp';
import { Link } from 'react-router-dom';
import { MdOutlinePets } from "react-icons/md";


const Availablepets = () => {
    return (
      <div className=" my-16 grid grid-cols-1 gap-3 place-items-center md:grid-cols-4 md:max-w-screen-lg md:mx-auto">
        {/* Cat */}
        <div className=" h-[260px] w-56  bg-[#FF8989] text-center text-white rounded-lg">
          <div>
            <img className=" h-52 w-56 rounded-lg " src={cat} alt="" />
          </div>
          <div className=" py-2">
            <p className=" text-xl font-semibold">Lorabi</p>
          </div>
        </div>
        {/* Dog */}
        <div className=" h-[260px] w-56  bg-[#FF8989] text-center text-white rounded-lg">
          <div>
            <img className=" h-52 w-56 rounded-lg " src={dog} alt="" />
          </div>
          <div className=" py-2">
            <p className=" text-xl font-semibold">Rokuku</p>
          </div>
        </div>
        {/* Bird */}
        <div className=" h-[260px] w-56  bg-[#FF8989] text-center text-white rounded-lg">
          <div>
            <img className=" h-52 w-56 rounded-lg " src={bird} alt="" />
          </div>
          <div className=" py-2">
            <p className=" text-xl font-semibold">Sophil</p>
          </div>
        </div>
        {/* Find more */}
        <div className="h-[260px] w-56  bg-[#FF8989] text-center text-white rounded-lg">
          <Link className=" h-[260px] w-56  bg-[#FF8989] text-center text-white rounded-lg">
            <div>
              <MdOutlinePets className=" h-52 w-56 rounded-lg " />
            </div>
            <div className=" py-2">
              <p className=" text-xl font-semibold">Find More</p>
            </div>
          </Link>
        </div>
      </div>
    );
};

export default Availablepets;