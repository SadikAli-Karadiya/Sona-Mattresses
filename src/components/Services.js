import {FiShoppingCart} from "react-icons/fi"
import {SiAdguard} from "react-icons/si"
import {AiOutlinePercentage} from "react-icons/ai"
import {BsCreditCard} from "react-icons/bs"
import {TbCertificate} from "react-icons/tb"
import {BiMessageCheck} from "react-icons/bi"

export default function Services() {
    return (
        <div className='bg-white px-32 py-10'>
            <div className='py-10 space-y-24'>
                <div className='grid grid-cols-3 '>
                    <div className='flex flex-col justify-center items-center'>
                        <FiShoppingCart className='text-4xl text-[#ae9775]'/>
                        <h1 className='font-bold pt-6'>
                            Free Shipping
                        </h1>
                        <p className='font-light pt-3 text-sm'>Nullam sed ultricies erat, nec euismod metus.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <SiAdguard className='text-4xl text-[#ae9775]'/>
                        <h1 className='font-bold pt-6'>
                            5 Years Guarantee
                        </h1>
                        <p className='font-light pt-3 text-sm'>Vestibulum vitae diam sit amet massa imperdiet ornare.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <AiOutlinePercentage className='text-4xl text-[#ae9775]'/>
                        <h1 className='font-bold pt-6'>
                            Discount System
                        </h1>
                        <p className='font-light pt-3 text-sm'>Praesent vitae rutrum sapien. Suspendisse potenti.</p>
                    </div>
                </div>
                <div className='grid grid-cols-3 '>
                    <div className='flex flex-col justify-center items-center'>
                        <BsCreditCard className='text-4xl text-[#ae9775]'/>
                        <h1 className='font-bold pt-6'>
                            Online Payments
                        </h1>
                        <p className='font-light pt-3 text-sm'>Integer ex diam, ornare eget eleifend a lorem.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <TbCertificate className='text-4xl text-[#ae9775]'/>
                        <h1 className='font-bold pt-6'>
                            Certified Products
                        </h1>
                        <p className='font-light pt-3 text-sm'>Aliquam erat volutpat. Duis at velit lorem elit.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <BiMessageCheck className='text-4xl text-[#ae9775]'/>
                        <h1 className='font-bold pt-6'>
                            Good Support
                        </h1>
                        <p className='font-light pt-3 text-sm'>Duis eu nisl sed quam iaculis varius at vitae justo.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

