import { Helmet } from 'react-helmet-async';
import forgetPasswordImg from "../../assets/Forgot password.svg";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";

const ForgetPassword = () => {
    // Form hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

const onSubmit = async (data) => {
    console.log(data)
}
    return (
      <div>
        {/* Helmet to change title over browser */}
        <Helmet>
          <title>Pet Planetoid | Forget password</title>
        </Helmet>

        {/* login container */}
        <div className=" md:flex md:max-w-screen-xl mx-auto  my-16">
          {/* Illustration part */}
          <div className=" md:w-1/2">
            <img src={forgetPasswordImg} alt="" className=" " />
          </div>
          {/* Login form part */}
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 mb-6 text-center text-2xl font-bold leading-9 tracking-tight text-[#FF6666]">
                Forget Password?
              </h2>
              <p className=' font-semibold text-gray-800'>Don't Worry! Enter your email to reset your password</p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      {...register("email", { required: true })}
                      type="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm  placeholder:text-gray-400 ring-2 ring-gray-300 focus:outline-[#FF6666] sm:text-sm sm:leading-6"
                    />
                    {/* Error message will be shown here */}
                    {errors.email && (
                      <span className=" text-red-600">Email is required*</span>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="submit"
                    value="Reset Password"
                    className="flex w-full justify-center rounded-md bg-[#FF6666] px-3 py-3 text-xl font-semibold leading-6 text-white shadow-sm border-2 border-[#FF6666] hover:bg-white hover:text-[#FF6666] "
                  />
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                <Link
                  to="/login"
                  className="font-semibold leading-6 text-[#FF6666] flex justify-center items-center"
                >
                    <FaArrowLeftLong className=' mr-3'/>
                  Back to login page
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ForgetPassword;