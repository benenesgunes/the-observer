import { FaChevronCircleRight } from "react-icons/fa";

function NewsCard(props) {
    return(
        <div className="flex flex-col gap-y-3 justify-between p-6
                        bg-gray-100 dark:bg-gray-700 rounded-2xl dark:text-gray-100">
            <img src={props.image} alt="news image" className="md:aspect-3/2" />
            <h1 className="text-xl font-bold">
                {props.title}
            </h1>
            <span className="text-xs text-black/50 dark:text-white/50">
                {props.date}
            </span>
            <p className="text-sm md:text-base">
                {props.description}
            </p>
            <div className="flex flex-col gap-y-2">
                <div className="flex gap-x-2 items-center 
                                text-[0.95rem] text-blue-800 dark:text-blue-300
                                border-b-2 border-b-transparent 
                                hover:border-b-blue-800 dark:hover:border-b-blue-300 w-fit">
                    <FaChevronCircleRight />
                    <a href={props.articleLink}>Go to source for more</a>
                </div>
                <a href={props.sourceLink} className="text-xs text-black/50 dark:text-white/50">by {props.sourceTitle}</a>
            </div>
        </div>
    )
}

export default NewsCard