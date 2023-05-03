import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className='bg-slate-200 p-20'>
           <div className="flex justify-center items-center">
                <div className="">
                    <h1 className='text-2xl my-5'>Food</h1>
                    <p>Food is any substance consumed by <br /> an organism for nutritional support. <br /> Food is usually of plant, animal, <br /> or fungal origin, and contains essential nutrients,</p>
                </div>
                <div className="mx-7">
                    <h1 className='text-2xl my-5'>Rout</h1>
                    <p>Homes</p>
                    <p className='my-3'>About Us</p>
                    <p>Blog</p>
                    <p className='mt-3'>Contact Us</p>
                </div>
                <div className="mx-8">
                    <h1 className='text-2xl my-5'>Contact Now</h1>
                    <p className='my-2'>555 4th 5t NW, Washington <br />
                      DC 20530, United States</p>
                    <p>+88 01750 000 000</p>
                    <p className='mb-3'>+88 01750 000 000</p>
                    <p>info@gmail.com <br />
                     info@gmail.com</p>
                </div>
                <div className="">
                    <h1 className='text-2xl my-5'>Subscribe</h1>
                    <p>Subscribe for our latest & Articles. <br /> We Won’t Give You Spam Mails</p> <br />
                    <input type="email" name="email" id="email" placeholder='Your Email' className='p-3 rounded'/>
                    <input className='btn btn-outline btn-primary ml-4' type="submit" value="Submit" />
                </div>
            </div> 
        </div>
    );
};

export default Footer;