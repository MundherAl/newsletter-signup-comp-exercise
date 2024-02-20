export default function SubmitButton(props) {
    return (
        <input type="submit" value={props.text}
            className='md:w-[25em] w-full h-12 rounded-md bg-dark-slate-gray text-white cursor-pointer font-bold
                                hover:bg-gradient-to-r hover:from-tomato-bright hover:to-tomato hover:shadow-xl hover:shadow-tomato/40
                                focus:bg-gradient-to-r focus:from-tomato-bright focus:to-tomato focus:shadow-xl focus:shadow-tomato/40' />
    )
}