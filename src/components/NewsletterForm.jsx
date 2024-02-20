import imgDesktop from '../assets/illustration-sign-up-desktop.svg';
import React, { useState } from 'react';


export default function NewsletterForm() {

    const [emailValidity, setEmailValidity] = useState(false);

    const handleInputChange = (e) => {
        if (e.target.validity.valid) {
            setEmailValidity(true);
            console.log(emailValidity);
        } else {
            setEmailValidity(false);
            console.log(emailValidity);
        }
    }

    return (
        <div className="bg-white md:w-[60em] md:h-[40em] w-full h-full md:rounded-3xl shadow-2xl">
            <div className="flex md:flex-row md:grid-cols-2 flex-col-reverse grid-cols-1 md:p-6 justify-between w-full h-full">
                <div className='my-20 mx-6'>
                    <h2 className="md:text-6xl text-4xl font-bold font-roboto text-dark-slate-gray">Stay updated!</h2>
                    <p className='mt-4 mr-12 font-roboto text-[16px] text-dark-slate-gray'>
                        Join 60,000+ product managers receiving monthly updates on:
                    </p>
                    <ul className='newsletter-list mt-8 text-dark-slate-gray'>
                        <li>Product discovery and building what matters</li>
                        <li>Measuring to ensure updates are a success</li>
                        <li>And much more!</li>
                    </ul>
                    <div className='mt-8'>
                        <form action="">
                            <div className='flex w-full md:w-[25em] justify-between'>
                                <p className='font-bold font-roboto text-sm text-dark-slate-gray mb-2'>Email address</p>
                                <p className={"font-bold font-roboto text-sm text-red-400 mb-2" + (emailValidity ? " hidden" : "")}>
                                    Valid email required
                                </p>
                            </div>
                            <input type="email" placeholder='email@company.com' id='emailInput'
                                className='peer border-2 border-slate-300 w-full md:w-[25em] h-12 rounded-md pl-4 mb-4
                                focus:border-black hover:border-black
                                invalid:[&:not(:focus)]:border-red-300  
                                invalid:[&:not(:focus)]:text-red-400 
                                invalid:[&:not(:focus)]:bg-red-100'
                                onBlur={handleInputChange}
                                required />
                            <input type="submit" value="Subscribe to monthly newsletter"
                                className='md:w-[25em] w-full h-12 rounded-md bg-dark-slate-gray text-white cursor-pointer font-bold
                                hover:bg-gradient-to-r hover:from-tomato-bright hover:to-tomato hover:shadow-xl hover:shadow-tomato/40
                                focus:bg-gradient-to-r focus:from-tomato-bright focus:to-tomato focus:shadow-xl focus:shadow-tomato/40' />
                        </form>
                    </div>
                </div>
                <img src={imgDesktop} alt="" className='object-cover h-[16em] md:w-full md:h-full rounded-b-3xl md:rounded-3xl' />
            </div>
        </div>
    );
}
