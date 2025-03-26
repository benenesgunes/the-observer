import { useEffect, useRef, useState } from "react";
import NewsImage from "../assets/news.jpeg";
import NewsCard from "../components/NewsCard";
import axios from "axios";
import { FaChevronDown } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

function MainPage() {
    const topics = [
        "politics",
        "entertainment",
        "sports",
        "technology",
        "business",
        "finance",
        "society",
        "health",
        "crime",
        "culture",
        "law",
        "government",
        "environment",
        "education",
        "international",
        "economy",
        "cryptocurrency",
        "football",
        "gaming",
        "media",
        "news",
        "community",
        "science",
        "safety",
        "lifestyle",
        "celebrity",
        "economics",
        "television",
        "local",
        "transportation",
        "travel",
        "elections",
        "events",
        "food",
        "automotive",
        "music",
        "history",
        "weather",
        "military",
        "security",
        "conflict",
        "justice",
        "film",
        "social issues",
        "local news",
        "family",
        "cricket",
        "celebrities",
        "shopping",
        "religion",
        "social",
        "defense",
        "fashion",
        "social media",
        "election",
        "healthcare",
        "energy",
        "art",
        "investment",
        "investing",
        "employment",
        "legal",
        "consumer",
        "agriculture",
        "world",
        "innovation",
        "real estate",
        "arts",
        "games",
        "retail",
        "laws",
        "competition",
        "basketball",
        "relationships",
        "international relations",
        "immigration",
        "investigation",
        "war",
        "soccer",
        "animals",
        "space",
        "policy",
        "software",
        "royalty",
        "literature",
        "movies",
        "disaster",
        "leadership",
        "diplomacy",
        "holidays",
        "research",
        "awards",
        "law enforcement",
        "accident",
        "accidents",
        "aviation",
        "event",
        "sport",
        "société",
        "home",
        "internet",
        "public safety",
        "nature",
        "markets",
        "design",
        "wellness",
        "hockey",
        "police",
        "emergency",
        "trade",
        "regulation",
        "baseball",
        "journalism",
        "medicine",
        "salud",
        "architecture",
        "tourism",
        "obituary",
        "infrastructure",
        "rugby",
        "tennis",
        "violence",
        "blockchain",
        "transport",
        "coaching",
        "climate",
        "development",
        "management",
        "artificial intelligence",
        "industry",
        "construction",
        "labor",
        "europe",
        "governance",
        "housing",
        "charity",
        "controversy",
        "regional",
        "beauty",
        "australia",
        "santé",
        "drama",
        "cooking",
        "current affairs",
        "nutrition",
        "psychology",
        "marketing",
        "gesundheit",
        "activism",
        "women",
        "communication",
        "terrorism",
        "comedy",
        "streaming",
        "sales",
        "photography",
        "leisure",
        "fitness",
        "gender",
        "india",
        "lawsuit",
        "market",
        "astrology",
        "sustainability",
        "entrepreneurship",
        "consumer electronics",
        "corruption",
        "racing",
        "ethics",
        "injury",
        "analysis",
        "human rights",
        "children",
        "geography",
        "protest",
        "celebration",
        "legislation",
        "mobile",
        "books",
        "city",
        "telecommunications",
        "stock market",
        "motorsport",
        "obituaries",
        "traffic",
        "cinema",
        "mental health",
        "current events",
        "privacy",
        "medical"
    ]

    const searchRef = useRef();
    const [ loading, setLoading ] = useState(true); 
    const [ error, setError ] = useState();
    const [ topic, setTopic ] = useState();
    const [ language, setLanguage ] = useState("en");
    const [ startDate, setStartDate ] = useState();
    const [ endDate, setEndDate] = useState();

    const API_KEY = import.meta.env.VITE_API_KEY;
    const BASE_URL = "https://api.newsdatahub.com/v1/news";

    const [ news, setNews ] = useState();
    const [ nextCursor, setnextCursor ] = useState();

    const headers = {
        'X-Api-Key': API_KEY,
        'User-Agent': 'TheObserver/1.0'
    }

    const fetchNews = async () => {
        try {
            setError();
            const response = await axios.get(BASE_URL + `?language=${language}`
                                                      + (topic ? `&topic=${topic}` : '')
                                                      + (startDate ? `&start_date=${startDate}` : '')
                                                      + (endDate ? `&end_date=${endDate}` : '')
                                                      + (searchRef?.current?.value ? `&q=${searchRef.current.value}` : ''), { headers });

            setnextCursor(response.data.next_cursor);
            setNews(response.data.data);
        }
        catch(error) {
            setError(error.message);
            console.log(error);
        }
        setLoading(false);
    }

    const fetchNewsWithCursor = async () => {
        try {
            setError();
            const response = await axios.get(BASE_URL + `?language=${language}`
                                                      + (topic ? `&topic=${topic}` : '')
                                                      + (startDate ? `&start_date=${startDate}` : '')
                                                      + (endDate ? `&end_date=${endDate}` : '')
                                                      + (nextCursor ? `&cursor=${nextCursor}` : '')
                                                      + (searchRef.current.value ? `&q=${searchRef.current.value}` : ''), { headers });
            
            setnextCursor(response.data.next_cursor);
            setNews((n) => [...n, ...response.data.data]);
        }
        catch(error) {
            setError(error.message);
            console.log(error);
        }
    }

    const fetchNewsWithSearch = async () => {
        try {
            setError();
            const response = await axios.get(BASE_URL + `?language=${language}`
                                                      + (topic ? `&topic=${topic}` : '')
                                                      + (startDate ? `&start_date=${startDate}` : '')
                                                      + (endDate ? `&end_date=${endDate}` : '')
                                                      + `&q=${searchRef.current.value}`, { headers });
            
            setnextCursor(response.data.next_cursor);
            setNews(response.data.data);
        }
        catch(error) {
            setError(error.message);
        }
    }

    const fetchNewsWithNoFilter = async () => {
        try {
            setError();
            const response = await axios.get(BASE_URL, { headers });
            document.getElementById("topicInput").value = null;
            setTopic();
            document.getElementById("languageInput").value = null;
            setLanguage();
            document.getElementById("startDateInput").value = null;
            setStartDate();
            document.getElementById("endDateInput").value = null;
            setEndDate();
            searchRef.current.value = "";

            setnextCursor(response.data.next_cursor);
            setNews(response.data.data);
        }
        catch(error) {
            setError(error.message);
            console.log(error);
        }
    }

    useEffect(() => {
        fetchNews();
    }, [])

    if(loading) return <p className="text-3xl dark:text-gray-100 text-center my-20">Loading...</p>

    return (
        !error ?
        <>  
            <div className="flex flex-col gap-y-4 justify-center items-center mt-6 dark:text-gray-100">
                <div className="flex gap-x-2 justify-center md:col-start-1 md:col-end-3">
                    <input ref={searchRef} type="text" className="filterInput md:col-start-1 md:col-end-3" placeholder="Search" />
                    <button onClick={fetchNewsWithSearch} className="text-xl size-12 rounded-md lg:rounded-lg flex items-center justify-center cursor-pointer bg-blue-300 dark:bg-blue-800 hover:bg-blue-400 dark:hover:bg-blue-700 transition-all">
                        <IoMdSearch />
                    </button>
                </div>
                <span onClick={() => document.getElementById("filterDiv").classList.toggle("filterOpen")} className="text-xl md:text-2xl font-semibold 
                                                                                                                     flex flex-col items-center justify-center 
                                                                                                                     cursor-pointer">
                    Filters
                    <FaChevronDown />
                </span>
                <div id="filterDiv" className="hidden flex-col md:grid-cols-2 xl:flex-row flex-wrap gap-4 items-center justify-items-center justify-center mx-auto font-text text-[0.8rem] md:text-sm lg:text-base">
                    <input id="topicInput" onChange={(e) => setTopic(e.target.value)} type="text" list="topicOptions" placeholder="Select a topic" className="filterInput" />
                    <datalist id="topicOptions">
                        {topics.map((topic, index) => (
                            <option key={index} value={topic} />
                        ))}
                    </datalist>
                    <input id="languageInput" onChange={(e) => setLanguage(e.target.value)} type="text" list="languageOptions" placeholder="Select a language" className="filterInput" />
                    <datalist id="languageOptions">
                        <option value="en" label="English" />
                        <option value="es" label="Español" />
                        <option value="de" label="Deutsch" />
                        <option value="it" label="Italiano" />
                        <option value="fr" label="Français" />
                        <option value="pt" label="Português" />
                    </datalist>
                    <div className="space-x-4">
                        <label htmlFor="startDate">Start Date:</label>
                        <input id="startDateInput" onChange={(e) => setStartDate(e.target.value)} type="date" className="filterInput" />
                    </div>
                    <div className="space-x-4">
                        <label htmlFor="endDate">End Date:</label>
                        <input id="endDateInput" onChange={(e) => setEndDate(e.target.value)} type="date" className="filterInput" />
                    </div>
                    <div className="flex items-center gap-x-2 md:col-start-1 md:col-end-3">
                        <button onClick={fetchNews} className="p-3 bg-blue-300 dark:bg-blue-800 hover:bg-blue-400 dark:hover:bg-blue-700 transition-all rounded-xl font-semibold cursor-pointer w-fit">
                            Filter News
                        </button>
                        <MdDeleteForever onClick={fetchNewsWithNoFilter} className="font-bold cursor-pointer text-red-500 text-4xl" />
                    </div>
                </div>
            </div>
            <div className="newsDiv">
                {news?.map((news) => (
                    <NewsCard key = {news.id}
                              image = {news.media_type !== "video/mp4" && news.media_type !== null && news.media_url !== "None" ? news.media_url : NewsImage} 
                              title = {news.title}
                              date = {new Date(news.pub_date).toLocaleString()}
                              description = {news.content}
                              articleLink = {news.article_link}
                              sourceLink = {news.source_link}
                              sourceTitle = {news.source_title} />
                ))}
                <div className="flex justify-center items-center">
                    <button onClick={fetchNewsWithCursor} className="bg-blue-300 dark:bg-blue-800 dark:text-gray-100 md:text-base xl:text-lg
                                                                     px-3 py-2 md:px-4 md:py-3 
                                                                     h-fit w-fit rounded-lg
                                                                     hover:bg-blue-400 dark:hover:bg-blue-700 transition-all cursor-pointer">
                        More News
                    </button>
                </div>
            </div>
        </>
        :
        <p className="text-center mt-8 text-xl md:text-2xl lg:text-3xl text-red-700">{error} </p>
    )
}

export default MainPage