import {useState} from 'react'

function Navbar() {

    
    const [isOPen, setIsOPen] = useState(false)

    const menu = () => {
        setIsOPen(!isOPen)
    }

    const closeMenu = () => setIsOPen(false)

  return (
    <div>
        <div className='md:px-52 px-8 z-50 bg-sosa'>
            <nav className=" flex justify-between items-center text-center py-4 sm:items-baseline w-full text-white">
                
                <div className='flex items-center justify-between lg:w-auto w-full z-50'>

                    <div className="">
                        <h1 className='text-2xl font-bold tracking-wider'>SosaMak</h1>
                    </div>

                    <div className="lg:hidden">
                        <button onClick={menu}>
                            {!isOPen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <div className="lg:flex items-center justify-around space-x-8 hidden">
                    <button className="text-md font-semibold tracking-wide ">Home</button>
                    <button className="text-md font-semibold tracking-wide ">About Us</button>
                    <button className="text-md font-semibold tracking-wide ">Blog</button>
                    <button className="text-md font-semibold tracking-wide ">Pages</button>
                    <button className="text-md font-semibold tracking-wide ">Contact</button>
                    <div>
                        <button className="text-md font-bold border-2 border-white bg-sosaTry py-3 px-4 w-44 rounded-full text-white tracking-wider">
                            Try for Free
                        </button>
                    </div>
                </div>

                <div 
                    className={`bg-gray-900 absolute top-0 bottom-0 w-full flex flex-col h-screen py-36 px-12 space-y-12 delay-200 duration-500 z-10 lg:hidden transition ${isOPen ? 'left-0' : 'left-[-100%]'}`}
                >
                    <button onClick={closeMenu} className="text-md font-semibold tracking-wide">Home</button>
                    <button onClick={closeMenu} className="text-md font-semibold tracking-wide">About Us</button>
                    <button onClick={closeMenu} className="text-md font-semibold tracking-wide">BLog</button>
                    <button onClick={closeMenu} className="text-md font-semibold tracking-wide">Pages</button>
                    <button onClick={closeMenu} className="text-md font-semibold tracking-wide">Contact</button>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar