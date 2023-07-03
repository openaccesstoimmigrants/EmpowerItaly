function Hero() {
  return (
    <section id="home" class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img class="object-cover object-center rounded" alt="hero" src="../images/hero.png"></img>
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h2 class="text-sm text-indigo-500 tracking-widest font-medium mb-3">EmpowerItaly - Open Access</h2>
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-indigo-500">
            An exploration on immigration and work in Italy
          </h1>
          <p class="mb-8 leading-relaxed">Is Italy really been "inveded" by immigrants? <br></br> Which is the occupational rate of Italian and foreings? <br></br> How is the level of education distributed?</p>
          <div class="flex justify-center">
            {/* <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero