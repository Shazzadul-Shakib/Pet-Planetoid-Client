import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../../src/assets/logo.svg";
import profile from "../../../assets/profile.jpg";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import UpdateProfile from "../../UpdateProfile/UpdateProfile";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { FaEdit } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import Swal from "sweetalert2";
import usseOutsideClick from "../../../Hooks/useOutsideClick";
import useOutsideClick from "../../../Hooks/useOutsideClick";

const navItems = [
  {
    id: "1",
    name: "Home",
    path: "/",
  },
  {
    id: "2",
    name: "Pet World",
    path: "/petworld",
  },
  {
    id: "3",
    name: "Shelters & Rescues",
    path: "/shelters&rescues",
  },
];

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  // Navigate after logout
  const navigate = useNavigate();
  const location = useLocation();
  // from is if there is any state that should go or it willredirect to home page
  const from = location.state?.from?.pathname || "/";

  // Profilecard toggle state
  const [showProfileCard, setShowProfileCard,profileCardRef] = useOutsideClick(false);
  const toggleProfileCard = () => {
    setShowProfileCard(!showProfileCard);
  };

  // Handle logout
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logout Successfully",
        });
        setShowProfileCard(!showProfileCard);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Toggle hamburger menu
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  // Open modal
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="sticky top-0 z-50">
      {openModal && (
        <UpdateProfile
          className="overflow-hidden"
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
      )}
      {/* Upper section */}
      <div className=" px-8 flex justify-between items-center md:justify-center bg-white ">
        {/* logo */}
        <img src={logo} alt="logo" className=" h-11" />
        {openMenu ? (
          <RxCross2 onClick={toggleMenu} className="md:hidden text-4xl" />
        ) : (
          <RxHamburgerMenu
            onClick={toggleMenu}
            className="md:hidden text-4xl"
          />
        )}
      </div>
      {/* Lower section */}

      <div className=" bg-[#FF6666] text-white py-2 relative">
        {/* Nav items */}
        <div>
          <ul
            className={` md:flex md:items-center justify-evenly ${
              openMenu ? "block" : "hidden"
            }`}
          >
            {navItems.map((navItem) => (
              <li
                key={navItem.id}
                className=" py-2 text-lg hover:bg-white hover:text-[#FF6666] md:py-1 px-4 rounded-md"
              >
                <Link to={navItem.path}>{navItem.name}</Link>
              </li>
            ))}
            {user ? (
              <li>
                <div ref={profileCardRef}>
                  <img
                    className=" border-2 border-white h-9 w-9 ml-4 my-3 md:ml-0 md:my-0 rounded-full"
                    src={user.photoURL || profile}
                    alt="DP"
                    onClick={toggleProfileCard}
                  />
                  {/* Profile card */}
                  {showProfileCard && (
                    <div className=" absolute top-full z-10 right-3 flex flex-col items-center bg-[#FF8989] text-white  h-[300px] w-[300px] rounded-lg ">
                      <div>
                        {/* Image div */}
                        <div className=" flex justify-center">
                          <img
                            className=" my-6 h-24 w-24 rounded-full"
                            src={user.photoURL || profile}
                            alt="DP"
                          />
                        </div>
                        <div className=" text-center">
                          <h3 className=" text-xl">{user?.displayName}</h3>
                          <h4 className=" text-sm">{user?.email}</h4>
                        </div>
                        <div className="mt-10 flex gap-4">
                          <button
                            onClick={() => setOpenModal(true)}
                            className="py-1 px-2 text-md border-2 border-white rounded-md flex justify-center items-center gap-2"
                          >
                            <FaEdit /> Edit Profile
                          </button>
                          <button
                            className=" py-1 px-2 text-md border-2 border-white rounded-md flex justify-center items-center gap-2"
                            onClick={handleLogout}
                          >
                            <BiLogOutCircle />
                            Logout
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            ) : (
              <li className=" py-2 text-lg hover:bg-white hover:text-[#FF6666] md:py-2 px-4 rounded-md">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
