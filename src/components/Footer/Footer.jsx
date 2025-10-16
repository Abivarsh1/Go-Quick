import { CiDeliveryTruck, CiTimer } from "react-icons/ci"
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa"
import { Link } from "react-router"


const Footer = () => {


    return (
        <div className="pt-[40px] pb-[40px] flex items-center justify-center">


            <div className="lg:container mx-auto">

                {/* {footer top wrapper} */}

                <div className=" footer_top grid grid-cols-4">


                    <div className="footer_wrapper">
                        <h4 className="footer_title text-[1.1rem] text-[#1b1b1b] font-medium capitalize mb-4">
                            Download our App
                        </h4>
                        <div className="flex flex-col space-y-4 mb-4">

                            <Link className="max-w-[185px] w-full h-[65px] bg-[#081c27] rounded-lg
                        flex items-center justify-center" to={'#'}><img src="src/assets/icons/apple.png" />
                            </Link>
                            <Link className="max-w-[185px] w-full h-[65px] bg-[#081c27] rounded-lg
                        flex items-center justify-center" to={'#'}><img src="src/assets/icons/google.png" />
                            </Link>

                        </div>

                        <div>
                            <h5 className="text-sm text-[#1b1b1b] font-normal mb-2">Follow us on social media</h5>
                            <div className="flex items-center gap-3">
                                <Link><FaFacebook size='1.25rem' color="#1b1b1b" /></Link>
                                <Link><FaInstagram size='1.25rem' color="#1b1b1b" /></Link>
                                <Link><FaPinterest size='1.25rem' color="#1b1b1b" /></Link>
                                <Link><FaYoutube size='1.25rem' color="#1b1b1b" /></Link>
                                <Link><FaTwitter size='1.25rem' color="#1b1b1b" /></Link>
                            </div>
                        </div>

                    </div>

                    <div className="footer_wrapper">
                        <h4 className="footer_title text-[1.1rem] text-[#1b1b1b] font-medium capitalize mb-4">
                            Download our App
                        </h4>
                        <div className="flex flex-col space-y-4 mb-4">


                            <h4 className="text-2xl text-[#1b1b1b] font-medium">+1 666 8888</h4>
                            <h4 className="text-2xl text-[#1b1b1b] font-medium">+1 666 8888</h4>
                            <p className="text-2xl text-[#05a845] font-medium border-b-0.5">contact@gmail.com</p>

                        </div>
                    </div>

                    <div className="footer_wrapper">
                        <h4 className="footer_title text-[1.1rem] text-[#1b1b1b] font-medium capitalize mb-4">
                            Customer               </h4>
                        <div className="flex flex-col space-y-4 mb-4">
                            <Link className="text-sm text-[#1b1b1b] font-normal capitalize ">My account</Link>
                            <Link className="text-sm text-[#1b1b1b] font-normal capitalize">My orders</Link>
                            <Link className="text-sm text-[#1b1b1b] font-normal capitalize ">Return orders</Link>
                            <Link className="text-sm text-[#1b1b1b] font-normal capitalize ">WishList</Link>

                        </div>
                    </div>

                    <div className="footer_wrapper">
                        <h4 className="footer_title text-[1.1rem] text-[#1b1b1b] font-medium capitalize mb-4">
                            Information         </h4>
                        <div className="flex flex-col space-y-4 mb-4">
                            <Link className="text-sm text-[#1b1b1b] font-normal capitalize ">About us</Link>
                            <Link className="text-sm text-[#1b1b1b] font-normal capitalize">Contact us</Link>
                            <Link className="text-sm text-[#1b1b1b] font-normal capitalize ">Shipping & return</Link>
                            <Link className="text-sm text-[#1b1b1b] font-normal capitalize ">FAQ</Link>
                            <Link className="text-sm text-[#1b1b1b] font-normal capitalize ">privacy policy</Link>
                            <Link className="text-sm text-[#1b1b1b] font-normal capitalize ">Terms & conditions</Link>

                        </div>
                    </div>

                </div>

                {/* footer middle */}

                <div className="flex item-center justify-center gap-10 pt-8 pb-8 w-full border-t-[1px] border-b-[1px] border-[#dfdada]">
                    <div className="flex items-center max-w-[500px] justify-between">
                        <span className="flex items-center gap-3 text-base text-[#4d4d4d] font-serif
                                            capitalize"><CiDeliveryTruck size='1.5rem' color="#fe8f17 " />Delivery from 1-2 hours</span>
                        <span className="flex items-center gap-3 text-base text-[#4d4d4d] font-serif
                                        capitalize"><CiDeliveryTruck size='1.5rem' color="#fe8f17" />Quality Assurance</span>

                        <span className="flex items-center gap-3 text-base text-[#4d4d4d] font-serif
                                        capitalize"><CiTimer size='1.5rem' color="#fe8f17" />24/7 delivery service</span>

                    </div>


                </div>


                {/* {footer bottom} */}

                <div className="flex items-center justify-between w-full pt-10 ">

                    <div>

                        <p className="text-sm text-[#1b1b1b] font-normal leading-5">copyright &copy; GoQucik, All Rights Reserved</p>
                    </div>

                    <div className="flex items-center gap-4">

                        <img className="w-8 h-8 object-cover" src="/src/assets/icons/visa.png" alt="visa" />
                        <img className="w-8 h-8 object-cover" src="/src/assets/icons/master card.png" alt="master card" />
                        <img className="w-8 h-8 object-cover" src="/src/assets/icons/american-express.png" alt="american-express" />
                        

                    </div>



                </div>

            </div>

        </div>
    )
}

export default Footer