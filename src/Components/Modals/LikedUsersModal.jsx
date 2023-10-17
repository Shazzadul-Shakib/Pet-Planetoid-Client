import { AiFillHeart } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import profile from "../../assets/profile.jpg";

const LikedUsersModal = ({ post, onclose }) => {
  const outsideClick = (event) => {
    if (event.target.id === "container") {
      onclose();
    }
  };

  return (
    <div
      onClick={outsideClick}
      id="container"
      className=" fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-lg overflow-hidden flex justify-center items-center "
    >
      {/* Modal body */}
      <div className=" bg-white p-6 mx-3 w-full md:mx-0 md:w-1/3 rounded-md">
        <div className=" flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <AiFillHeart className=" text-2xl text-[#FF8989]" />
            <span className="text-md text-gray-600">{post.likes.length}</span>
          </div>
          <RxCrossCircled
            onClick={onclose}
            className=" text-3xl text-gray-500"
          />
        </div>
        <hr className="border-t-2 mb-4" />
        <div>
          {post.likes?.length > 0 ? (
            post.likes.map((likedUser) => (
              <div key={likedUser.uid} className="flex items-center mb-4">
                <img
                  className="h-10 w-10 rounded-full mr-2"
                  src={likedUser.photoURL || profile}
                  alt=""
                />
                <h1 className="text-lg font-semibold text-gray-600">
                  {likedUser.displayName}
                </h1>
              </div>
            ))
          ) : (
            <h1 className="text-lg text-gray-600 text-center">
              No one has liked the post yet
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default LikedUsersModal;
