
import Fb from "../assets/img/Facebook.svg"
import Ig from "../assets/img/instagram.svg"
import Tw from "../assets/img/Twitter.svg"
const Footer = () => {
    return <div className="pt-[90px] desktop:pt-[200px] pl-[30px] sm:pl-[80px] desktop:pl-[135px]  pr-[30px] sm:pr-[70px]   desktop:pr-[94px] pb-[38px]  ">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-0 pb-[50px] desktop:pb-[95px]">
            <div className="flex flex-col text-center lg:text-left">
                <h2 className="text-4xl text-red_1 font-bold pb-[10px]">Foodhut</h2>
                <p className="text-lg lg:max-w-[300px] pb-[22px] font-medium text-black_1">Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do  eiusmod tempor </p>
                <div className="flex gap-[26px] justify-center lg:justify-start">
                    <img loading="lazy" src={Fb} alt="" />
                    <img loading="lazy" src={Ig} alt="" />
                    <img loading="lazy" src={Tw} alt="" />
                </div>
            </div>
            <div className="flex-1 flex flex-col sm:flex-row  gap-[50px] xl:gap-[94px] justify-center lg:justify-end ">
                <div className="flex justify-center sm:justify-start gap-[20px] md:gap-[50px] xl:gap-[94px] ">
                    <div className="text-lg flex flex-col text-nowrap">
                        <span className="text-2xl  font-semibold text-red_1 pb-[17px]">About Us</span>
                        <span className="pb-[11px]">About Us</span>
                        <span className="pb-[11px]">Service Us</span>
                        <span className="pb-[11px]">Contact</span>
                        <span>Company</span>
                    </div>
                    <div className="text-lg flex flex-col text-nowrap">
                        <span className="text-2xl  font-semibold text-red_1 pb-[17px]">Company</span>
                        <span className="pb-[11px]">Partnership</span>
                        <span className="pb-[11px]">Terms of Use</span>
                        <span className="pb-[11px]">Privacy</span>
                        <span >Sitemap</span>
                    </div>
                </div>
                <div className="text-lg flex flex-col text-center sm:text-left ">
                    <span className="text-2xl font-semibold text-red_1 pb-[37px]">Get in touch</span>
                    <div className="w-full sm:max-w-[350px] pb-[27px] text-center sm:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
                    <div className="flex gap-[15px]">
                        <input type="text" className="w-full sm:w-[205px] h-[50px] rounded-full bg-gray-200 px-4" placeholder="Email" />
                        <button className=" rounded-full h-[50px] px-5 text-white bg-red_1 hover:bg-red-600">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center">Copyright © 2022 Foodhut.</div>
    </div>;
};

export default Footer;

