import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 mx-5 px-5 text-sm text-start'>
                <div>
                    <img src='' className='mb-5 w-32' alt="" />
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600 '>
                        <li>HOME</li>
                        <li>ABOUT US</li>
                        <li>DELEVERY</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+8801622790628</li>
                        <li>fashion.gzen@gmail.com</li>
                        <li>facebook.com/fashion.zen.g</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text center'>Copywrite 2024</p>
            </div>
        </div>
    )
}

export default Footer