import {useState} from 'react'

function Navbar() {

    
    const [isOPen, setIsOPen] = useState<boolean>(false)

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
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className=" text-white text-[32px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zm16 128H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16zM58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224zM384 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16z"></path></svg>
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