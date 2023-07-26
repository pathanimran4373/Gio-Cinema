import HeroBanner from "./heroBanner/HeroBanner"
import Trending from "./trending/Trending"
import Popular from "./popular/Popular"
import TopRated from "./topRated/TopRated"
const Home = () => {
  return (
    <>
      <HeroBanner />
      <div style={{backgroundColor:"black",padding:"100px 0"}}>
        <Trending />
        <Popular />
        <TopRated />
      </div>
    </>
  )
}

export default Home
