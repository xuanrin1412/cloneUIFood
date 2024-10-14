
import logo from "../assets/img/Logo.svg"
import BlurHeader from "../assets/img/blur_header.svg"
import ArrowDown from "../assets/img/arrowDown.svg"
import Nline from "../assets/img/nline.svg"
import EatPizzaMobile from "../assets/img/eatPizzaMobile.svg"
import { useState } from "react"
const Header = () => {


    const [clickHam, setClickHam] = useState<boolean>(false)
    return (
        <div className="relative ">
            <header className="max-w-[1300px] mx-auto px-6 sm:px-10 desktop:px-0  flex justify-between pt-6 mdd:pt-[32px]">
                <div className="relative">
                    <img src={logo} className="w-[97px] h-[62px] sm:w-full sm:h-full" alt="" />
                    <img className="hidden mdd:block absolute top-[65px] left-[150px]" src={ArrowDown} alt="" />
                </div>
                <div className="flex items-start mdd:pt-1 h-[48px] gap-[45px] pt-[9px] xl:gap-[96px] text-lg">
                    <nav className="self-center hidden lg:flex gap-[50px] pt-[1px]">
                        <a href="" className="text-nowrap">Today special offers</a>
                        <a href="" className="text-nowrap">Why FoodHut</a>
                        <a href="" className="text-nowrap">Our Menu</a>
                        <a href="" className="text-nowrap">Our Popular food</a>
                    </nav>
                    <button className=" hidden lg:flex items-center rounded-full h-[46px] px-5 text-white bg-red_1 text-nowrap" >Download App</button>

                    <div onClick={() => setClickHam(clickHam => !clickHam)} className="p-3 z-50  flex lg:hidden flex-col gap-2 group cursor-pointer  ">
                        <div className={`${clickHam ? "rotate-45  duration-500 scale-125 translate-y-3 " : "rotate-0  duration-500"} h-[5px] w-8 sm:w-10 bg-black rounded-full group-hover:bg-gray-500`}></div>
                        {!clickHam && <div className={`h-[5px] w-8 sm:w-10 bg-black rounded-full group-hover:bg-gray-500`}></div>}
                        <div className={`${clickHam ? "-rotate-45  duration-500 scale-125 " : "rotate-0  duration-500"} h-[5px] w-8 sm:w-10 bg-black rounded-full group-hover:bg-gray-500`}></div>
                    </div>
                </div>
            </header>
            <div className="absolute top-0 right-0 -z-20">
                <img src={BlurHeader} alt="" />
            </div>
            <div className="hidden mdd:block absolute top-0 -z-10 right-0">
                <img src={Nline} alt="" />
            </div>
            <div className="flex mdd:hidden -z-10 w-full h-full transition-transform -translate-y-20 ">
                <img src={EatPizzaMobile} className="w-full -z-10  " alt="" />
            </div>






        </div>

    );
};

export default Header;
