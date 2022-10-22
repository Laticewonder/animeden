import Image from "next/image";

const Feature = () => {
    return (
        <div className="feature relative min-h-fit w-screen top-14 lg:top-8 lg:left-24 lg:w-2/3  bg-slate-600 md:rounded-md truncate cursor-pointer flex ">
            <Image src='https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx127230-FlochcFsyoF4.png' height={188} width={140} />
        </div>
    );
}

export default Feature;