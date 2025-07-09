import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext';
import NavbarDash from './NavbarDash';
import SideMenu from './SideMenu';


const DashboardLayout = ({children, activeMenu }) => {
  const {user} = useContext(UserContext);
  console.log("user in DashboardLayout:", user);


  return (
    <div className="">
        <NavbarDash activeMenu={activeMenu} />

        {user && (
            <div className="flex">
                <div className="max-[1000px]:hidden">
                    <SideMenu activeMenu={activeMenu} />
                </div>

                <div className="grow mx-5">{children}</div>
            </div>
        )}
    </div>
  );
};
 
export default DashboardLayout;