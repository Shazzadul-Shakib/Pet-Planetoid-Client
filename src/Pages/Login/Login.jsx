import { Helmet } from "react-helmet-async";
import login from '../../assets/Login.svg'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  // Form hook 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    reset();
    console.log(data);
  };


    return (
      <div>
        {/* Helmet to change title over browser */}
        <Helmet>
          <title>Pet Planetoid | Login</title>
        </Helmet>

        {/* login container */}
        <div className=" md:flex md:max-w-screen-xl mx-auto  my-16">
          {/* Illustration part */}
          <div className=" md:w-1/2">
            <img src={login} alt="" className=" " />
          </div>
          {/* Login form part */}
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#FF6666]">
                Log in to your account
              </h2>
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
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm  placeholder:text-gray-400 ring-2 ring-gra focus:outline-[#FF6666] sm:text-sm sm:leading-6"
                    />
                    {/* Error message will be shown here */}
                    {errors.email && (
                      <span className=" text-red-600">Email is required*</span>
                    )}
                  </div>
                </div>

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
                      <span className=" text-red-600">
                        Password is required*
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="submit"
                    value="Login"
                    className="flex w-full justify-center rounded-md bg-[#FF6666] px-3 py-3 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-white hover:text-[#FF6666] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  />
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?
                <Link
                  to="/signup"
                  className="font-semibold leading-6 text-[#FF6666]"
                >
                  Register here
                </Link>
              </p>
              <button className="mt-6 flex w-full justify-center rounded-md bg-white border-2 border-[#FF6666] px-3 py-3 text-xl font-semibold leading-6 text-[#FF6666] shadow-sm hover:bg-[#FF6666] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <FcGoogle className=" mr-3 text-2xl" /> Continue with google
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;