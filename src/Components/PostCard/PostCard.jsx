import profile from '../../assets/profile.jpg';
import post from '../../assets/blogc1.jpg';
import { AiOutlineHeart, AiOutlineComment, AiFillHeart } from "react-icons/ai";
import { PiShareFatThin } from "react-icons/pi";

const PostCard = () => {
    return (
      <div className=" p-5 w-5/6 bg-white shadow-lg rounded-lg m-4 mx-auto">
        {/* User info */}
        <div className=" flex items-center my-3">
          <img className="h-14 w-14 rounded-full mr-5 " src={profile} alt="" />
          <h1 className="text-xl font-bold text-gray-600">MR. Lorabi Khan</h1>
        </div>
        {/* Post caption */}
        <div className=" my-3">
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
            minima!
          </p>
        </div>
        {/* Post Image */}
        <div className=" my-3">
          <img className=" w-full rounded-lg" src={post} alt="" />
        </div>
        {/* Like count */}
        <div className=" my-3 ml-2 flex gap-2 items-center">
          <AiFillHeart className='text-[#FF8989] text-lg' /> 2
        </div>
        {/* like comment section */}
        <div className="flex gap-5 my-3">
          <button className=" px-2 py-1 rounded-md text-gray-600 w-1/3 text-center flex items-center justify-center gap-3 text-lg">
            <AiOutlineHeart /> Like
          </button>
          <button className=" px-2 py-1 rounded-md text-gray-600 w-1/3 text-center flex items-center justify-center gap-3 text-lg">
            <AiOutlineComment /> Comment
          </button>
          <button className=" px-2 py-1 rounded-md text-gray-600 w-1/3 text-center flex items-center justify-center gap-3 text-lg">
            <PiShareFatThin /> Share
          </button>
        </div>
      </div>
    );
};

export default PostCard;