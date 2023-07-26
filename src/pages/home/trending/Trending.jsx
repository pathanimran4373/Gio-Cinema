import { useState } from 'react'
import ContentWrapper from '../../../componants/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../componants/switchTabs/SwitchTabs'
import useFetch from "../../../hooks/useFetch"
import Carousel from '../../../componants/carousel/Carousel'
import './style.scss'

const Trending = () => {
    //get value dynamicaly from api
    const [endpoint, setEndpoint] = useState("day")
    //call the api function
    const { data, loading } = useFetch(`/trending/all/${endpoint}`);
    // call the api when click on tab
    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    };

    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className='carouselTitle'>Popular Hollywood Movies</span>
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    )
}

export default Trending
