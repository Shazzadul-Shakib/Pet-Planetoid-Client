import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar/Navbar';
import Footer from '../Components/Shared/Footer/Footer';

const Main = () => {
  const location = useLocation();
  const path = location.pathname;
  const requiredPath1 = '/petworld';
  const requiredPath2 = "/shelters_rescues";
  
;
    
    return (
      <div>
        <Navbar />
        {/* An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. */}
        <Outlet></Outlet>
        <div
          className={`${
            path === requiredPath1 || path === requiredPath2 ? "hidden" : ""
          }`}
        >
          <Footer />
        </div>
      </div>
    );
};

export default Main;
