function About() {
    return(
        <div className="dark:text-gray-100 text-xl md:text-2xl lg:text-3xl
                      border-2 rounded-2xl
                      w-4/5 md:w-1/2 lg:w-2/5 p-4 md:p-8 lg:p-12
                      mx-auto my-25">
            <p>
                This project was built for only self improvement. It is non-profit.
            </p>
            <br />
            <p>
                I used React and TailwindCSS for this project.
            </p>
            <br />
            <p>News from <a href="https://newsdatahub.com/" className="hover:border-b-2 font-semibold">NewsDataHub</a></p>
            <br />
            <p>
                LinkedIn: <a href="www.linkedin.com/in/enes-güneş-88a571286" className="hover:border-b-2 font-semibold">Enes Güneş</a>
            </p>
            <br />
            <p>GitHub: <a href="https://github.com/benenesgunes" className="hover:border-b-2 font-semibold">benenesgunes</a></p>
        </div>
    )
}

export default About