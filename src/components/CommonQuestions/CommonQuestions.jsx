import { useState } from "react"
import SectionTitle from "../SectionTitle/SectionTitle"
import { Link } from "react-router";


const CommonQuestions = () => {

    const [active, setActive] = useState(0);

    const commonQuestions = [

        {
            title: 'Q. What is your policy on refunds',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptate expedita at quam ducimus laborum dolorem in temporibus deleniti optio, voluptates 
            vel laudantium, quo hic?`
        },

        {
            title: 'Q. What is your policy on refunds?',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptate expedita at quam ducimus laborum dolorem in temporibus deleniti optio, voluptates 
            vel laudantium, quo hic?`
        },
        {
            title: 'Q. What are your delivery hours?',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptate expedita at quam ducimus laborum dolorem in temporibus deleniti optio, voluptates 
            vel laudantium, quo hic?`
        },
        {
            title: 'Q. Are products showed up in a affordable manner?',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptate expedita at quam ducimus laborum dolorem in temporibus deleniti optio, voluptates 
            vel laudantium, quo hic?`
        },
    ]

    return (
        <div className="lg:container mx-auto">

            <SectionTitle title={'Common Questions'} />

            <div>
                {
                    commonQuestions?.map((item, index) => (

                        <div key={index} onClick={() => setActive(index)} className={`collapse collapse-arrow border-t-[1px] ${index === 0 || index === 1 || index === 2 ? 'border-b-0' : 'border-b-[1px]'
                            }
                         border-[#999999] rounded-none mb-3`}>
                            <input type="radio" name="my-accordion-2" defaultChecked={
                                index == 0 ? true : false
                            } />
                            <div className={`collapse-title capitalize text-lg font-semibold
                                 ${active === index ? 'text-[#05a845]' : 'text-[#1b1b1b]'}`}>{item?.title}</div>
                            <div className="collapse-content text-sm">{item?.description}</div>
                        </div>
                    ))
                }
            </div>

            <div className="w-full min-h-[176px] h-full
             bg-[#fffaf0] rounded-lg flex items-center justify-between mt-8 p-8">

                <div className="flex flex-col justify-center gap-4">
                    <h3 className="text-xl text-[#1b1b1b] font-semibold capitalize">still have Questions?</h3>
                    <p className="text-base text-[#1b1b1b] font-normal leading-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus sed fugiat,
                        commodi tenetur alias iste.</p>
                </div>

                <div>
                    <button><Link className="max-w-[150px] p-4  w-full h-[50px] flex items-center justify-center
                     bg-[#05a845] rounded-2xl text-base capitalize font-medium ">get in touch</Link></button>
                </div>

            </div>
        </div>
    )
}

export default CommonQuestions