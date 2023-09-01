import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";

const UpdateProfile = ({ setOpenModal }) => {
  const { user } = useContext(AuthContext);

  // Form hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className=" fixed inset-0 z-50 bg-slate-600 bg-opacity-40 backdrop-blur-md">
      <form
        className="space-y-6 w-1/2 mx-auto mt-44 bg-white rounded-lg"
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
          </div>
        </div>
        {/* PhotoUrl box */}
        <div className=" w-2/3 mx-auto ">
          <label
            htmlFor="photo"
            className="block text-sm font-medium leading-6 text-gray-700  pt-1"
          >
            Upload photo
          </label>
          <div className="mt-2">
            <input
              id="photo"
              name="photo"
              {...register("photo", { required: true })}
              type="file"
              className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm  placeholder:text-gray-400 ring-2 ring-gray-300 focus:outline-[#FF6666] sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className=" flex justify-center items-center pb-5">
          <input
            className=" px-4 py-2 mr-4 my-4 rounded-lg font-bold text-white bg-green-600 "
            type="button"
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