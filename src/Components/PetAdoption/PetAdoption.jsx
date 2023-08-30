import { Link } from 'react-router-dom';
import cat from '../../assets/blogc2.jpg'
import dog from '../../assets/blogc1.jpg'


const PetAdoption = () => {
    return (
      <div className=" my-16 max-w-xs mx-auto grid gap-x-[30px] gap-y-[30px] md:grid-cols-2 md:max-w-screen-lg md:mx-auto">
        {/* Cat adoption */}
        <div className="  rounded-lg shadow-lg">
          <div>
            <img src={cat} alt="" className=' rounded-lg md:w-[512px]  md:h-[290px]' />
          </div>
          <div className=" text-center my-5">
            <h2 className=" text-3xl text-[#FF8989] font-semibold">
              Cat Adoption Articles
            </h2>
            <p className=" text-sm mt-2">Learn more about cats before have a cat.</p>
          </div>
          <div className="text-center py-3 text-white bg-[#FF8989] rounded-lg">
            <Link>Read More</Link>
          </div>
        </div>
        {/* Dog adoption */}
        <div className=" rounded-lg shadow-lg">
          <div>
            <img src={dog} alt="" className=' rounded-lg md:w-[512px]  md:h-[290px]' />
          </div>
          <div className=" text-center my-5">
            <h2 className=" text-3xl text-[#FF8989] font-semibold">
              Dog Adoption Articles
            </h2>
            <p className=" text-sm mt-2">Learn more about dogs before have a dog.</p>
          </div>
          <div className="text-center py-3 text-white bg-[#FF8989] rounded-lg">
            <Link>Read More</Link>
          </div>
        </div>
      </div>
    );
};

export default PetAdoption;