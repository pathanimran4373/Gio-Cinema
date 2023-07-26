
import {useState} from 'react'
import ContentWrapper from '../../../componants/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../componants/switchTabs/SwitchTabs'
import useFetch from "../../../hooks/useFetch"
import Carousel from '../../../componants/carousel/Carousel'

const TopRated = () => {

    const [endpoint, setEndpoint] = useState("movie")

    const { data, loading } = useFetch(`/${endpoint}/top_rated`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className='carouselTitle'>Top Rated</span>
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
        </div>
    )
}

export default TopRated

