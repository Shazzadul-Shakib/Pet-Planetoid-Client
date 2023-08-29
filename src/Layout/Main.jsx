import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            {/* An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. */}
            <Outlet></Outlet> 
        </div>
    );
};

export default Main;
// {
//   navItems.map((navItem) => (
//     <li>
//       <Link to={navItem.path}>{navItem.name}</Link>
//     </li>
//   ));
// }