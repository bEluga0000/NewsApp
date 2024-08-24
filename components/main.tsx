"use client";
import { useEffect, useState } from "react";
import NewsCard from "./cards"
import axios from "axios"
import AppSkeleton from "./skeleton";
import { articles } from "@/data";

interface NewsData{
    source: { id: null, name: string }, 
    author: null, 
    title: string,
    description: string, 
    url: string, 
    urlToImage: string|null, 
    publishedAt: string, 
    content: string 
}
const Main = ({keyPressed}:{keyPressed:string|null}) => {
    // we going to use the every endpoint from the more
    const [loading,setLoading] = useState<boolean>(true)
    const [news,setNews] = useState<NewsData[]>()
    const[errMsg,setErrMsg] = useState<string|undefined>()
    const [searchStr, setSearchStr] = useState<string>("technology OR business OR climate change")
    const [pageSize,setPageSize] = useState<number>(9)
    const [serachFOcused,setSearchFoused] = useState(false)
    const today = new Date();
    const fiveDaysAgo = new Date(today);
    fiveDaysAgo.setDate(today.getDate() - 5);
    const fromDate = fiveDaysAgo.toISOString().split('T')[0]; 
    const makeApiCall = async ()=>{
        const apiKey = process.env.NEXT_PUBLIC_API_KEY
        if (!apiKey) {
            return
        }
        try {
            const res = await axios.get(`https://newsapi.org/v2/everything?q=${searchStr}&from=${fromDate}&apiKey=${apiKey}`)
            if (!res.data || res.data.status !== "ok") {
                setErrMsg("Something went Wrong please refresh page")
                return
            }
            if (res.data.articles.length == 0) {
                setErrMsg("No News with respect for this search")
                return
            }
            let newsLength = res.data.articles.length 
            if(newsLength <= pageSize)
                setNews(res.data.articles)
            else
            {
                let randint = Math.floor(Math.random()*(newsLength-pageSize))
                console.log(randint)
                const slicedNews = res.data.articles.slice(randint,randint+10)
                setNews(slicedNews)
            }
            setErrMsg(undefined)

        } catch (e) {
            setErrMsg("Something went Wrong please refresh page")
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(()=>{
        makeApiCall()
    },[])
    useEffect(()=>{
        if(keyPressed == 'Enter')
        {
            if(serachFOcused)
            {
                setLoading(true);
                setErrMsg(undefined);
                makeApiCall();
            }
        }
    },[keyPressed])
    return <div className="w-full px-5">
        {/* search */}
        <div className="w-full flex justify-center">
            <div className="flex justify-center border ">
                <div>
                    <input type="text" placeholder="🔍 Search" className="p-2 text-md border-none outline-none " onChange={(e)=>{
                        if(e.target.value == "")
                            setSearchStr("technology OR business OR climate change")
                        else
                            setSearchStr(e.target.value)
                    }}
                    onFocus={()=>{
                        setSearchFoused(true)  
                    }}
                    onBlur={()=>{
                        setSearchFoused(false)
                    }}/>
                </div>
                <button
                    className="w-12 bg-red-600 flex justify-center p-2 font-medium cursor-pointer"
                    onClick={() => {
                        setLoading(true);
                        setErrMsg(undefined);
                        makeApiCall();
                    }}
                >
                    Go
                </button>

            </div>
        </div>
        {/* top new text  we going to update as the search history*/}
        <div className="flex justify-center sm:block mt-5 font-bold">
            <div className="text-sm text-red-600 ">
                TOP NEWS FROM INDIA
            </div>
        </div>
        {/* cards comes here */}
        {
            loading && <div className="sm:grid sm:grid-cols-2 gap-8 lg:grid-cols-3 flex flex-col"> 
                {Array(pageSize).fill(0).map(i=>{
                    return <AppSkeleton/>
                })}
            </div>
        }
        {
            !loading && errMsg && <div>
                <div className="sm:grid sm:grid-cols-2 gap-8 lg:grid-cols-3 flex flex-col">
                    {
                        articles?.map((n) => {
                            if (n.description != "[Removed]" && n.title != "[Removed]") {
                                return (
                                    <NewsCard desc={n.description} title={n.title} imageUrl={n.urlToImage} redirectUrl={n.url} />
                                )
                            }
                        })
                    }

                </div>
            </div>
        }
        { !loading && !errMsg && <div className="sm:grid sm:grid-cols-2 gap-8 lg:grid-cols-3 flex flex-col">
                {
                    news?.map((n) => {
                        if (n.description != "[Removed]" && n.title != "[Removed]") {
                            return (
                                <NewsCard desc={n.description} title={n.title} imageUrl={n.urlToImage} redirectUrl={n.url} />
                            )
                        }
                    })
                }

            </div>
        }
    </div>
}
export default Main