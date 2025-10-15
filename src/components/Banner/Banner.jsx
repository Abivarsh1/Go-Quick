import { CiSearch } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";

const Banner = () => {
    return (
        <div className="flex items-center w-full min-h-[602px] h-full banner_container">

            <div className="lg:container mx-auto">

                <div className="banner_content">

                    <h3 className="text-[66px] max-w-[528px] 
                    font-black text-[#1b1b1b] w-full capitalize leading-16 mb-5">we delivered to your doorstep</h3>

                    <form action="#" className="max-w-[600px] w-full h-[62px] relative bg-white rounded-lg mb-6">
                        <input type="text" placeholder="Search Products" className="w-full h-full pl-4 bg-none"/>
                        <button className="absolute top-[50%] cursor-pointer right-5 -translate-y-1/2 bg-[#05a845] 
                        w-[45px] h-[54px] flex items-center justify-center rounded-lg "><CiSearch size='2rem' color="white" /></button>
                    </form>
                    <div className="flex items-center max-w-[500px] justify-between">
                        <span className="flex items-center gap-3 text-base text-[#4d4d4d] font-serif
                        capitalize"><CiDeliveryTruck size='1.5rem' color="#fe8f17 " />Delivery from 1-2 hours</span>
                        <span className="flex items-center gap-3 text-base text-[#4d4d4d] font-serif
                        capitalize"><CiDeliveryTruck size='1.5rem' color="#fe8f17"/>Quality Assurance</span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;