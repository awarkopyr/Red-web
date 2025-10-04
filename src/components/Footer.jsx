import React from 'react'
import logo2 from '../assets/logo2.png'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-8 my-5 mt-5 mx-5 px-5 text-sm text-start'>
                <div>
                    <img src= {logo2} className='mb-5 w-32' alt="" />
                </div>
                <div>
                    <p className='text-xl font-medium mb-5 text-white'>CONTACT US</p>
                    <ul className='flex flex-col gap-1 text-white'>
                        <li>+8801778577347</li>
                        <li>+8801716428243</li>
                        <li>contactus@angelmovieworld.com</li>
                        <li>office@angelmovieworld.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text center'>Copywrite 2025</p>
            </div>
        </div>
    )
}

export default Footer