import { Link } from 'react-router-dom';
import logo from '../../../../src/assets/logo.svg'

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
    {
        name:'Login',
        path:'/login'
    },
]

const Navbar = () => {


    return (
      <>
        {/* Upper section */}
        <div className=" flex justify-center items-center">
          {/* logo */}
          <img src={logo} alt="logo" className=" h-16" />
        </div>
        {/* Lower section */}
        <div className=" bg-[#FF6666] text-white p-2">
          {/* Nav items */}
          <div>
            <ul className=" hidden md:flex justify-evenly">
              {navItems.map((navItem) => (
                <li className=" py-2 hover:bg-white hover:text-[#FF6666] md:py-2 px-4 rounded-md">
                  <Link to={navItem.path}>{navItem.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
};

export default Navbar;