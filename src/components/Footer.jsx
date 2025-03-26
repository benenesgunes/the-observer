import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return(
        <footer className="w-9/10 xl:w-4/5 border-t-2 mx-auto 
                           py-4 lg:py-5
                           text-lg md:text-xl font-text
                           flex flex-col md:flex-row gap-y-4 md:justify-between items-center dark:text-gray-100">
            <div className="font-logo text-3xl md:text-4xl xl:text-5xl font-medium">
                <Link to="/">
                    <span className="text-black/20 dark:text-white/40">THE</span>
                    <span>OBSERVER</span>
                </Link>
            </div>
            <div className="flex gap-x-3 md:gap-x-4 xl:gap-x-5 text-2xl xl:text-3xl">
                <a href="https://www.linkedin.com/in/enes-güneş-88a571286">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/benenesgunes">
                    <FaGithub />
                </a>
            </div>
        </footer>
    )
}

export default Footer