import React from 'react'

function Hero() {
  return (
    <section id="home" className='flex md:flex-row flex-col py-16'>
        <div className='flex-1 flex-col xl:px-0 md:px-6 px-16'>
            <img src="../images/socialism-worker.png" alt="hero--illustration" className='relative m-auto basis-3/12' />
        </div>
        <div className='basis-9/12'>
            <h4 className='font-bold'>DHDK - University of Bologna - Open Access 2023</h4>
            <h1 className='font-mono font-bold text-5xl my-2'>
            EmpowerItaly
            </h1>
            <p className='text-lg max-w-md'>
                Is Italy really been "inveded" by immigrants?
                Which is the occupational rate of Italian and foreings?
                How is the level of education distributed?
            </p>
        </div>
    </section>
  )
}

export default Hero