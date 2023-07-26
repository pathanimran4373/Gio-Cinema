import React, { useEffect, useState } from "react"
import "./style.scss"
import { useParams } from "react-router-dom"
import Cards from "../card/Card"
import Spinner from "../spinner/spinner";
import ContentWrapper from "../contentWrapper/ContentWrapper"

const MovieList = () => {

    const [movieList, setMovieList] = useState([])
    const [loading, setLoading] = useState(false);
    const { type } = useParams()

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        setLoading(true);

        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieList(data.results))
        setLoading(false);

    }

    return (
        <div className="explorePage">
            <ContentWrapper>

                <div className="content">
                    {loading && <Spinner initial={true} />}
                    {!loading && (
                        <>

                            {
                                movieList.map(movie => {
                                    return (
                                        <Cards movie={movie} />

                                    )
                                })
                            }
                        </>

                    )}
                    

                </div>

            </ContentWrapper>
        </div>

    )
}

export default MovieList