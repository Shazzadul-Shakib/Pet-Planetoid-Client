import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../../src/assets/logo.svg'
import profile from '../../../assets/profile.jpg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const navItems=[
    {
        name:'Home',
        path:'/'
    },
    {
        name:'Pet World',
        path:'/petworld'
    },
    {
        name:'Shelters & Rescues',
        path:'/shelters&rescues'
    },

]

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  if(user){
    console.log(user);
  }

  // Navigate after logout 
  const navigate = useNavigate();
  const location = useLocation();
  // from is if there is any state that should go or it willredirect to home page
  const from = location.state?.from?.pathname || "/";

  // Profilecard toggle state
  const [showProfileCard, setShowProfileCard]=useState(false);
  const [prevValue, setPrevValue] = useState(null);

  const toggleValue = () => {
    setPrevValue(showProfileCard); // Store the current value as the previous value
    setShowProfileCard(!showProfileCard); // Toggle the value
  };

  // Handle logout 
  const handleLogout=()=>{
    logoutUser()
    .then(()=>{
      setShowProfileCard(!showProfileCard);
      navigate(from, { replace: true });
    })
    .catch(()=>{})
  }

    return (
      <>
        {/* Upper section */}
        <div className=" flex justify-center items-center">
          {/* logo */}
          <img src={logo} alt="logo" className=" h-16" />
        </div>
        {/* Lower section */}
        <div className=" bg-[#FF6666] text-white p-2 relative">
          {/* Nav items */}
          <div>
            <ul className=" hidden md:flex justify-evenly">
              {navItems.map((navItem) => (
                <li className=" py-2 text-lg hover:bg-white hover:text-[#FF6666] md:py-2 px-4 rounded-md">
                  <Link to={navItem.path}>{navItem.name}</Link>
                </li>
              ))}
              {user ? (
                <li>
                  {user.photoURL ? (
                    <img
                      className=" h-11 rounded-full"
                      src={user.photoURL}
                      alt="DP"
                      onClick={toggleValue}
                    />
                  ) : (
                    <img
                      className=" h-11 rounded-full"
                      src={profile}
                      alt="DP"
                      onClick={toggleValue}
                    />
                  )}
                </li>
              ) : (
                // <li >
                //
                // </li>
                <li className=" py-2 text-lg hover:bg-white hover:text-[#FF6666] md:py-2 px-4 rounded-md">
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>

            {/* Profile card */}
            {showProfileCard && (
              <div className=" absolute top-full z-10 right-3 flex flex-col items-center bg-white text-[#FF6666]  h-[300px] w-[300px] rounded-lg ">
                {/* Image div */}
                <div>
                  {user?.photoURL ? (
                    <img
                      className=" my-6 h-24 rounded-full"
                      src={user.photoURL}
                      alt="DP"
                    />
                  ) : (
                    <img
                      className=" my-6 h-24 rounded-full"
                      src={profile}
                      alt="DP"
                    />
                  )}
                </div>
                <div className=" text-center">
                  <h3 className=" text-xl">{user?.displayName}</h3>
                  <h4 className=" text-sm">{user?.email}</h4>
                </div>
                <div className="mt-10">
                  <button className=" py-1 px-2 mr-4 text-md border-2 border-[#FF6666] rounded-md">
                    Edit Profile
                  </button>
                  <button
                    className=" py-1 px-2 text-md border-2 border-[#FF6666] rounded-md"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
};

export default Navbar;