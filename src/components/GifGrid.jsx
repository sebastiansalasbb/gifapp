
import useGetGif from "../hooks/useGetGif"
import { GifCard, InputAddCategory, Loader } from './index';




export default function GifGrid({ categories }) {

    const [images, loading] = useGetGif(categories);
    return (
        <>

            {loading && <Loader />}
            {loading || (<><h3>{categories}</h3>
                {images.map((e) => <GifCard key={e.id}{...e} />)}</>)}


        </>
    )
}
