import bannerimg from '../../../src/assets/banner.jpg'
const HomeBanner = () => {
    return (
       
            <div className='relative mb-60'>
                <div className="text-center space-y-5 bg-[#9538E2] text-white py-12 rounded-b-xl px-10 pb-28">
                    <h3 className="font-bold text-6xl">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h3>
                    <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button className="btn rounded-3xl">Shop Now</button>
                </div>

                <div className="absolute w-[60%] -bottom-40 md:-bottom-52 left-[19%] border-8 border-gray-100 shadow-md rounded-2xl">
                    <img src={bannerimg} alt="" 
                    className="rounded-xl w-full h-[250px] md:h-[300px] object-cover " />
                </div>

            </div>
        
    );
};

export default HomeBanner;