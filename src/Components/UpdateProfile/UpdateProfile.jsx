import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from 'axios';
import Swal from "sweetalert2";
import { AiOutlineCloudUpload } from "react-icons/ai";

const UpdateProfile = ({ setOpenModal, openModal }) => {
  const { user, updateUserInfo } = useContext(AuthContext);

  // Form hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.image[0]);

      const response = await axios.post(
        "https://api.imgbb.com/1/upload?key=5253c30256b114e1a0e9185fe3cf6230",
        formData
      );

      if (response.status === 200) {
        const newImageUrl = response.data.data.display_url;

        // Update user info with the newImageUrl
        await updateUserInfo(data.name, newImageUrl)
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Profile Updated Successfully",
            });
            setOpenModal(false);
          })
          .catch(() => {});
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="  fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-lg overflow-hidden flex justify-center items-center">
      <form
        className="space-y-6 w-full md:w-1/2 mx-4 bg-white rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Email box */}
        <div className=" w-2/3 mx-auto ">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-700  pt-10"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              {...register("email", { required: true })}
              type="email"
              defaultValue={user?.email}
              readOnly
              autoComplete="email"
              className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm  placeholder:text-gray-400 ring-2 ring-gray-300 focus:outline-[#FF6666] sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        {/* Name box */}
        <div className=" w-2/3 mx-auto ">
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-700  pt-1"
          >
            Name
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              {...register("name", { required: true })}
              type="text"
              defaultValue={user?.displayName}
              className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm  placeholder:text-gray-400 ring-2 ring-gray-300 focus:outline-[#FF6666] sm:text-sm sm:leading-6"
            />
            {/* Error message will be shown here */}
            {errors.name && (
              <span className=" text-red-600">Name is required*</span>
            )}
          </div>
        </div>
        {/* PhotoUrl box */}
        <div className=" w-2/3 mx-auto ">
          <label
            htmlFor="image"
            className="block text-sm font-medium leading-6 text-gray-700  pt-1"
          >
            Upload photo
          </label>
          <div className="mt-2">
            <label
              htmlFor="image"
              className="w-full rounded-md border-0 p-3 text-gray-900 shadow-sm  placeholder:text-gray-400 ring-2 ring-gray-300 focus:outline-[#FF6666] sm:text-sm sm:leading-6 flex justify-center items-center"
            >
              <AiOutlineCloudUpload className="text-3xl text-gray-700 pr-2" />
              <span className="text-gray-600">Upload Image</span>
            </label>
            <input
              id="image"
              name="image"
              {...register("image", { required: true })}
              accept="image/*"
              type="file"
              className="w-full rounded-md border-0 p-3 text-gray-900 shadow-sm  placeholder:text-gray-400 ring-2 ring-gray-300 focus:outline-[#FF6666] sm:text-sm sm:leading-6 hidden"
            />
            {/* Error message will be shown here */}
            {errors.image && (
              <span className=" text-red-600">Image is required*</span>
            )}
          </div>
        </div>

        <div className=" flex justify-center items-center pb-5">
          <input
            className=" px-4 py-2 mr-4 my-4 rounded-lg font-bold text-white bg-green-600 "
            type="submit"
            value="Update"
          />
          <button
            onClick={() => setOpenModal(false)}
            className=" px-4 py-2 ml-4 my-4 rounded-lg font-bold text-white bg-red-600 "
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;