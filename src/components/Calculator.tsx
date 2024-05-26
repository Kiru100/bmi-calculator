import React from 'react'

const Calculator = () => {
    return (
        <div className='bg-white mx-6 p-6 top-[-169px] relative rounded-2xl shadow-results'>
            <h2 className='text-gunmetal font-Inter-SemiBold text-2xl tracking-tighter text-center'>Enter your details below</h2>

            <label className="container">
                <input type="radio" checked={true} name="type" />
                <span className="checkmark"></span>
                One
            </label>
            <label className="container">
                <input type="radio" name="type"/>
                <span className="checkmark"></span>
                Two
            </label>

            

            <section aria-label='results' className='bg-app-blue p-8 rounded-2xl '>
                <p className='font-Inter-SemiBold leading-[150%] text-base tracking-normal text-white mb-2'>Your BMI is...</p>
                <p className='font-Inter-SemiBold leading-[110%] text-5xl tracking-tighter text-white mb-6'>22.0</p>
                <p className='font-Inter-Normal leading-[150%] text-sm tracking-normal text-white'>Your BMI suggests you’re a healthy weight. Your ideal weight is between <b className='font-bold leading-[150%] text-sm tracking-normal text-white'>9st 6lbs - 12st 10lbs.</b></p>
            </section>

        </div>
    )
}

export default Calculator