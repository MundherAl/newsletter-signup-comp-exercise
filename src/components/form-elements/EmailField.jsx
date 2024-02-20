export default function EmailField(props) {
    return (
        <div>
            <div className='flex w-full md:w-[25em] justify-between'>
                <p className='font-bold font-roboto text-sm text-dark-slate-gray mb-2'>Email address</p>
                <p className={"font-bold font-roboto text-sm text-red-400 mb-2" + (props.emailValidity ? " hidden" : "")}>
                    Valid email required
                </p>
            </div>
            <input type="email" placeholder='email@company.com' id='emailInput'
                className={`peer border-2 border-slate-300 w-full md:w-[25em] h-12 rounded-md pl-4 mb-4
                                focus:border-black hover:border-black` +
                    (props.emailValidity ? "" :
                        `
                        invalid:[&:not(:focus)]:border-red-300
                        invalid:[&:not(:focus)]:text-red-400 
                        invalid:[&:not(:focus)]:bg-red-100
                        `)}
                onBlur={props.onBlur}
                onChange={props.onChange}
                required />
        </div>
    )
}