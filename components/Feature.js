import Image from "next/image";

const Feature = () => {
    return (
        <div className="feature relative lg:w-3/5 top-14 lg:top-8 lg:left-24  bg-neutral-600 md:rounded-md truncate cursor-pointer flex ">
            <Image src='https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx127230-FlochcFsyoF4.png' height={160} width={112} />
        </div>
    );
}

export default Feature;