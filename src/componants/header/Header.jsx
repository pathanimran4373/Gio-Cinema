import { useEffect, useState } from "react";
import { BiMoviePlay } from "react-icons/bi";
import Profile from "../profile/Profile";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./style.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();



  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // scroll behaviur on navbar
  const controlNavbar = () => {
    if (window.scrolly > 200) {
      if (window.scrolly > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrolly);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  //search functionality function redirect on search page
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`)

    }
  };


  // navigate on explore page by cliking on tv or movie
  const navigationHandler = (type) => {
    if (type === 'movie') {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");

    }
    setMobileMenu(false)
  };

  return (
    <>
      <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
        <ContentWrapper>
          <div className="logoBox" onClick={() => navigate("/")}>
            <div className="logoBackground">
              <BiMoviePlay className="logo" />
            </div>
            <h2>JioCinema</h2>
          </div>
          
          {/* navigation menu */}
          <ul className="menuItems">
            <li className="menuItem" onClick={() => navigationHandler('movie')}>Movies</li>
            <li className="menuItem" onClick={() => navigationHandler('tv')} > TV Shows</li>
            <Link to="/movies/popular" className="menuItem" style={{ textDecoration: "none" }}>
              <li>Popular</li></Link>
            <Link to="/movies/top_rated" className="menuItem" style={{ textDecoration: "none" }}>
              <li>Top Rated</li></Link>
            <Link to="/movies/upcoming" className="menuItem" style={{ textDecoration: "none" }}>
              <li>Upcoming</li></Link>


          </ul>

          {/* search box */}

          <div className="searchBox-login">
            <div className='searchInput'>
              <input type='text' placeholder='Search....' onChange={(e) => setQuery(e.target.value)} onKeyUp={searchQueryHandler} />
            </div>

            {/* resister section*/}

            <Profile />

          </div>
        </ContentWrapper>
      </header>
    </>

  )
};

export default Header;
