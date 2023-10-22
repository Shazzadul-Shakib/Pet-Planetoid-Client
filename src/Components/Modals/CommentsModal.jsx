import { RxCrossCircled } from "react-icons/rx";
import { IoSend } from "react-icons/io5";
import profile from "../../assets/profile.jpg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";

const CommentsModal = ({ post, onclose }) => {
  const { user } = useContext(AuthContext);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  }

  const outsideClick = (e) => {
    if (e.target.id === "container") {
      onclose();
    }
  };

  return (
    <div
      onClick={outsideClick}
      id="container"
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-lg overflow-hidden "
    >
      <div className="bg-white p-6 mx-3 mt-14 w-full md:mx-0 md:w-1/3 rounded-md relative">
        <div className=" flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <span className="text-md text-gray-600">0 Comments</span>
          </div>
          <RxCrossCircled
            onClick={onclose}
            className=" text-3xl text-gray-500"
          />
        </div>
        <hr className="border-t-2 mb-4" />

        {/* comment section */}
        <div className=" max-h-[45vh] overflow-y-scroll">
          {/* Comments */}
          <div className="flex items-center gap-3 mb-4 ">
            <div>
              <img
                className="h-10 w-10 rounded-full mr-2"
                src={profile}
                alt=""
              />
            </div>
            <div className=" bg-[#ffe3e3] p-2 rounded-lg">
              <h1 className="text-lg font-semibold text-gray-600">
                Shazzadul Islam Shakib
              </h1>
              <p>Here is the comment of the post be showen.</p>
            </div>
          </div>
        </div>
        <hr className="border-t-2 mb-8 mt-4" />
        {/* write comment here */}
        <div className=" flex items-center absolute bottom-2 w-[90%] mt-10">
          <div>
            <img
              className="h-10 w-10 rounded-full mr-2"
              src={user?.photoURL || profile}
              alt=""
            />
          </div>
          <div className=" flex-1 w-full px-4 relative">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                name="comment"
                {...register("comment", { required: true })}
                placeholder="Write your comment..."
                className=" bg-[#ffe3e3] w-full p-2 rounded-lg focus:outline-none focus:ring-0"
              />
              <button type="submit" className="cursor-pointer">
                <IoSend className="absolute top-3 right-7 text-gray-600 text-lg" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsModal;
