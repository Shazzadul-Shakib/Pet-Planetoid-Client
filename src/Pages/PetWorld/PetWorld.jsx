import { Helmet } from "react-helmet-async";
import PostCard from "../../Components/PostCard/PostCard";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { AiOutlinePlusCircle } from "react-icons/ai";
import CreatePostModal from "../../Components/Modals/CreatePostModal";

const PetWorld = () => {
  const {user}=useContext(AuthContext);
  const [openModal,SetOpenModal]=useState(false);

  const toggleCreatePostModal=()=>{
    SetOpenModal(!openModal);
  }

  return (
    <div>
      {/* Helmet to change title over browser */}
      <Helmet>
        <title>Pet Planetoid | Pet world</title>
      </Helmet>
      {/* Pet world post section */}
      <section className=" h-[83vh] flex flex-col-reverse mx-2 md:flex-row md:mx-0 gap-10 justify-center  mt-4">
        {/* All post appear here */}
        <div className=" md:basis-[70%] h-full bg-white rounded-lg overflow-y-scroll">
          <PostCard />
          <PostCard />
        </div>
        {/* create post section here */}
        <div className=" rounded-lg md:block">
          {/* User info */}
          <div className="hidden md:flex items-center my-3">
            <img
              className="h-12 w-12 rounded-full mr-5 "
              src={user?.photoURL}
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
            <AiOutlinePlusCircle className=" text-6xl text-[#FF8989]" />
            <button className="text-[#FF6666] outline-none text-lg p-2 border-4 border-[#FF8989] hover:bg-[#FF8989] hover:text-white w-full rounded-full">
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