import { useState } from "react"
import Star from "../assets/img/Star.svg"
import layerRed from "../assets/img/layyerRed.svg"
import roundOrange from "../assets/img/roundOrange.svg"
import { data } from "../data/menu"
const categorysTitle = ["Ramen", "Breakfast", "Lunch", "Dinner", "Maxican", "Italian", "Deserts", "Drinks"]


const Category = () => {
    const [activeCategory, setActiveCategory] = useState<string>(categorysTitle[0])
    const setCategoryActive = (item: string) => {
        console.log(item);
        setActiveCategory(item)
    }

    const dataFilered = data.filter(item => item.category == activeCategory)
    return <div id="menu" className="relative -mt-[30%] md:-mt-[5%] lg:-mt-[20%]">
        <div className=" max-w-[1300px] mx-auto mb-[150px] desktop:mb-[220px]">
            <div className=" flex flex-col text-center pb-[50px] xl:pb-[80px]">
                <h2 className="text-[48px] font-bold capitalize leading-tight pb-[50px] px-10 sm:px-0">
                    <span className="text-red_1"> Menu </span>
                    that
                    <span className="text-yellow_1"> always </span>
                    make you <br /> fall in
                    <span className="text-red_1"> love </span>
                </h2>
                <div className="w-full flex overflow-x-scroll lg:overflow-x-hidden items-center gap-[5px] md:gap-[30px] lg:justify-center px-10 lg:px-0 container">
                    {categorysTitle.map((item, index) => (
                        <button key={index} onClick={() => setCategoryActive(item)}
                            className={`${activeCategory === item ? "bg-red_1 text-white" : "text-gray-700 border border-gray800 bg-white "} rounded-full h-[46px] px-5 `} > {item}</button>
                    ))}
                </div>
            </div>
            <div className="relative px-10 desktop:px-0 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-[18px] gap-y-16  xl:gap-y-84 ">
                <img loading="lazy" className="absolute top-0 left-0" src="" alt="" />
                {dataFilered.map((item, index) => (
                    // {`relative h-[498px] max-w-[312px] ${index % 2 ? "md:mr-auto" : "md:ml-auto"} flex mx-auto md:mx-0
                    // flex-col items-center`}
                    <div key={index} className={`relative h-[498px] max-w-[312px]  ${index % 2 ? "md:mr-auto" : "md:ml-auto"}  mx-auto md:mx-0 flex flex-col gap-y-84  items-center`}>
                        <div className="absolute bottom-0 left-0   ">
                            <img loading="lazy" src={layerRed} className="" alt="" />
                        </div>
                        <div className="relative h-[248.31px] w-[248.31px] flex items-center justify-center ">
                            <div className="w-[197px] h-[197px]">
                                <img loading="lazy" className="rounded-full h-full w-full object-cover" src={item.image} alt="" />
                            </div>
                            <div className="absolute top-0"><img loading="lazy" src={roundOrange} alt="" /></div>
                            <div className="absolute bottom-[19px] right-[40px] h-[60px] w-[60px] flex items-center justify-center rounded-full  bg-white ">
                                <div className="bg-yellow_1 p-3  rounded-full text-lg text-white">{item.price}$</div>
                            </div>
                        </div>
                        <div className="flex items-center pb-[30px]">
                            <div className="flex w-fit ">
                                {item.commener.map((item, index) => {
                                    return <div key={index}>
                                        <div className={`p-[2px] transition-transform ${index == 1 ? "-translate-x-1/2" : index == 2 ? "-translate-x-full" : ""}  h-[38px] w-[38px] rounded-full bg-white`}>
                                            <img loading="lazy" className="h-full w-full object-cover rounded-full" src={item} alt="" />
                                        </div>
                                    </div>
                                })}
                            </div>
                            <div className="flex pl-1 transition-transform -translate-x-1/2 gap-2">
                                <div><img loading="lazy" src={Star} alt="" /></div>
                                <span className="text-lg font-medium">{item.star}</span>
                            </div>
                        </div>
                        <h3 className="text-[#fd2222] text-2xl font-bold pb-4">{item.name}</h3>
                        <p className="px-[37px] capitalize text-center text-black_1 text-base font-medium">{item.des}</p>
                        <button className=" absolute bottom-[-24px] rounded-full h-[46px] px-5 text-white bg-red_1 hover:bg-red-600">Order Now</button>
                    </div>
                ))}
            </div>
        </div>
    </div >;
};

export default Category;
