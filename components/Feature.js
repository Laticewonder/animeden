import Image from "next/image";

const Feature = () => {
    return ( 
        <div className="feature absolute top-20 left-0 right-0 lg:top-5 lg:left-28 w-full lg:w-2/3 h-[188px] bg-slate-600">
            <Image src='https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx127230-FlochcFsyoF4.png' height={188} width={140}/>
            <h1 className="text-white">feature</h1>
        </div>
     );
}
 
export default Feature;