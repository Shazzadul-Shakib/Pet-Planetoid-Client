import { Helmet } from "react-helmet-async";
import PostCard from "../../Components/PostCard/PostCard";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { AiOutlinePlusCircle } from "react-icons/ai";
import CreatePostModal from "../../Components/Modals/CreatePostModal";
import profile from "../../assets/profile.jpg";

const PetWorld = () => {
  const { user } = useContext(AuthContext);
  const [openModal, SetOpenModal] = useState(false);

  const toggleCreatePostModal = () => {
    SetOpenModal(!openModal);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Helmet to change title over browser */}
      <Helmet>
        <title>Pet Planetoid | Pet world</title>
      </Helmet>
      {/* Pet world post section */}
      <section className="  h-[81vh] flex justify-between flex-col-reverse  md:flex-row md:mx-0  md:gap-6 mt-4">
        {/* All post appear here */}
        <div className=" md:basis-[67%] h-full bg-white rounded-lg overflow-y-scroll">
          <PostCard />
        </div>
        {/* create post section here */}
        <div className=" md:basis-[30%] rounded-lg md:block md:px-5">
          {/* User info */}
          <div className="hidden md:flex items-center my-3">
            <img
              className="h-12 w-12 rounded-full mr-5 "
              src={user?.photoURL || profile}
              alt=""
            />
            <h1 className="text-xl font-bold text-gray-600">
              {user?.displayName}
            </h1>
          </div>
          {/* Create post button */}
          <div
            onClick={toggleCreatePostModal}
            className="flex justify-center items-center mx-5 md:mx-0"
          >
            <AiOutlinePlusCircle className=" text-5xl text-[#FF8989]" />
            <button className="text-[#FF6666] outline-none text-lg p-1 border-4 border-[#FF8989] hover:bg-[#FF8989] hover:text-white w-full rounded-full">
              Create a post
            </button>
          </div>
        </div>
      </section>
      {openModal && <CreatePostModal onClose={toggleCreatePostModal} />}
    </div>
  );
};

export default PetWorld;
