import iconSuccess from '../assets/icon-success.svg';
import SubmitButton from './form-elements/SubmitButton';

export default function Subscribed(props) {
    return (
        <div className="bg-white flex flex-col 
        h-full w-full p-8 rounded-3xl
        md:h-[30em] md:w-[30em] md:pt-12 md:px-12 md:pb-14
        justify-between">
            <div>
                <img src={iconSuccess} alt="Success icon" className='mt-36 md:mt-0 w-20 object-contain' />
                <h2 className="text-4xl md:text-5xl  font-bold font-roboto text-dark-slate-gray mt-8">
                    Thanks for subscribing!
                </h2>
                <p className='font-roboto mt-6 text-[16px] text-dark-slate-gray'>
                    A confirmation email has been sent to <b>ash@loremcompany.com</b>.
                    Please open it and click the button inside to confirm
                    your subscription
                </p>
            </div>
            <div className='flex justify-center'>
                <SubmitButton text='Dismiss message' />
            </div>
        </div>
    )
}