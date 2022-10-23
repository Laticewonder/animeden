import Image from "next/image";

const Results = ({result}) => {
    return ( 
        <div className=" p-2 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6
         justify-items-center place-items-center relative top-24 lg:left-24 w-full max-w-screen-lg">
            {result.map(anime=>(
                <div className="anime ">
                <Image key={anime.animeId} src={anime.animeImg} width={185} height={265}  className="rounded-lg"></Image>
                </div>
            ))}
        </div>
     );
}
 
export default Results;