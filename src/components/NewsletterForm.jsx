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
        <div className="bg-white w-[60em] h-[40em] rounded-3xl shadow-2xl">
            <div className="flex grid-cols-2 p-6 justify-between">
                <div className='my-20 mx-6'>
                    <h2 className="text-6xl font-bold font-roboto text-dark-slate-gray">Stay updated!</h2>
                    <p className='mt-4 mr-12 font-roboto text-[16px] text-dark-slate-gray'>
                        Join 60,000+ product managers receiving monthly updates on:
                    </p>
                    <ul className='newsletter-list mt-8 space-y-3 text-dark-slate-gray'>
                        <li>Product discovery and building what matters</li>
                        <li>Measuring to ensure updates are a success</li>
                        <li>And much more!</li>
                    </ul>
                    <div className='mt-8'>
                        <form action="">
                            <div className='flex justify-between w-96'>
                                <p className='font-bold font-roboto text-sm text-dark-slate-gray mb-2'>Email address</p>
                                <p className={"font-bold font-roboto text-sm text-red-400 mb-2" + (emailValidity ? " hidden" : "")}>
                                    Valid email required
                                </p>
                            </div>
                            <input type="email" placeholder='email@company.com' id='emailInput'
                                className='peer border-2 border-slate-300 w-96 h-12 rounded-md pl-4 mb-4
                                focus:border-black hover:border-black
                                invalid:[&:not(:focus)]:border-red-300  
                                invalid:[&:not(:focus)]:text-red-400 
                                invalid:[&:not(:focus)]:bg-red-100'
                                onBlur={handleInputChange}
                                required />
                            <input type="submit" value="Subscribe to monthly newsletter"
                                className='w-96 h-12 rounded-md bg-dark-slate-gray text-white cursor-pointer font-bold transition-colors
                                hover:bg-gradient-to-r hover:from-tomato-bright hover:to-tomato
                                focus:bg-gradient-to-r focus:from-tomato-bright focus:to-tomato' />
                        </form>
                    </div>
                </div>
                <img src={imgDesktop} alt="" />
            </div>
        </div>
    );
}