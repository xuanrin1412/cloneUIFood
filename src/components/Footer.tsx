
import Fb from "../assets/img/Facebook.svg"
import Ig from "../assets/img/instagram.svg"
import Tw from "../assets/img/Twitter.svg"
const Footer = () => {
    return <div className="pt-[120px] desktop:pt-[232px] pl-[80px] desktop:pl-[135px]  pr-[70px]   desktop:pr-[94px] pb-[38px]  ">
        <div className="flex gap-10 xl:gap-0 pb-[50px] desktop:pb-[95px]">
            {/* <div>
                <h2 className="text-4xl text-red_1 font-bold pb-[10px]">Foodhut</h2>
                <p className="text-lg max-w-[300px] pb-[22px] font-medium text-black_1">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor </p>
                <div className="flex gap-[26px]">
                    <img src={Fb} alt="" />
                    <img src={Ig} alt="" />
                    <img src={Tw} alt="" />
                </div>
            </div>
            <div className="flex-1 flex gap-[50px] xl:gap-[94px] justify-end">
                <div className="text-lg flex flex-col text-nowrap">
                    <span className="text-2xl text-red_1 pb-[17px]">About Us</span>
                    <span className="pb-[11px]">About Us</span>
                    <span className="pb-[11px]">Service Us</span>
                    <span className="pb-[11px]">Contact</span>
                    <span>Company</span>
                </div>
                <div className="text-lg flex flex-col text-nowrap">
                    <span className="text-2xl text-red_1 pb-[17px]">Company</span>
                    <span className="pb-[11px]">Partnership</span>
                    <span className="pb-[11px]">Terms of Use</span>
                    <span className="pb-[11px]">Privacy</span>
                    <span >Sitemap</span>
                </div>
                <div className="text-lg flex flex-col ">
                    <span className="text-2xl text-red_1 pb-[37px]">Get in touch</span>
                    <div className="max-w-[350px] pb-[27px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
                    <div className="flex gap-[15px]">
                        <input type="text" className="w-[205px] h-[50px] rounded-full bg-gray-200 px-4" placeholder="Email" />
                        <button className=" rounded-full h-[50px] px-5 text-white bg-red_1">Subscribe</button>
                    </div>
                </div>
            </div> */}
        </div>
        <div className="text-center">Copyright © 2022 Foodhut.</div>
    </div>;
};

export default Footer;
