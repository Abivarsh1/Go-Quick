

const Delivery = () => {

const deliveries=[

    {
        title: 'Quality Assurance',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, at',
        image:'src/assets/delivery/delivery_1.png'
    },
    {
        title: 'Delivery from 1-2 hours',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, at',
        image:'src/assets/delivery/delivery_2.png'
    },
    {
        title: 'Pay after receiving products',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, at',
        image:'src/assets/delivery/delivery_3.png'
    },
]


    return (
        <div className="lg:container mx-auto">

            <div className="grid grid-cols-3">
                {

                    deliveries.map((item, index)=> (

                        <div key={index} className="flex items-center flex-col justify-center" >

                            <div className="flex items-center justify-center mb-6">
                                <img className="w-full h-full object-cover"src={item?.image} alt="" />
                            </div>
                            <div className="flex items-center  justify-center flex-col space-y-3">
                                <h4 className="text-lg text-[#1b1b1b] font-semibold capitalize">{item?.title}</h4>
                                <p className="text-base text-[#1b1b1b] font-normal leading-8 max-w-[305px] w-full">{item?.description   }</p>
                            </div>


                        </div>

                    ))
                }

            </div>
        </div>


    )
}

export default Delivery;