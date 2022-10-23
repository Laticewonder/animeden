import Link from "next/link";
import { useRouter } from "next/router";
import requests from "./requests";

const Category = () => {
    const router = useRouter()
    return ( 
        <div className="category text-sky-200 relative top-20 flex space-x-6 w-fit pl-4 lg:left-20 lg:top-20  items-center lg:text-lg">

            {Object.entries(requests).map(([key,{title,url}]) =>(
                <h2 
                key={key}
                onClick={()=>router.push(`/?q=${key}`)}
                className="cursor-pointer text-neutral-300 rounded-full font-bold bg-neutral-700/50 py-2 px-4 "
                >{title}</h2>
            ))}
        </div>
     );
}
 
export default Category;