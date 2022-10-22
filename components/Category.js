import Link from "next/link";
import { useRouter } from "next/router";
import requests from "./requests";

const Category = () => {
    const router = useRouter()
    return ( 
        <div className="category text-sky-200 relative top-20 flex space-x-6 w-fit pl-4 lg:left-20 lg:top-16  items-center lg:text-lg">
            {/* <Link href="/"><button className="bg-slate-800 p-2 rounded-lg font-bold text-lg lg:text-xl text-fuchsia-300">Recent</button></Link>
            <Link href="/?q=popular"><button>Popular</button></Link>
            <Link href="/?q=top"><button>Top Airing</button></Link>
            <Link href="/?q=movies"><button>Movies</button></Link> */}

            {Object.entries(requests).map(([key,{title,url}]) =>(
                <h2 
                key={key}
                onClick={()=>router.push(`/?q=${key}`)}
                className="cursor-pointer"
                >{title}</h2>
            ))}
        </div>
     );
}
 
export default Category;