import React from 'react'

const Card = ({title, value}) => {
    return (
        <div className='flex h-[175px] w-[250px] flex-col gap-2 rounded-lg bg-[#748CF1] p-4 text-white'>
            <h1 className='text-xl font-thin'> 
                {title} 
            </h1>
            <p className='text-2xl font-semibold'> 
                {value}
            </p>
        </div>
    )
}

export default Card