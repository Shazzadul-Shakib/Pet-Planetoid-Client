import { AiOutlineHeart, AiOutlineComment, AiFillHeart } from "react-icons/ai";
import { PiShareFatThin } from "react-icons/pi";
import Loader from "../Shared/Loader/Loader";
import profile from '../../assets/profile.jpg';
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import LikedUsersModal from "../Modals/LikedUsersModal";
import CommentsModal from "../Modals/CommentsModal";
import { Link } from "react-router-dom";

const PostCard = ({data, isLoading, refetch}) => {
  const { user } = useContext(AuthContext);
  const [openLikedUserModalId, setOpenLikedUserModalId] = useState(null);
  const [openCommentsModal, setOpenCommentsModal] = useState(null);

  const toggleLikedUserModal = (post) => {
    setOpenLikedUserModalId(post._id);
  };
  // toggle comments modal
  const toggleCommentsModal = (post) => {
    setOpenCommentsModal(post._id);
  };

  // toggle like
  const toggleLike = async (post) => {
    post.likeduser = user;
    await axios
      .patch(`http://localhost:5000/get-posts/${post._id}`, post)
      .then(() => {
        refetch();
      });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {data && data.length > 0 ? (
        data.map((post) => (
          <div key={post._id}>
            <div className=" p-5 w-5/6 bg-white shadow-lg rounded-lg m-4 mx-auto">
              <div className=" flex justify-between items-center">
                <div className="flex items-center my-3">
                  <img
                    className="h-14 w-14 rounded-full mr-5 "
                    src={post.userPhotoURL || profile}
                    alt=""
                  />
                  <Link to={`/user/${post.email}`} className="text-xl font-bold text-gray-600">
                    {post.userName}
                  </Link>
                </div>
                <div className="border-2 border-[#FF8989] px-2 md:px-4 rounded-md mr-1 md:mr-6">
                  <h1 className="uppercase text-xs md:text-base">
                    {post.petCategory}
                  </h1>
                </div>
              </div>
              {/* Post caption */}
              <div className=" my-3">
                <p className="text-lg">{post.caption}</p>
              </div>
              {/* Post Image */}
              <div className=" my-6 ">
                <img
                  className=" w-full h-96 object-contain rounded-lg"
                  src={post.displayURL}
                  alt=""
                />
              </div>

              <div>
                {/* Like count */}
                <div className="flex justify-between items-center">
                  <div
                    onClick={() => toggleLikedUserModal(post)}
                    className=" my-3 ml-2 flex gap-2 items-center cursor-pointer"
                  >
                    <AiFillHeart className="text-[#FF8989] text-lg" />
                    {post.likes.length}
                  </div>
                </div>
                {openLikedUserModalId === post._id && (
                  <LikedUsersModal
                    post={post}
                    onclose={() => setOpenLikedUserModalId(null)}
                  />
                )}
              </div>
              {/* like comment section */}
              <div className="flex gap-5 my-1 md:my-3">
                <button
                  onClick={() => toggleLike(post)}
                  className=" px-2 py-1 rounded-md text-gray-600 w-1/3 text-center flex items-center justify-center gap-3 text-lg group hover:bg-[#FF8989] "
                >
                  <AiOutlineHeart
                    className={` text-xl group-hover:text-white ${
                      post.likes.find((item) => item?.email === user.email) &&
                      "hidden"
                    }`}
                  />
                  <AiFillHeart
                    className={`text-[#FF8989] group-hover:text-white text-xl ${
                      post.likes.find((item) => item?.email === user.email) ||
                      "hidden"
                    }`}
                  />
                  <span className="hidden md:block group-hover:text-white">
                    {(post.likes.find((item) => item?.email === user.email) &&
                      "Unlike") ||
                      "Like"}
                  </span>
                </button>
                <button
                  onClick={() => toggleCommentsModal(post)}
                  className=" px-2 py-1 rounded-md text-gray-600 w-1/3 text-center flex items-center justify-center gap-3 text-lg hover:bg-[#FF8989] hover:text-white"
                >
                  <AiOutlineComment />{" "}
                  <span className="hidden md:block">Comment</span>
                </button>
                {/* comment modal */}
                {openCommentsModal === post._id && (
                  <CommentsModal
                    post={post}
                    onclose={() => setOpenCommentsModal(null)}
                  />
                )}
                <button className=" px-2 py-1 rounded-md text-gray-600 w-1/3 text-center flex items-center justify-center gap-3 text-lg hover:bg-[#FF8989] hover:text-white">
                  <PiShareFatThin />{" "}
                  <span className="hidden md:block">Share</span>
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1 className="text-center mt-10 text-xl text-gray-500 font-semibold">
          No posts yet
        </h1>
      )}
    </div>
  );
};

export default PostCard;
