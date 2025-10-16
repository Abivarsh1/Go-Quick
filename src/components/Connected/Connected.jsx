import { Link } from "react-router"


const Connected = () => {


    return (
        <div className="lg:container mx-auto">

            <div className="grid grid-cols-2 items-center justify-between">


                {/* {left wrapper} */}

                <div className="left_wrapper max-w-[644px] w-full min-h-[610px] h-full
                bg-[#fefaf1] rounded-l-2xl flex items-center justify-center p-6">

                    <img src="src/assets/connecting/connecting_1.png" alt="connecting" />

                </div>


                {/* {right wrapper} */}

                <div className="right_wrapper flex flex-col justify-center space-y-8">

                    <h3 className="max-w-[570px] w-full text-4xl text-[#1b1b1b]
                     font-semibold capitalize">connecting our user with ios & android apps. download from app store & play store</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Reiciendis assumenda repellendus, sequi quasi
                        corrupti neque quas ab ex officiis omnis? Error iusto vitae
                    </p>

                    <div className="flex items-center gap-4">

                        <Link className="max-w-[185px] w-full h-[65px] bg-[#081c27] rounded-lg
                        flex items-center justify-center" to={'#'}><img src="src/assets/icons/apple.png" />
                        </Link>
                        <Link className="max-w-[185px] w-full h-[65px] bg-[#081c27] rounded-lg
                        flex items-center justify-center" to={'#'}><img src="src/assets/icons/google.png" />
                        </Link>
                    
                    
                    </div>


                </div>




            </div>
        </div>
    )
}

export default Connected