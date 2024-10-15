import heart from "../assets/img/heart.svg"
import Orange from "../assets/img/Orange.svg"
import PlayBtn from "../assets/img/playbtn.svg"
import EatPizza from "../assets/img/eatPizza.svg"
import SearchIcon from "../assets/img/SearchIcon";
import Underline from "../assets/img/underline.svg"
import DownPoint from "../assets/img/downPoint.svg"

const Intro = () => {
    return <div className="px-6 sm:px-10 desktop:px-0 max-w-[1300px] mx-auto flex  flex-col-reverse mdd:flex-row pb-[101px] mdd:pb-[126px] gap-10 ">
        <div className="relative sm:pt-[80px] xl:pt-[102px] flex flex-col mdd:max-w-[471px] ">
            <div className="rounded-full w-fit mb-5 flex items-center bg-[#feeded] gap-[6px] py-1 px-[5px]">
                <img src={heart} alt="" />
                <span className="text-sm">People Trust us</span>
            </div>
            <div className="relative text-[48px] xl:text-[58px] font-bold">
                We're
                <span className="text-red_1"> Serious </span>
                For
                <span className="text-red_1"> Food</span> &
                <span className="text-yellow_1"> Delivery</span>
                .
                <img src={Underline} className=" absolute bottom-[8px] xl:right-[23px]" alt="" />

                <img src={Orange} className="hidden mdd:block absolute bottom-[90px] right-[-65px]" alt="" />
            </div>
            <span className=" text-xl xl:text-2xl pt-[29px] pb-[27px]">
                Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
            </span>
            <div className="h-[54px] pl-[17px] pr-[7px] flex items-center border rounded-full gap-[15px] mb-[34px]">
                <SearchIcon color="black" />
                <input type="text" className="flex-1 outline-none text-[18px] " placeholder="Search food" />
                <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center bg-yellow_1 cursor-pointer  m-auto">
                    <SearchIcon color="white" />
                </div>
            </div>
            <div className="flex items-center gap-[31px]">
                <button className=" rounded-full h-[46px] px-5 text-white bg-red_1 hover:bg-red-700">Download App</button>
                <button className="flex  items-center gap-[21px]">
                    <div className="rounded-full hover:border-red-200 hover:border shadowbtn h-[52px] w-[52px] flex items-center justify-center" >
                        <img src={PlayBtn} alt="" />
                    </div>
                    <span className="text-[17px] p-3 rounded-full hover:bg-gray-100 font-medium text-[#686D77]">Watch Video</span>
                </button>
            </div>
            <div className="hidden mdd:block absolute bottom-[-74px] left-0">
                <img src={DownPoint} alt="" />
            </div>
        </div>
        <div className="hidden mdd:flex flex-1  justify-end  pt-[40px] xl:pt-[20px]">
            <div className="  desktop:mr-[-56px]">
                <img src={EatPizza} alt="" />
            </div>
        </div>
    </div>;
};

export default Intro;
