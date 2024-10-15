import layerRed from "../assets/img/layyerRed.svg"
import roundOrange from "../assets/img/roundOrange.svg"
import Star from "../assets/img/Star.svg"
import CircleDot from "../assets/img/circleDot.svg"
import Rosemary from "../assets/img/rosemary.svg"

const data = [
    {
        image: "https://wallpapersmug.com/download/3840x2160/ddcbbf/food-pizza-baking.jpg",
        commener: [
            "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9A/production/_120424467_joy2.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2021-10/29/16/asset/10f527de873a/sub-buzz-567-1635525987-2.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOpGbs4Rs5sBt6niREaZuivtjTczY8eVuqew&s",
        ],
        star: 4.5,
        price: 20,
        name: "Kebad",
        des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF_DXYezAVHjXrKVhEljfKZXBliNmEz8eX3A&s",
        commener: [
            "https://hips.hearstapps.com/elleuk.cdnds.net/17/37/1600x1066/gallery-1505392568-gettyimages-609977348.jpg?resize=640:*", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfwy9aNNtbxGtn2e51rDQKfpY2T02jPs0cfA&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfQGpxvBftgiDJOsSqqahN08EkioiG7tPgyw&s",
        ],
        star: 5,
        price: 15,
        name: "Chicken",
        des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    },
    {
        image: "https://c4.wallpaperflare.com/wallpaper/234/543/684/food-pizza-wallpaper-thumb.jpg",
        commener: [
            "https://www.ukmodels.co.uk/wp-content/uploads/2020/10/shutterstock_136135856-1024x694.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-K-z5ybrsZYg1BoksGwCoPlAsCBuLXGNmBA&s", "https://www.okayafrica.com/media-library/image.jpg?id=28824658&width=980",
        ],
        star: 4.8,
        price: 24,
        name: "Beef",
        des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    },
    {
        image: "https://i.ytimg.com/vi/CjOqCeKVBN8/maxresdefault.jpg",
        commener: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOR9ayOkfvDpOqnZZc0NabbBl_QE573HuDVw&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRQOolGsf0SnNvvGUW0pT-f9mn2twbOGI1A&s", "https://media.gettyimages.com/id/1290658063/photo/portrait-of-a-beautiful-woman-with-natural-make-up.jpg?s=612x612&w=gi&k=20&c=BMmdfH0aTrB5zx_Ka8hb0-wPGYgcoPNId4GElP-oFP8=",
        ],
        star: 4.2,
        price: 30,
        name: "Soup",
        des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    },
]
const Special = () => {
    return <div id="todaySpecial" className="relative px-[34px] sm:px-10 desktop:px-0 z-30">
        <img src={CircleDot} className="absolute hidden mdd:block top-[60px] left-0" alt="" />
        <img src={Rosemary} className="absolute hidden mdd:block bottom-[-140px] right-0" alt="" />
        <div className=" max-w-[1300px] mx-auto">
            <div className="flex flex-col text-center gap-[22px] pb-[66px]">
                <h2 className="text-[48px] font-bold capitalize">Today
                    <span className="text-red_1"> special </span>  offers</h2>
                <span className="mdd:w-[63%] mx-auto capitalize text-lg text-black_1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
            </div>
            <div className="relative grid  sm:grid-cols-2 lg:grid-cols-4 gap-[18px] gap-y-16">
                {data.map((item, index) => (
                    <div key={index} className={`relative h-[498px] max-w-[312px] ${index % 2 ? "md:mr-auto" : "md:ml-auto"} flex mx-auto md:mx-0
                    flex-col items-center`}>
                        <div className="absolute bottom-0 left-0 h-full w-full  ">
                            <img src={layerRed} className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="relative h-[248.31px] w-[248.31px] flex items-center justify-center ">
                            <div className="w-[197px] h-[197px]">
                                <img className="rounded-full h-full w-full object-cover" src={item.image} alt="" />
                            </div>
                            <div className="absolute top-0"><img src={roundOrange} alt="" /></div>
                            <div className="absolute bottom-[19px] right-[40px] h-[60px] w-[60px] flex items-center justify-center rounded-full  bg-white ">
                                <div className="bg-yellow_1 p-3  rounded-full text-lg text-white">{item.price}$</div>
                            </div>
                        </div>
                        <div className="flex items-center pb-[30px]">
                            <div className="flex w-fit ">
                                {item.commener.map((item, index) => {
                                    return <div key={index}>
                                        <div className={`p-[2px] transition-transform ${index == 1 ? "-translate-x-1/2" : index == 2 ? "-translate-x-full" : ""}  h-[38px] w-[38px] rounded-full bg-white`}>
                                            <img className="h-full w-full object-cover rounded-full" src={item} alt="" />
                                        </div>
                                    </div>
                                })}
                            </div>
                            <div className="flex pl-1 transition-transform -translate-x-1/2 gap-2">
                                <div><img src={Star} alt="" /></div>
                                <span className="text-lg font-medium">{item.star}</span>
                            </div>
                        </div>
                        <h3 className="text-[#fd2222] text-2xl font-bold pb-4">{item.name}</h3>
                        <p className="px-[37px] capitalize text-center text-black_1 text-base font-medium">{item.des}</p>
                        <button className=" absolute bottom-[-24px] rounded-full h-[46px] px-5 text-white bg-red_1">Order Now</button>
                    </div>
                ))}
            </div>
        </div>
    </div>;
};

export default Special;
