import chef from "../assets/img/chef.svg"
import chefMobile from "../assets/img/chefMobile.svg"
import Phone from "../assets/img/phone.svg"
import Hour from "../assets/img/24hour.svg"
import Booking from "../assets/img/booking.svg"
const service = [
    {
        icon: Phone,
        name: "Online Order"
    },
    {
        icon: Hour,
        name: "24/7 Service"
    },

    {
        icon: Booking,
        name: "Pre-Reservation"
    },

    {
        icon: Booking,
        name: "Super Chef"
    },
    {
        icon: Booking,
        name: "Clean Kitchen"
    },
    {
        icon: Booking,
        name: "Oragonized Foodhut Place"
    },
]
export const Chef = () => {
    return <div id="whyfoodhub" className="relative flex flex-col mdd:flex-row  mdd:items-center ">
        <div className="relative transition-transform -translate-y-[15%]  xs:-translate-y-[18%] sm:-translate-y-[20%]  md:-translate-y-[10%] -z-10">
            <img src={chef} className=" hidden md:block w-[70%] h-[70%] lg:w-[80%] lg:h-[80%] desktop:w-full desktop:h-full object-cover" alt="" />
            <img src={chefMobile} className="md:hidden -mt-10 block w-[100%]  object-cover" alt="" />
            <div className=" -mt-[100%] px-10 md:mt-0 md:px-0 md:absolute top-[33%] left-[48%] lg:left-[58%] desktop:left-[76%] 
             md:w-[50%] chefContain:w-[80%] h-fit  lg:pr-5 xl:pr-0 ">
                <h2 className=" max-w-full text-center md:text-start  text-[48px] font-bold leading-[129.9%] pb-[20px] mdd:pb-[37px] md:max-w-[368px]">
                    We are
                    <span className="text-red_1"> more </span>
                    <br className="flex md:hidden" />
                    than <br className="hidden mdd:flex" />
                    <span className="text-yellow_1">multiple</span>  service
                </h2>
                <p className="text-center xs:text-start text-lg font-medium ppr-3 mdd:pr-0 pb-[29px]">This is a type of resturent which typically serves food and drink, in addition to light refreshments such as baked goods or snacks. The term comes frome the rench word meaning food</p>

                <button className="hidden md:block mdd:hidden bottom-[-24px] w-fit rounded-full h-[46px] px-5 text-white bg-red_1">About Us</button>

                <div className="grid md:hidden mdd:grid xs:grid-cols-2 gap-y-3 sm:gap-[20px] mdd:gap-[15px] desktop:gap-[29px] lg:pr-0">
                    {service.map((item, index) => (
                        <div key={index} className="w-full sm:w-[300px] flex gap-[6px]">
                            <img src={item.icon} alt="" />
                            <span className="text-lg text-nowrap">{item.name}</span>
                        </div>
                    ))}
                    <button className=" bottom-[-24px] w-fit rounded-full h-[46px] px-5 text-white bg-red_1">About Us</button>
                </div>
            </div>

        </div>
        <div className="absolute bottom-[25%] left-0 w-full hidden  md:grid mdd:hidden  grid-cols-3 gap-[15px] px-10  ">
            {service.map((item, index) => (
                <div key={index} className=" flex gap-[6px]">
                    <img src={item.icon} alt="" />
                    <span className="text-lg text-nowrap">{item.name}</span>
                </div>
            ))}
        </div>
    </div>;
};
