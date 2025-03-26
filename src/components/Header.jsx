import { Link } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdHome } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaInfo } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

function Header() {
    return (
        <>
            <header className="relative border-b-2 p-4 flex items-center justify-between w-9/10 xl:w-4/5 mx-auto dark:text-gray-100">
                <div className="font-logo text-4xl md:text-5xl xl:text-6xl font-medium">
                    <Link to="/">
                        <span className="text-black/20 dark:text-white/40">THE</span>
                        <span>OBSERVER</span>
                    </Link>
                </div>
                <div className="hidden lg:flex gap-x-5 text-sm lg:text-lg font-semibold items-center">
                    <Link to="/" className="border-b-transparent border-b-2 hover:border-b-black dark:hover:border-b-gray-100 p-0.5 leading-none">
                        Home
                    </Link>
                    <Link to="/about" className="border-b-transparent border-b-2 hover:border-b-black dark:hover:border-b-gray-100 p-0.5 leading-none">
                        About
                    </Link>
                    <button onClick={() => document.getElementById("html").classList.toggle("dark")} className='text-2xl
                                                                                                                p-3 cursor-pointer transition-all
                                                                                                                hover:scale-105'>
                        {<FaSun/>}
                    </button>
                </div>
                <RxHamburgerMenu onClick={() => document.getElementById("navbar").classList.toggle("navbarOn")} className="lg:hidden absolute right-0 text-3xl hover:cursor-pointer" />
            </header>
            {/* navbar for mobile */}
            <div id="navbar" className="bg-gray-50 dark:bg-gray-900 dark:text-gray-100 w-full h-fit pb-4
                                        flex flex-col items-center lg:hidden
                                        fixed top-[-100%] z-[1000]
                                        transition-all duration-200
                                        shadow-xl font-text">
                <div className="w-full p-3 text-4xl flex justify-end items-center">
                    <button onClick={() => document.getElementById("html").classList.toggle("dark")} className='text-2xl
                                                                                                                p-3 cursor-pointer transition-all
                                                                                                                hover:scale-105'>
                        {<FaSun/>}
                    </button>
                    <IoMdClose onClick={() => document.getElementById("navbar").classList.toggle("navbarOn")} />
                </div>
                <div className="flex flex-col gap-y-4 w-full">
                    <Link className="navbarLink">
                        Home
                        <MdHome className="navbarIcon" />
                    </Link>
                    <Link className="navbarLink">
                        About
                        <FaInfo className="navbarIcon" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header