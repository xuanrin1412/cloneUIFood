import ggplay from "../assets/img/ggplay.svg"
import appStore from "../assets/img/appStore.svg"
import chefOrder from "../assets/img/chefOrder.svg"
import layerOrder from "../assets/img/layerOrder.svg"

const Order = () => {
    return <div id="popular">
        <div className="relative  h-full w-full flex flex-col-reverse">
            <img loading="lazy" src={layerOrder} className="absolute md:relative w-full h-[300px] md:h-[600px] object-cover " alt="" />
            <div className="transition-transform translate-y-[-100px]  md:absolute md:top-0 md:left-0 h-full w-full  ">
                <div className="max-w-[1300px] mx-auto flex px-10 desktop:px-0 pt-[20px] lg:pt-[60px] xl:pt-[88px]">
                    <div className="md:w-1/2 text-5xl font-bold leading-[140%] tracking-wide flex flex-col ">
                        <h2 className="pb-[47px]">It’s Now <span className="text-red_1"> More Easy </span>  to <span className="text-yellow_1"> Order </span> <br />by Our Mobile <span className="text-red_1"> App </span> </h2>
                        <p className="text-lg text-black_1 md:min-w-[300px] md:max-w-[600px] pb-[42px] md:pr-10 lg:pr-0">All you need to do is downlode one of the best delivery apps, make a and most companies are opting  for mobile app devlopment for food delivery</p>
                        <div className="flex gap-[27px]">
                            <img loading="lazy" src={ggplay} alt="" />
                            <img loading="lazy" src={appStore} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:absolute md:top-0 md:right-0 md:transition-transform md:translate-y-[-63px] ">
                <div className="float-right h-full w-[90%] md:w-[70%] lg:w-[80%] desktop:w-full"><img src={chefOrder} alt="" className="w-full h-full" /></div>
            </div>
        </div>
    </div>;
};

export default Order;
