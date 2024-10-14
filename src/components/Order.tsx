import layerOrder from "../assets/img/layerOrder.svg"
import appStore from "../assets/img/appStore.svg"
import ggplay from "../assets/img/ggplay.svg"
import chefOrder from "../assets/img/chefOrder.svg"
const Order = () => {
    return <div className="">
        <div className="relative  h-full w-full">
            <img src={layerOrder} className="w-full h-full" alt="" />
            <div className="absolute top-0 left-0 h-full w-full  ">
                <div className="max-w-[1300px] mx-auto flex px-10 desktop:px-0 pt-[20px] lg:pt-[60px] xl:pt-[88px]">
                    <div className="w-1/2 text-4xl xl:text-5xl font-bold leading-[140%] tracking-wide flex flex-col ">
                        <h2 className="pb-[47px]">It’s Now <span className="text-red_1"> More Easy </span>  to <span className="text-yellow_1"> Order </span> <br />  by Our Mobile <span className="text-red_1"> App </span> </h2>
                        <p className="text-lg text-black_1 mdd:w-[306px] pb-[42px]">All you need to do is downlode one of the best delivery apps, make a and most companies are opting  for mobile app devlopment for food delivery</p>
                        <div className="flex gap-[27px]">
                            <img src={ggplay} alt="" />
                            <img src={appStore} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 transition-transform translate-y-[-63px] ">
                <div className="float-right h-full w-[70%] lg:w-[80%] desktop:w-full"><img src={chefOrder} alt="" className="w-full h-full" /></div>
            </div>
        </div>
    </div>;
};

export default Order;
