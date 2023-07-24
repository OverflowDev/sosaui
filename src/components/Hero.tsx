
function Hero() {
  return (
    <section className='md:flex items-center md:px-52 px-8 py-2 bg-sosa'>

        <div className=''>
            <h1 className=' md:text-7xl text-3xl font-bold text-white md:mt-0 mt-3'>
                The best <span className='font-extralight'>SaaSpik</span> design 2019
            </h1>
            <p className='text-lg text-white my-5 leading-8 md:w-2/3'>
                Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
            </p>
            <div className='bg-white overflow-hidden md:flex  py-1 px-1 md:rounded-full rounded-md lg:mr-20 md:w-2/3'>
                <input type="text" className="p-3 outline-none flex-1" placeholder="Enter your email" />
                <button className="border px-8 bg-sosa md:w-48 w-full text-white py-3 md:rounded-full rounded-md text-[15px] font-semibold">Get Started</button>
            </div>
        </div>

        <div className='mt-20 mb-5'>
            <img src="https://saas-ui.netlify.app/static/media/mobile.169f4fd2217cf54e4b56.png" alt="Mobile" className=' w-[450px]' />
        </div>

    </section>
  )
}

export default Hero