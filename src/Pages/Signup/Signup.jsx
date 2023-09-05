import { Helmet } from "react-helmet-async";
import signup from "../../assets/signup.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // from is if there is any state that should go or it willredirect to home page
  const from = location.state?.from?.pathname || "/";

  const { createUser, updateUserName, googleSignin } = useContext(AuthContext);

  // Form hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await createUser(data.email, data.password)
      .then((result) => {
        updateUserName(data.name)
          .then(() => {})
          .catch(() => {});
        console.log(result);
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  // // Handle google sign in
  const handleGoogleSignin = () => {
    googleSignin()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {});
  };

  return (
    <div>
      {/* Helmet to change title over browser */}
      <Helmet>
        <title>Pet Planetoid | Signup</title>
      </Helmet>

      {/* login container */}
      <div className=" md:flex md:max-w-screen-xl mx-auto  my-16">
        {/* Illustration part */}
        <div className=" md:w-1/2">
          <img src={signup} alt="" className=" " />
        </div>
        {/* Signup form part */}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#FF6666]">
              Create A New Account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    {...register("name", { required: true })}
                    type="text"
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm  placeholder:text-gray-400 ring-2 ring-gray-300 focus:outline-[#FF6666] sm:text-sm sm:leading-6"
                  />
                  {/* Error message will be shown here */}
                  {errors.name && (
                    <span className=" text-red-600">Name is required*</span>
                  )}
                </div>
              </div>
              {/* Email */}
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
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm  placeholder:text-gray-400 ring-2 ring-gray-300 focus:outline-[#FF6666] sm:text-sm sm:leading-6"
                  />
                  {/* Error message will be shown here */}
                  {errors.email && (
                    <span className=" text-red-600">Email is required*</span>
                  )}
                </div>
              </div>
              {/* Password */}
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  {/* <div className="text-sm">
                      <a href="#" className="font-semibold text-[#FF6666]">
                        Forgot password?
                      </a>
                    </div> */}
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    {...register("password", { required: true })}
                    type="password"
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm  placeholder:text-gray-400 ring-2 ring-gray-300 focus:outline-[#FF6666] sm:text-sm sm:leading-6"
                  />
                  {/* Error message will be shown here */}
                  {errors.password && (
                    <span className=" text-red-600">Password is required*</span>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="submit"
                  value="Signup"
                  className="flex w-full justify-center rounded-md bg-[#FF6666] px-3 py-3 text-xl font-semibold leading-6 text-white shadow-sm border-2 border-[#FF6666] hover:bg-white hover:text-[#FF6666] "
                />
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?
              <Link
                to="/login"
                className="font-semibold leading-6 text-[#FF6666]"
              >
                Login here
              </Link>
            </p>
            <button
              onClick={() => handleGoogleSignin()}
              className="mt-6 flex w-full justify-center rounded-md bg-white border-2 border-[#FF6666] px-3 py-3 text-xl font-semibold leading-6 text-[#FF6666] shadow-sm hover:bg-[#FF6666] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <FcGoogle className=" mr-3 text-2xl" /> Continue with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
