import { Link, NavLink } from "react-router"
import { CiHeart, CiSearch } from "react-icons/ci";
import { RiMenuSearchLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { LuShoppingCart, LuUser } from "react-icons/lu";

const Navbar = () => {

    return (
        <div>

            {/* {navbar Top} */}

            <div className="w-full items-center justify-center h-[97px] border-b-[1px] rounded-2xl border-[#e2e2e4] ">
                <div className="lg:container mx-auto">
                    <div className="flex items-center justify-between">

                        {/* {logo wrapper} */}

                        <div className="logo_wrapper">
                            <Link to='/'><img className="w-[150px] h-[35px] object-cover" src="/src/assets/logo.png" alt="logo" /></Link>
                        </div>


                        {/* {middle wrapper} */}

                        <div className="middle_wrapper max-w-[620px] w-full h-[49px]">
                            <form action="#" className="max-w-[620px]
                             h-[49px] flex items-center border-[1px]
                              border-[#e2e2e4] rounded-xl p-2 gap-4 justify-center">

                                <p className="w-[35px] h-full bg-none cursor-pointer"><RiMenuSearchLine size='2rem' /></p>

                                <input type="text" className="max-w-[554px] w-full h-[49px] pl-4
                                 border-0 bg-none" placeholder="Search for product.." />

                                <button className="w-[35px] h-full bg-[#2c9635] flex 
                                items-center justify-center rounded-lg cursor-pointer" type="submit"> <CiSearch size={'1.5rem'} /></button>

                            </form>

                        </div>

                        {/* {right wrapper} */}

                        <div className="right_wrapper flex items-center gap-6 justify-center">

                            <Link to='#' className=""><LuUser size='2rem' color="black" /></Link>

                            <Link to='#' className="relative">
                                <CiHeart size='2rem' color="black" />
                                <span className="absolute -top-2.5 -right-2 block bg-[#05a845] w-[20px] 
                        h-[20px] flex items-center justify-center text-white rounded-full ">0</span>
                            </Link>

                            <Link to='#' className="relative" >
                                <LuShoppingCart size='2rem' color="black" />
                                <span className="absolute -top-2.5 -right-2 block bg-[#05a845] w-[20px] 
                        h-[20px] flex items-center justify-center text-white rounded-full ">0</span>

                            </Link>

                        </div>
                    </div>

                </div>


            </div>


            {/* {navbar bottom} */}

            <div className="w-full h-[50px] flex items-center justify-center">

                <div className="lg:container mx-auto">
                    <div className="flex items-center justify-between">


                        {/* {left wrapper} */}

                        <div className="left_wrapper flex items-center gap-[65px]">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="max-w-[169px] w-full h-[50px]
                                 bg-[#05a845] cursor-pointer flex items-center gap-4 p-4 text-white rounded-lg"><FaBars /><span className="text-base font-medium capitalize">All categories</span>
                                 </div>
                                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><a>All categories</a></li>
                                    <li><a>Meat& fish</a></li>
                                    <li><a>Cooking</a></li>
                                    <li><a>Beverages</a></li>
                                    <li><a>Home & Cleaning</a></li>
                                    <li><a>Pest Control</a></li>
                                    <li><a>Stationery</a></li>
                                </ul>
                            </div>


                            <nav className="flex items-center gap-[65px]">

                                <NavLink to='/' className="text-base text-[#1b1b20] font-medium capitalize" >Offers  </NavLink>
                                <NavLink to='#' className="text-base text-[#1b1b20] font-medium capitalize"> today's deals </NavLink>
                                <NavLink to='#' className="text-base text-[#1b1b20] font-medium capitalize"> Order Tracking </NavLink>


                            </nav>

                        </div>

                        {/* {right wrapper} */}

                        <div className="right_wrapper flex items-center ">


                            <p className="text-base text-[#1b1b20] capitalize ">Need help? <span className="lowercase text-[#05a845] border-b-[1px] border-[#05a845] cursor-pointer ">contact@gmail.com</span></p>


                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default Navbar