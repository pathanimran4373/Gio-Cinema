import {useState} from 'react'
import ContentWrapper from '../../../componants/contentWrapper/ContentWrapper'
import useFetch from "../../../hooks/useFetch"
import Carousel from '../../../componants/carousel/Carousel'

const Popular = () => {

    const [endpoint, setEndpoint] = useState("movie")

    const { data, loading } = useFetch(`/${endpoint}/popular`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className='carouselTitle'>Explosive Action</span>
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
        </div>
    )
}

export default Popular
