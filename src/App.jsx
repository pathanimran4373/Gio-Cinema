import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
// import globale api function
import { fetchDataFromApi } from './utils/api'
//action name from home slice
import { getApiConfiguration, getGenres } from './store/homeSlice'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './componants/header/Header'
import MovieList from "./componants/movieList/MovieList";
import Footer from "./componants/footer/Footer";
import Home from './pages/home/Home'
import Details from './pages/details/Details'
import SearchResult from './pages/searchResult/SearchResult'
import Explore from './pages/explore/Explore'
import LogIn from "./componants/resisterUser/login/LogIn"
import SignUp from "./componants/resisterUser/signUp/SignUp";


function App() {

  const dispatch = useDispatch()

  const { url } = useSelector((state) => state.home)
  // console.log(url)

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration').then((res) => {
      // console.log(res)
      //base url of image and  thir size
      const url = {
        //images to show on home page
        backdrop: res.images.secure_base_url + "original",
        // show poster on home page
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      //store url data into redux store by getApiConfiguration action reducer
      dispatch(getApiConfiguration(url))
    });

  };
  //call api based on genres category
  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};
    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });
    dispatch(getGenres(allGenres));
  };

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:mediaType/:id" element={<Details />}></Route>
        <Route path="movies/:type" element={<MovieList />}></Route>
        <Route path="/search/:query" element={<SearchResult />}></Route>
        <Route path="/explore/:mediaType" element={<Explore />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App
