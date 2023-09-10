import React from 'react'
import { NUMBERS } from '../constants'

function Numbers() {
  return (
    <section id='numbers' className='flex flex-row flex-wrap mb-16 text-center '>
        {NUMBERS.map((number) => (
            <div key={number.id} className='md:w-1/3 w-full px-4 py-6'>
                <h4 className='font-bold md:text-4xl text-sm'>{number.value}</h4>
                <p>{number.title}</p>
            </div>
        ))}
    </section>
  )
}

export default Numbers