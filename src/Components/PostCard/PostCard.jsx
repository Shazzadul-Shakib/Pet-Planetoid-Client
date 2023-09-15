import profile from "../../assets/profile.jpg";
import post from "../../assets/blogc1.jpg";
import { AiOutlineHeart, AiOutlineComment, AiFillHeart } from "react-icons/ai";
import { PiShareFatThin } from "react-icons/pi";
import useCreatePost from "../../Hooks/useCreatePost";
import Loader from "../Shared/Loader/Loader";

const PostCard = () => {
  const [data, isLoading, refetch] = useCreatePost();
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {/* User info */}
      {data.map((post) => (
        <div key={post._id}>
          <div className=" p-5 w-5/6 bg-white shadow-lg rounded-lg m-4 mx-auto">
            <div className=" flex justify-between items-center">
              <div className="flex items-center my-3">
                <img
                  className="h-14 w-14 rounded-full mr-5 "
                  src={post.userPhotoURL}
                  alt=""
                />
                <h1 className="text-xl font-bold text-gray-600">
                  {post.userName}
                </h1>
              </div>
              <div className="border-2 border-[#FF8989] px-2 md:px-4 rounded-md mr-1 md:mr-6">
                <h1 className="uppercase text-xs md:text-base">{post.petCategory}</h1>
              </div>
            </div>
            {/* Post caption */}
            <div className=" my-3">
              <p className="text-lg">{post.caption}</p>
            </div>
            {/* Post Image */}
            <div className=" my-3">
              <img
                className=" w-full rounded-lg"
                src={post.displayURL}
                alt=""
              />
            </div>
            {/* Like count */}
            <div className=" my-3 ml-2 flex gap-2 items-center">
              <AiFillHeart className="text-[#FF8989] text-lg" /> 2
            </div>
            {/* like comment section */}
            <div className="flex gap-5 my-1 md:my-3">
              <button className=" px-2 py-1 rounded-md text-gray-600 w-1/3 text-center flex items-center justify-center gap-3 text-lg">
                <AiOutlineHeart /> <span className="hidden md:block">Like</span>
              </button>
              <button className=" px-2 py-1 rounded-md text-gray-600 w-1/3 text-center flex items-center justify-center gap-3 text-lg">
                <AiOutlineComment />{" "}
                <span className="hidden md:block">Comment</span>
              </button>
              <button className=" px-2 py-1 rounded-md text-gray-600 w-1/3 text-center flex items-center justify-center gap-3 text-lg">
                <PiShareFatThin />{" "}
                <span className="hidden md:block">Share</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
