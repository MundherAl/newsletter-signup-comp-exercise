import imgDesktop from '../assets/illustration-sign-up-desktop.svg';
import SubmitButton from './form-elements/SubmitButton';
import EmailField from './form-elements/EmailField';
import React, { useState } from 'react';


export default function NewsletterForm() {

    const [emailValidity, setEmailValidity] = useState(true);

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
                            <EmailField onBlur={handleInputChange} emailValidity={emailValidity} />
                            <SubmitButton text='Subscribe to monthly newsletter' />
                        </form>
                    </div>
                </div>
                <img src={imgDesktop} alt="" className='object-cover h-[16em] md:w-full md:h-full rounded-b-3xl md:rounded-3xl' />
            </div>
        </div>
    );
}
