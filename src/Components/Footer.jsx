import React from 'react'

const Footer = () => {
  return (
    <div className='flex items-center justify-around mt-7 py-20 bg-black font-sans'>
        <div>
            <h1 className='font-bold-sans text-gray-500 mb-7'>ABOUT</h1>
            <h3 className='text-white'>Contact Us</h3>
            <h3 className='text-white'>Careers</h3>
            <h3 className='text-white'>Corporate Information</h3>
        </div>
        <div>
            <h1 className='font-bold-sans text-gray-500 mb-7'>HELP</h1>
            <h3 className='text-white'>Payments</h3>
            <h3 className='text-white'>Shipping</h3>
            <h3 className='text-white'>Cancellation & Returns</h3>
            <h3 className='text-white'>FAQ</h3>
        </div>
        <div>
            <h1 className='font-bold-sans text-gray-500 mb-7'>CONSUMER POLICY</h1>
            <h3 className='text-white'>Cancellation and Returns</h3>
            <h3 className='text-white'>Terms of Use</h3>
            <h3 className='text-white'>Security</h3>
            <h3 className='text-white'>Privacy</h3>
        </div>
        <div>
            <h1 className='font-bold-sans text-gray-500 mb-7'>SOCIAL MEDIA</h1>
            <a href='#' className='text-white'> Facebook</a><br />
            <a href='#' className='text-white'>Instagram</a><br />
            <a href="#" className='text-white'>Twitter</a><br />
        </div>
    </div>
  )
}

export default Footer
