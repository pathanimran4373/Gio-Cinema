import useFetch from '../../hooks/useFetch';
import DetailsBanner from './detailsBanner/DetailsBanner';
import { useParams } from "react-router-dom";
import Cast from './cast/Cast';
import './style.scss'
import VideosSection from './vidioSection/VideoSection';
import Recommendation from './carousels/Recomanded';
import Similar from './carousels/Similar';
const Details = () => {

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`)
  //get cast and crew from this api
  const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);
  return (
    <div>
      {/* show data of crew */}
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />

      <div style={{backgroundColor:"black",padding:"100px 0"}}>
      <VideosSection data={data} loading={loading}/>
      <Recommendation mediaType={mediaType} id={id}/>
      <Similar mediaType={mediaType} id={id}/>
      </div>
    </div>
  )
}

export default Details
