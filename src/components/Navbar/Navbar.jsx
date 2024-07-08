import {  FiMenu } from "react-icons/fi";
import { MdRestaurantMenu } from "react-icons/md";
import Link from "../Link/Link";
import { useState } from "react";



const Navbar = () => {
     const [open, setOpen] =useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About Us' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact Us' },
        { id: 5, path: '/dashboard', name: 'Dashboard' }
      ];

    return (
        <nav className=" text-red-500 bg-yellow-400 p-6">
            <div className=" md:hidden text-2xl" onClick={()=>setOpen(!open)}> 
                {
                    open===true ? <MdRestaurantMenu></MdRestaurantMenu>: 'close'
                }
            < FiMenu className="" > </ FiMenu>
            </div>
            <ul className={`md:flex absolute md:static duration-1000
                ${open? 'top-16': '-top-60'}
                bg-yellow-400 px-6 shadow-lg`}>
            {
                routes.map(route=> <Link key={route.id} route={route} > </Link> )
            }
            </ul>
            
        </nav>
    );
};

export default Navbar;