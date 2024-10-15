
import { useEffect, useState } from "react"
import logo from "../assets/img/Logo.svg"
import Nline from "../assets/img/nline.svg"
import ArrowDown from "../assets/img/arrowDown.svg"
import BlurHeader from "../assets/img/blur_header.svg"
import EatPizzaMobile from "../assets/img/eatPizzaMobile.svg"
const Header = () => {
    const [clickHam, setClickHam] = useState<boolean>(false)
    useEffect(() => {
        const a = document.querySelector("body")
        if (clickHam) {
            a!.style.overflowY = "hidden"
        } else {
            a!.style.overflowY = "scroll"
        }
        const handleCloseMobileMenu = () => {
            setClickHam(false)
        }
        window.addEventListener("click", handleCloseMobileMenu)
        window.removeEventListener("click", handleCloseMobileMenu)
    }, [clickHam])
    return (
        <div className="relative">
            <header className="max-w-[1300px] mx-auto px-6 sm:px-10 desktop:px-0  flex justify-between pt-6 mdd:pt-[32px]">
                <div className="relative">
                    <img loading="lazy" src={logo} className="w-[97px] h-[62px] sm:w-full sm:h-full" alt="" />
                    <img loading="lazy" className="hidden mdd:block absolute top-[65px] left-[150px]" src={ArrowDown} alt="" />
                </div>
                <div className="flex items-start mdd:pt-1 h-[48px] gap-[45px] pt-[9px] xl:gap-[96px] text-lg">
                    <nav className="self-center hidden lg:flex gap-[50px] pt-[1px]">
                        <a href="#todaySpecial" className="text-nowrap">Today special offers</a>
                        <a href="#whyfoodhub" className="text-nowrap">Why FoodHut</a>
                        <a href="#menu" className="text-nowrap">Our Menu</a>
                        <a href="#popular" className="text-nowrap">Our Popular food</a>
                    </nav>
                    <button className=" hidden lg:flex items-center rounded-full h-[46px] px-5 text-white bg-red_1 text-nowrap hover:bg-red-700" >Download App</button>

                    <div onClick={() => setClickHam(clickHam => !clickHam)} className={`${clickHam ? "fixed right-7 hiddenscroll" : "p-3 z-50 "} p-3 z-50  flex lg:hidden flex-col gap-2 group cursor-pointer  `}>
                        <div className={`${clickHam ? "bg-white rotate-45  duration-500 scale-125 translate-y-3 " : " bg-black rotate-0  duration-500"} h-[5px] w-8 sm:w-10  rounded-full  `}></div>
                        {!clickHam && <div className={`h-[5px] w-8 sm:w-10 bg-black rounded-full `}></div>}
                        <div className={`${clickHam ? "bg-white -rotate-45  duration-500 scale-125 " : "bg-black rotate-0  duration-500"} h-[5px] w-8 sm:w-10  rounded-full `}></div>
                    </div>
                </div>
            </header>
            <div className="absolute top-0 right-0 -z-20">
                <img loading="lazy" src={BlurHeader} alt="" />
            </div>
            <div className="hidden mdd:block absolute top-0 -z-10 right-0">
                <img loading="lazy" src={Nline} alt="" />
            </div>
            <div className="flex mdd:hidden -z-10 w-full h-full transition-transform -translate-y-20 ">
                <img loading="lazy" src={EatPizzaMobile} className="w-full -z-10  " alt="" />
            </div>


            {clickHam && <div onClick={() => setClickHam(false)} className="flex lg:hidden fixed top-0 left-0 w-full z-40 min-h-screen bg-black bg-opacity-40 ">
                <ul className="bg-black  flex flex-col w-full h-full text-white  py-28">

                    <a onClick={() => setClickHam(false)} href="#todaySpecial" className="p-6  text-2xl  border-y hover:bg-gray-700 w-full">Today special offers</a>


                    <a onClick={() => setClickHam(false)} href="#whyfoodhub" className="p-6 text-2xl border-y hover:bg-gray-700 w-full ">Why FoodHut</a>


                    <a onClick={() => setClickHam(false)} href="#menu" className="p-6  text-2xl border-y hover:bg-gray-700 w-full">Our Menu</a>


                    <a onClick={() => setClickHam(false)} href="#popular" className="p-6 text-2xl border-y hover:bg-gray-700 w-full ">Our Popular Food</a>

                </ul>
            </div>}
        </div>

    );
};

export default Header;
