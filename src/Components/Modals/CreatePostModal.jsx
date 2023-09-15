import { RxCrossCircled } from "react-icons/rx";
import { useForm, Controller } from "react-hook-form";

const CreatePostModal = ({ onClose }) => {
  console.log(onclose);
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    onClose();
  };
  return (
    <div className=" fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-lg overflow-hidden flex justify-center items-center ">
      {/* Modal body */}
      <div className=" bg-white p-6 mx-3 md:mx-0 md:w-1/3 rounded-xl">
        <div className=" relative mb-4">
          <h1 className=" text-center text-2xl font-bold text-[#FF6666]">
            Create post
          </h1>
          <RxCrossCircled
            onClick={() => onClose()}
            className=" absolute top-0 right-0 text-3xl text-gray-600"
          />
        </div>
        <hr className=" mb-8 border-t-2 border-gray-300" />
        {/*form body  */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" mt-6">
            <Controller
              name="petCategory"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <select
                  className=" w-full p-2 border-2 outline-none rounded-lg border-[#FF8989] text-center text-md font-semibold text-gray-600"
                  {...field}
                  required
                >
                  <option value="">SELECT PET CATEGORY</option>
                  <option value="cat">CAT</option>
                  <option value="dog">DOG</option>
                  <option value="bird">BIRD</option>
                </select>
              )}
            />
          </div>
          <div className=" mt-6">
            <textarea
              className=" w-full resize-none p-2 border-2 outline-none rounded-lg border-[#FF8989]"
              name="caption"
              {...register("caption")}
              id=""
              cols="30"
              rows="10"
              placeholder="Write your post here"
            ></textarea>
          </div>
          <div className=" mt-6">
            <input
              name="image"
              {...register("image", { required: true })}
              className=" w-full p-2 border-2 outline-none rounded-lg border-[#FF8989] text-lg font-semibold text-gray-600"
              type="file"
            />
            {errors.image?.type === "required" && (
              <span className=" text-red-500">This field required*</span>
            )}
          </div>
          <div className=" mt-6">
            <input
              className="p-2 bg-[#FF6666] text-white font-bold text-lg rounded-xl w-full"
              type="submit"
              value="POST"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostModal;
