// import Image from "next/image"

interface NewsCardProps {
    imageUrl?:string|null|undefined,
    title:string,
    desc:string,
    redirectUrl:string
}
const NewsCard:React.FC<NewsCardProps> = ({
    imageUrl,
    title,
    desc,
    redirectUrl
}) => {
    return(
        <div className="w-full flex justify-center">
            <div className="flex flex-col gap-2 h-full">
                <div>
                    <img src={imageUrl ? imageUrl : "/news.jpeg"} alt="News image" className="w-full sm:h-52 h-60" />
                </div>
                <div className="flex-grow">
                    <div className="flex flex-col gap-1">
                        <div className="text-xl font-bold text-[#3c3030] font-['Georgia']">
                            {title}
                        </div>
                        <div className="text-gray-600 font-[' Cambria'] ">
                            {desc}
                        </div>
                    </div>
                </div>
                <div className="flex justify-start items-center mt-auto text-sm gap-5">
                    <div className="">
                        Read full article
                    </div>
                    <div className="text-red-600 cursor-pointer">
                        <a href={redirectUrl ? redirectUrl : "https://newsapi.org/"}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 border-b-2 border-red-600">
                                <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default NewsCard