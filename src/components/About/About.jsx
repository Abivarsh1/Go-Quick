import SectionTitle from "../SectionTitle/SectionTitle"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const About = () => {

    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const aboutSays = [

        {
            description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Ratione soluta quod esse at porro ex.
                            I am eleated to say that in terms of Service and customer satisfactory here you can hang around to purchase whatever you want with affordable prices make sense here.`,
            author: 'Mariana Dock',
            sector: 'UI Designer',
            image: '/src/assets/about/avatar.png'
        },
        {
            description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Ratione soluta quod esse at porro ex.
                            I am eleated to say that in terms of Service and customer satisfactory here you can hang around`,
            author: 'Subash paulraj',
            sector: 'Fullstack architect',
            image: '/src/assets/about/avatar.png'
        },
        {
            description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Ratione soluta quod esse at porro ex.
                            I am eleated to say that in terms of Service and customer satisfactory here you can hang around`,
            author: 'Subash Paulraj',
            sector: 'CEO',
            image: '/src/assets/about/avatar.png'
        },


    ]


    return (
        <div className="lg:container mx-auto">

            <div className="grid grid-cols-2 items-center">


                {/* {left wrapper} */}

                <div className="left_wrapper">

                    <SectionTitle title={'What people say about us'} textAlign={'justify-start'} />


                    <div className="about_slider">
                        <Slider {...settings}>

                            {
                                aboutSays?.map((item, index) => (

                                    <div key={index} className="max-w-[600px] w-full h-auto space-y-4">

                                        <p className="text-lg text-[#36526c] font-serif font-normal
                                      capitalize leading-9 py-2">{item?.description}</p>
                                        <div className="flex items-center gap-3">

                                            <img className="w-[50px] h-[50px] rounded-full" src={item?.image} alt={item?.author} />

                                            <div className="flex flex-col justify-center space-y-2">

                                                <h4 className="text-[1.1rem] text-[#1b1b1b] font-medium capitalize">{item?.author}</h4>
                                                <span className="text-base text-[#595959] font-normal leading-4 capitalize">{item?.sector}</span>
                                            </div>

                                        </div>
                                    </div>

                                ))
                            }

                        </Slider>



                    </div>
                </div>


                {/* {right wrapper} */}
                <div className="right_wrapper max-w-[693px] min-h-[563px] h-full">

                    <img className="w-full h-full object-cover" src="src/assets/about/about.png" alt="about image" />
                </div>

            </div>
        </div>
    )
}

export default About