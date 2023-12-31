
function Download() {
  return (
    <div className='md:px-52 px-8 py-10'>
        <div className='md:flex items-center'>
            <div className='md:w-2/4'>
                <div>
                    <h2 className='font-bold my-8 md:text-4xl text-3xl'>Available for your smart phone</h2>
                    <p className='tracking-wider max-w-2xl mb-8'>
                        All the power of niche in your pocket. Schedule, publish and monitir your accounts with ease.
                    </p>
                </div>
                <div className='flex md:gap-6 gap-4'>
                    <button className='flex items-center md:w-48 py-3 px-3 rounded-full bg-sosaSignup text-white'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[32px] mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                        <span className="text-base">Google Play</span>
                    </button>
                    <button className='flex items-center md:w-48 py-3 px-3 rounded-full bg-white border-2 border-sosaSignup'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[32px] mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M255.9 120.9l9.1-15.7c5.6-9.8 18.1-13.1 27.9-7.5 9.8 5.6 13.1 18.1 7.5 27.9l-87.5 151.5h63.3c20.5 0 32 24.1 23.1 40.8H113.8c-11.3 0-20.4-9.1-20.4-20.4 0-11.3 9.1-20.4 20.4-20.4h52l66.6-115.4-20.8-36.1c-5.6-9.8-2.3-22.2 7.5-27.9 9.8-5.6 22.2-2.3 27.9 7.5l8.9 15.7zm-78.7 218l-19.6 34c-5.6 9.8-18.1 13.1-27.9 7.5-9.8-5.6-13.1-18.1-7.5-27.9l14.6-25.2c16.4-5.1 29.8-1.2 40.4 11.6zm168.9-61.7h53.1c11.3 0 20.4 9.1 20.4 20.4 0 11.3-9.1 20.4-20.4 20.4h-29.5l19.9 34.5c5.6 9.8 2.3 22.2-7.5 27.9-9.8 5.6-22.2 2.3-27.9-7.5-33.5-58.1-58.7-101.6-75.4-130.6-17.1-29.5-4.9-59.1 7.2-69.1 13.4 23 33.4 57.7 60.1 104zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216z"></path></svg>
                        <span className="text-base">Apple Store</span>
                    </button>
                </div>
            </div>

            <div className='relative h-auto mt-10'>
                <img 
                    src="https://saas-ui.netlify.app/static/media/1.cce0d83f9ac7ab931569.png" 
                    alt="mobile" 
                    className='object-cover relative z-[10000000]'
                />
                <img 
                    src="https://saas-ui.netlify.app/static/media/2.1e787fdbaf186e6b754a.png" 
                    alt="mobile" 
                    className='object-cover absolute md:top-24 top-0 md:left-52 '
                />
            </div>
        </div>
    </div>
  )
}

export default Download